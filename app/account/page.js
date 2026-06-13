import Link from 'next/link'
import React from 'react'

export default function Account() {
    return (
        <>
            <section className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[80px] flex items-center justify-between">
                        <div className="poppins flex gap-2 text-[14px]">
                            <Link href="/" className="text-black/50">Home</Link>
                            <span>/</span>
                            <Link href="/account">My Account</Link>
                        </div>

                        <p className="poppins text-[14px]">
                            Welcome! <span className="text-[#DB4444]">Md Rimel</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-[100px] lg:flex-row">
                        <div className="w-[255px]">
                            <h3 className="mb-[16px] poppins text-[16px] font-medium">
                                Manage My Account
                            </h3>

                            <ul className="ml-[35px] space-y-[8px]">
                                <li className="text-[#DB4444]">My Profile</li>
                                <li className="text-black/50">Address Book</li>
                                <li className="text-black/50">My Payment Options</li>
                            </ul>

                            <h3 className="mt-[32px] mb-[16px] poppins text-[16px] font-medium">
                                My Orders
                            </h3>

                            <ul className="ml-[35px] space-y-[8px]">
                                <li className="text-black/50">My Returns</li>
                                <li className="text-black/50">My Cancellations</li>
                            </ul>

                            <h3 className="mt-[32px] poppins text-[16px] font-medium">
                                My Wishlist
                            </h3>
                        </div>
                        <div className="w-full rounded-[4px] border border-[#F0F0F0] bg-white p-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.05)] lg:w-[870px]">
                            <h2 className="mb-[24px] poppins text-[20px] font-medium text-[#DB4444]">
                                Edit Your Profile
                            </h2>

                            <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">

                                <div>
                                    <label className="mb-[8px] block poppins text-[16px]">
                                        First Name
                                    </label>
                                    <input
                                        defaultValue="Muhammad"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-[8px] block poppins text-[16px]">
                                        Last Name
                                    </label>
                                    <input
                                        defaultValue="Uzair"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-[8px] block poppins text-[16px]">
                                        Email
                                    </label>
                                    <input
                                        defaultValue="uzair@gmail.com"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-[8px] block poppins text-[16px]">
                                        Address
                                    </label>
                                    <input
                                        defaultValue="Ahli Gangoo, 4000, Pakistan"
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
                                        placeholder="Current Password"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />

                                    <input
                                        placeholder="New Password"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />

                                    <input
                                        placeholder="Confirm New Password"
                                        className="h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-[24px] flex justify-end gap-[32px]">
                                <button className="poppins cursor-pointer px-5 hover:border hover:border-black/30 text-[16px]">
                                    Cancel
                                </button>

                                <button className="h-[56px] w-[214px] cursor-pointer hover:opacity-85 rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
