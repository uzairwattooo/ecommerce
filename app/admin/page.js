"use client";

import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const getStats = async () => {
            const res = await fetch("/api/admin/dashboard");
            const data = await res.json();

            if (res.ok) {
                setStats(data);
            }
        };

        getStats();
    }, []);

    const cards = [
        { title: "Total Products", value: stats?.totalProducts || 0 },
        { title: "Total Orders", value: stats?.totalOrders || 0 },
        { title: "Pending Orders", value: stats?.pendingOrders || 0 },
        { title: "Cancelled Orders", value: stats?.cancelledOrders || 0 },
        { title: "Delivered Orders", value: stats?.deliveredOrders || 0 },
        { title: "Total Revenue", value: `$${stats?.totalRevenue || 0}` },
    ];

    return (
        <section className="w-full">
            <h1 className="inter text-[32px] font-semibold text-black">
                Dashboard
            </h1>

            <p className="poppins mt-2 text-[14px] text-black/50">
                Overview of your store performance.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((item) => (
                    <div
                        key={item.title}
                        className="rounded bg-white p-6 shadow-[0_1px_13px_rgba(0,0,0,0.08)]"
                    >
                        <p className="poppins text-[14px] text-black/50">{item.title}</p>
                        <h2 className="inter mt-3 text-[30px] font-semibold">
                            {item.value}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}