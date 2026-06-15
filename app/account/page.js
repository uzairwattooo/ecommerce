import Link from 'next/link'
import React from 'react'

export default function Account() {
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
                            Welcome! <span className="text-[#DB4444]">Md Rimel</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[100px]">
                        <div className="w-full lg:w-[255px]">
                            <h3 className="mb-[16px] poppins text-[16px] font-medium">
                                Manage My Account
                            </h3>

                            <ul className="ml-[20px] space-y-[8px] sm:ml-[35px]">
                                <li className="text-[#DB4444]">My Profile</li>
                                <li className="text-black/50">Address Book</li>
                                <li className="text-black/50">My Payment Options</li>
                            </ul>

                            <h3 className="mb-[16px] mt-[32px] poppins text-[16px] font-medium">
                                My Orders
                            </h3>

                            <ul className="ml-[20px] space-y-[8px] sm:ml-[35px]">
                                <li className="text-black/50">My Returns</li>
                                <li className="text-black/50">My Cancellations</li>
                            </ul>

                            <h3 className="mt-[32px] poppins text-[16px] font-medium">
                                My Wishlist
                            </h3>
                        </div>

                        <div className="w-full rounded-[4px] border border-[#F0F0F0] bg-white p-5 shadow-[0_1px_13px_rgba(0,0,0,0.05)] sm:p-[30px] lg:w-[870px] lg:p-[40px]">
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

                            <div className="mt-[24px] flex flex-col-reverse gap-4 sm:flex-row sm:justify-end sm:gap-[32px]">
                                <button className="poppins cursor-pointer px-5 py-3 text-[16px] hover:border hover:border-black/30">
                                    Cancel
                                </button>

                                <button className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[214px]">
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
