import { db } from "../../../lib/db";
import { orders, orderItems } from "../../../db/schema";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import { nanoid } from "nanoid";

export async function POST(req) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return Response.json(
                { error: "Please login to place order" },
                { status: 401 }
            );
        }

        const body = await req.json();

        if (!body.items || body.items.length === 0) {
            return Response.json(
                { error: "Cart is empty" },
                { status: 400 }
            );
        }

        const orderId = nanoid();

        await db.insert(orders).values({
            id: orderId,
            userId: session.user.id,

            firstName: body.firstName,
            companyName: body.companyName || null,
            streetAddress: body.streetAddress,
            apartment: body.apartment || null,
            city: body.city,
            phone: body.phone,
            email: body.email,

            subtotal: Number(body.subtotal),
            discount: Number(body.discount || 0),
            totalPrice: Number(body.total),
            paymentMethod: body.paymentMethod || "cash",

            status: "pending",
        });

        await db.insert(orderItems).values(
            body.items.map((item) => ({
                id: nanoid(),
                orderId,
                productId: item.id,
                variantId: item.variantId || null,
                productName: item.name,
                image: item.image || null,
                quantity: Number(item.quantity),
                price: Number(item.price),
            }))
        );

        return Response.json({
            success: true,
            orderId,
        });
    } catch (error) {
        console.log("CREATE_ORDER_ERROR:", error);

        return Response.json(
            { error: "Order create nahi hua" },
            { status: 500 }
        );
    }
}