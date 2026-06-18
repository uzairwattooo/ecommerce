"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CouponsPage() {
    const [coupons, setCoupons] = useState([]);
    const [form, setForm] = useState({
        code: "",
        discountPercent: "",
        expiresAt: "",
        isActive: true,
    });

    const getCoupons = async () => {
        const res = await fetch("/api/coupons");
        const data = await res.json();
        setCoupons(Array.isArray(data) ? data : []);
    };

    useEffect(() => {
        getCoupons();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const addCoupon = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/coupons", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.error || "Coupon add nahi hua");
            return;
        }

        toast.success("Coupon added");

        setForm({
            code: "",
            discountPercent: "",
            expiresAt: "",
            isActive: true,
        });

        getCoupons();
    };
    const deleteCoupon = async (id) => {
        const confirmed = confirm("Delete this coupon?");

        if (!confirmed) return;

        const res = await fetch("/api/coupons", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.error);
            return;
        }

        toast.success("Coupon deleted");

        getCoupons();
    };
    return (
        <div>
            <h1 className="inter text-[36px] font-semibold">Coupons</h1>

            <form onSubmit={addCoupon} className="mt-8 grid gap-5 rounded bg-white p-6 shadow md:grid-cols-4">
                <input
                    name="code"
                    value={form.code}
                    onChange={handleChange}
                    placeholder="Coupon Code"
                    className="h-[50px] rounded border px-4 outline-none"
                    required
                />

                <input
                    name="discountPercent"
                    type="number"
                    value={form.discountPercent}
                    onChange={handleChange}
                    placeholder="Discount %"
                    className="h-[50px] rounded border px-4 outline-none"
                    required
                />

                <input
                    name="expiresAt"
                    type="datetime-local"
                    value={form.expiresAt}
                    onChange={handleChange}
                    className="h-[50px] rounded border px-4 outline-none"
                />

                <label className="flex items-center gap-2">
                    <input
                        name="isActive"
                        type="checkbox"
                        checked={form.isActive}
                        onChange={handleChange}
                    />
                    Active
                </label>

                <button className="h-[50px] rounded bg-[#DB4444] text-white md:col-span-4">
                    Add Coupon
                </button>
            </form>

            <div style={{padding:"20px"}} className="mt-8 rounded bg-white shadow">
                <table className="w-full">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="pb-3">Code</th>
                            <th className="pb-3">Discount</th>
                            <th className="pb-3">Active</th>
                            <th className="pb-3">Expires</th>
                            <th className="pb-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody >
                        {coupons.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="py-4">{item.code}</td>
                                <td className="py-4">{item.discountPercent}%</td>
                                <td className="py-4">{item.isActive ? "Yes" : "No"}</td>
                                <td className="py-4">
                                    {item.expiresAt ? new Date(item.expiresAt).toLocaleString() : "No expiry"}
                                </td>
                                <td className="py-4">
                                    <button
                                        style={{backgroundColor:'red'}}
                                        onClick={() => deleteCoupon(item.id)}
                                        className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}