import { db } from "../../../../lib/db";
import { productReviews } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req, context) {
    try {
        const { id } = await context.params;

        await db
            .delete(productReviews)
            .where(eq(productReviews.id, id));

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message || "Review delete failed" },
            { status: 500 }
        );
    }
}