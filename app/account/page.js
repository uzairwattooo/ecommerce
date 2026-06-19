"use client"
import { authClient } from '../../lib/auth-client';
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from "react";
import { toast } from "sonner";

export default function Account() {
    const [activeTab, setActiveTab] = useState("profile");
    const [cancelledOrders, setCancelledOrders] = useState([]);
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    })
    const saveProfile = async () => {
        const res = await fetch("/api/profile", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: `${form.firstName} ${form.lastName}`.trim(),
                address: form.address,
            }),
        });
        const data = await res.json();
        if (!res.ok) {
            toast.error(data.error || "Profile update failed");
            return;
        }
        toast.success("Profile updated successfully");
    };
    const getProfile = async () => {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (!res.ok) return;
        const [firstName = "", ...rest] = (data.name || "").split(" ");
        setForm({
            firstName,
            lastName: rest.join(" "),
            email: data.email || "",
            address: data.address || "",
        });
    };
    useEffect(() => {
        getProfile();
        getCancelledOrders();
    }, []);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handlePasswordChange = (e) => {
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value,
        });
    };
    const updatePassword = async () => {
        if (!passwordForm.currentPassword) {
            toast.error("Current password required");
            return;
        }

        if (!passwordForm.newPassword) {
            toast.error("New password required");
            return;
        }

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const { error } = await authClient.changePassword({
            currentPassword: passwordForm.currentPassword,
            newPassword: passwordForm.newPassword,
            revokeOtherSessions: true,
        });

        if (error) {
            toast.error(error.message || "Password update failed");
            return;
        }

        toast.success("Password updated successfully");

        setPasswordForm({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };
    const handleSave = async () => {
        await saveProfile();

        if (
            passwordForm.currentPassword ||
            passwordForm.newPassword ||
            passwordForm.confirmPassword
        ) {
            await updatePassword();
        }
    };

    const getCancelledOrders = async () => {
        const res = await fetch("/api/my-orders?status=cancelled");
        const data = await res.json();
        setCancelledOrders(data.orders || []);
    };

    return (
        <>
            <section className="w-full bg-white py-12 sm:py-16 lg:py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[50px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mb-[80px]">
                        <div className="poppins flex gap-2 text-[14px]">
                            <Link href="/" className="text-black/50">Home</Link>
                            <span>/</span>
                            <Link href="/account">My Account</Link>
                        </div>

                        <p className="poppins text-[14px]">
                            Welcome! <span className="text-[#DB4444]">{form.firstName || "User"}</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[100px]">
                        <div className="w-full lg:w-[255px]">
                            <h3 className="mb-[16px] poppins text-[16px] font-medium">
                                Manage My Account
                            </h3>

                            <ul className="ml-[20px] space-y-[8px] sm:ml-[35px]">
                                <li
                                    onClick={() => setActiveTab("profile")}
                                    className={`cursor-pointer ${activeTab === "profile" ? "text-[#DB4444]" : "text-black/50"
                                        }`}
                                >
                                    My Profile
                                </li>

                                <li
                                    onClick={() => setActiveTab("address")}
                                    className={`cursor-pointer ${activeTab === "address" ? "text-[#DB4444]" : "text-black/50"
                                        }`}
                                >
                                    Address Book
                                </li>

                                <li
                                    onClick={() => setActiveTab("payment")}
                                    className={`cursor-pointer ${activeTab === "payment" ? "text-[#DB4444]" : "text-black/50"
                                        }`}
                                >
                                    My Payment Options
                                </li>
                            </ul>

                            <h3 className="mb-[16px] mt-[32px] poppins text-[16px] font-medium">
                                My Orders
                            </h3>

                            <ul className="ml-[20px] space-y-[8px] sm:ml-[35px]">
                                <li
                                    onClick={() => setActiveTab("returns")}
                                    className={`cursor-pointer ${activeTab === "returns" ? "text-[#DB4444]" : "text-black/50"
                                        }`}
                                >
                                    My Returns
                                </li>

                                <li
                                    onClick={() => setActiveTab("cancellations")}
                                    className={`cursor-pointer ${activeTab === "cancellations" ? "text-[#DB4444]" : "text-black/50"
                                        }`}
                                >
                                    My Cancellations
                                </li>
                            </ul>

                            <h3 className="mt-[32px] poppins text-[16px] font-medium">
                                My Wishlist
                            </h3>
                        </div>
                        <div className="w-full rounded-[4px] border border-[#F0F0F0] bg-white p-5 shadow-[0_1px_13px_rgba(0,0,0,0.05)] sm:p-[30px] lg:w-[870px] lg:p-[40px]">
                            {activeTab === "profile" && (
                                <>
                                    <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                        Edit Your Profile
                                    </h2>

                                    <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
                                        <div>
                                            <label className="mb-[8px] block poppins text-[16px]">
                                                First Name
                                            </label>
                                            <input
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-[8px] block poppins text-[16px]">
                                                Last Name
                                            </label>
                                            <input
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-[8px] block poppins text-[16px]">
                                                Email
                                            </label>
                                            <input
                                                value={form.email}
                                                disabled
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-[8px] block poppins text-[16px]">
                                                Address
                                            </label>
                                            <input
                                                name="address"
                                                value={form.address}
                                                onChange={handleChange}
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-[24px]">
                                        <h3 className="mb-[16px] poppins text-[16px]">
                                            Password Changes
                                        </h3>
                                        <div className="space-y-[16px]">
                                            <input
                                                name="currentPassword"
                                                type="password"
                                                value={passwordForm.currentPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Current Password"
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />

                                            <input
                                                name="newPassword"
                                                type="password"
                                                value={passwordForm.newPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="New Password"
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />

                                            <input
                                                name="confirmPassword"
                                                type="password"
                                                value={passwordForm.confirmPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Confirm New Password"
                                                className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-[24px] flex flex-col-reverse gap-4 sm:flex-row sm:justify-end sm:gap-[32px]">
                                        <button className="poppins cursor-pointer px-5 py-3 text-[16px] hover:border hover:border-black/30">
                                            Cancel
                                        </button>

                                        <button onClick={handleSave} className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[214px]">
                                            Save Changes
                                        </button>
                                    </div>
                                </>

                            )}
                            {activeTab === "address" && (
                                <>
                                    <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                        Address Book
                                    </h2>

                                    <label className="mb-[8px] block poppins text-[16px]">
                                        Address
                                    </label>

                                    <textarea
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        rows={3}
                                        autoComplete="street-address"

                                        className="w-full rounded-[4px] bg-[#F5F5F5] p-4 outline-none"
                                    />

                                    <button
                                        onClick={saveProfile}
                                        className="mt-6 h-[56px] w-[180px] rounded-[4px] bg-[#DB4444] text-white"
                                    >
                                        Save Address
                                    </button>
                                </>
                            )}
                            {activeTab === "payment" && (
                                <>
                                    <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                        My Payment Options
                                    </h2>

                                    <div className="rounded bg-[#F5F5F5] p-4">
                                        No payment method added yet.
                                    </div>
                                </>
                            )}
                            {activeTab === "returns" && (
                                <>
                                    <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                        My Returns
                                    </h2>

                                    <p>No return requests found.</p>
                                </>
                            )}
                            {activeTab === "cancellations" && (
                                <>
                                    <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                        My Cancellations
                                    </h2>

                                    {cancelledOrders.length === 0 ? (
                                        <p>No cancelled orders found.</p>
                                    ) : (
                                        <div className="space-y-4">
                                            {cancelledOrders.map((order) => (
                                                <div key={order.id} className="rounded bg-[#F5F5F5] p-4">
                                                    <p className="font-medium">Order #{order.id}</p>
                                                    <p>Total: ${order.totalPrice}</p>
                                                    <p className="text-[#DB4444]">Cancelled</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
