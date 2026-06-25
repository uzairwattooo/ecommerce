"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q") || "";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`/api/products?search=${encodeURIComponent(q)}`);
            const data = await res.json();

            if (res.ok) setProducts(Array.isArray(data) ? data : []);
        };

        if (q) getProducts();
    }, [q]);

    return (
        <main className="mx-auto max-w-[1170px] px-4 py-20">
            <h1 className="text-[32px] font-semibold">
                Search results for "{q}"
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <Link key={item.id} href={`/product/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </main>
    );
}