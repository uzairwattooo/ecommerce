"use client";

import { useState } from "react";

export default function TopBar() {
    const [language, setLanguage] = useState("English");
    return (
        <div className="h-[48px] w-full mx-auto hidden md:block bg-black text-white fixed top-0 left-0 right-0 z-50">
            <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 poppins">
                <p className="text-center text-[14px] font-normal leading-[21px] tracking-[0%]">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <span className="cursor-pointer text-[14px] font-semibold leading-[24px] underline">
                        ShopNow
                    </span>
                </p>
                <div className="absolute right-[136px] top-1/2 flex -translate-y-1/2 items-center">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer appearance-none bg-transparent pr-[24px] text-[14px] font-normal leading-[21px] text-white outline-none"
                    >
                        <option className="text-black" value="English">
                            English
                        </option>
                        <option className="text-black" value="Japanese">
                            Japanese
                        </option>
                        <option className="text-black" value="Urdu">
                            Urdu
                        </option>
                    </select>
                    <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}