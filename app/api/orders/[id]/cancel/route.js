import { db } from "../../../../../lib/db";
import { orders } from "../../../../../db/schema";
import { auth } from "../../../../../lib/auth";
import { headers } from "next/headers";
import { eq, and } from "drizzle-orm";

export async function PATCH(req, { params }) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await db
        .update(orders)
        .set({ status: "cancelled" })
        .where(and(eq(orders.id, params.id), eq(orders.userId, session.user.id)));

    return Response.json({ success: true });
}