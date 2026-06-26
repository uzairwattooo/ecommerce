import Stripe from "stripe";
import { db } from "../../../../lib/db";
import { orders } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const body = await req.json();

        const lineItems = body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: item.image ? [item.image] : [],
                },
                unit_amount: Math.round(Number(item.price) * 100),
            },
            quantity: Number(item.quantity || 1),
        }));

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: lineItems,
            metadata: {
                orderId: body.orderId,
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
        });

        await db
            .update(orders)
            .set({
                stripeSessionId: session.id,
                paymentStatus: "paid",
            })
            .where(eq(orders.id, body.orderId));

        return Response.json({ url: session.url });
    } catch (error) {
        return Response.json(
            { error: error.message || "Stripe checkout failed" },
            { status: 500 }
        );
    }
}