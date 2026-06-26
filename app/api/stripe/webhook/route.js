import Stripe from "stripe";
import { db } from "../../../../lib/db";
import { orders } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;

        if (orderId) {
            await db
                .update(orders)
                .set({
                    paymentStatus: "paid",
                    status: "processing",
                    stripeSessionId: session.id,
                })
                .where(eq(orders.id, orderId));
        }
    }

    if (event.type === "checkout.session.expired") {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;

        if (orderId) {
            await db
                .update(orders)
                .set({
                    paymentStatus: "failed",
                    status: "cancelled",
                    stripeSessionId: session.id,
                })
                .where(eq(orders.id, orderId));
        }
    }

    return Response.json({ received: true });
}