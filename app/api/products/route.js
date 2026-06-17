import { db } from "../../../lib/db";
import { products, productImages, productVariants } from "../../../db/schema";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";

export async function POST(req) {
    try {
        const body = await req.json();

        const productId = nanoid();

        await db.insert(products).values({
            id: productId,
            name: body.name,
            description: body.description,
            basePrice: Number(body.price),
            oldPrice: body.oldPrice ? Number(body.oldPrice) : null,
            discountPercent: body.discountPercent ? Number(body.discountPercent) : null,
            categoryId: body.category,
            ratingCount: 0,
            isFlashSale: body.isFlashSale || false,
            isBestSelling: body.isBestSelling || false,
            isFeatured: body.isFeatured || false,
            saleEndTime: body.saleEndTime ? new Date(body.saleEndTime) : null,
        });

        for (const color of body.colors || []) {
            const variantId = nanoid();

            await db.insert(productVariants).values({
                id: variantId,
                productId,
                color: color.colorCode,
                size: null,
                price: Number(body.price),
                stock: Number(body.stock || 0),
                imageUrl: color.images?.[0] || null,
            });

            for (const img of color.images || []) {
                await db.insert(productImages).values({
                    id: nanoid(),
                    productId,
                    imageUrl: img,
                    color: color.colorCode,
                    isPrimary: false,
                });
            }
        }



        return Response.json({ success: true });
    } catch (error) {
        console.log("ADD_PRODUCT_ERROR:", error);
        return Response.json({ error: "Product save nahi hua" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const productsData = await db.select().from(products);
        const imagesData = await db.select().from(productImages);
        const variantsData = await db.select().from(productVariants);

        const formatted = productsData.map((p) => ({
            ...p,
            images: imagesData.filter((img) => img.productId === p.id),
            variants: variantsData.filter((v) => v.productId === p.id),
        }));

        return Response.json(formatted);
    } catch (error) {
        console.log("GET_PRODUCTS_ERROR:", error);

        return Response.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}