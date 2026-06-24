import { db } from "../../../lib/db";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import { productReviews } from "../../../db/schema";
import { nanoid } from "nanoid";
import { eq, desc, and } from "drizzle-orm";
import { user } from "../../../auth-schema";
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const productId = searchParams.get("productId");

        let query = db
            .select({
                id: productReviews.id,
                productId: productReviews.productId,
                userId: productReviews.userId,
                rating: productReviews.rating,
                comment: productReviews.comment,
                createdAt: productReviews.createdAt,
                userName: user.name,
                userEmail: user.email,
            })
            .from(productReviews)
            .leftJoin(user, eq(productReviews.userId, user.id))
            .orderBy(desc(productReviews.createdAt));

        if (productId) {
            query = query.where(eq(productReviews.productId, productId));
        }

        const reviews = await query;

        return Response.json({ reviews });
    } catch (error) {
        return Response.json(
            { error: error.message || "Reviews fetch failed" },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        await db.insert(productReviews).values({
            id: nanoid(),
            productId: body.productId,
            userId: body.userId,
            rating: Number(body.rating),
            comment: body.comment || "",
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message || "Review add failed" },
            { status: 500 }
        );
    }
}
export async function PUT(req, context) {
    try {
        const { id } = await context.params;

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();

        await db
            .update(productReviews)
            .set({
                rating: Number(body.rating),
                comment: body.comment || "",
            })
            .where(
                and(
                    eq(productReviews.id, id),
                    eq(productReviews.userId, session.user.id)
                )
            );

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message || "Review update failed" },
            { status: 500 }
        );
    }
}
export async function DELETE(req, context) {
    try {
        const { id } = await context.params;

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        await db
            .delete(productReviews)
            .where(
                and(
                    eq(productReviews.id, id),
                    eq(productReviews.userId, session.user.id)
                )
            );

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message || "Review delete failed" },
            { status: 500 }
        );
    }
}