import { db } from "../../../../lib/db";
import { products, orders } from "../../../../db/schema";

export async function GET() {
    try {
        const productsData = await db.select().from(products);
        const ordersData = await db.select().from(orders);

        const totalRevenue = ordersData
            .filter((order) => order.status !== "cancelled")
            .reduce((sum, order) => sum + Number(order.totalPrice || 0), 0);

        return Response.json({
            totalProducts: productsData.length,
            totalOrders: ordersData.length,
            pendingOrders: ordersData.filter((o) => o.status === "pending").length,
            cancelledOrders: ordersData.filter((o) => o.status === "cancelled").length,
            deliveredOrders: ordersData.filter((o) => o.status === "delivered").length,
            totalRevenue,
        });
    } catch (error) {
        return Response.json(
            { error: error.message || "Dashboard data failed" },
            { status: 500 }
        );
    }
}