"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", href: "/admin" },
        { name: "Products", href: "/admin/products" },
        { name: "Add Categories", href: "/admin/categories" },
        { name: "Orders", href: "/admin/orders" },
        { name: "Customers", href: "/admin/customers" },
        { name: "Coupons", href: "/admin/coupons" },
        { name: "Flash Sale Timer", href: "/admin/settings" },
    ];

    return (
        <aside className="sticky top-0 hidden h-screen w-[300px] bg-black px-6 py-8 text-white lg:block">
            <h2 className="inter text-[28px] font-semibold">Admin</h2>

            <nav className="mt-10 flex flex-col gap-3">
                {links.map((link) => {
                    const active =
                        pathname === link.href ||
                        (link.href !== "/admin" &&
                            pathname.startsWith(link.href));

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded px-4 py-3 transition-all ${active
                                    ? "bg-[#DB4444] text-white"
                                    : "hover:bg-white/10 text-white/80"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <Link
                    href="/"
                    className="mt-4 rounded px-4 py-3 hover:bg-white/10 text-white/80"
                >
                    Back To Store
                </Link>
            </nav>
        </aside>
    );
}