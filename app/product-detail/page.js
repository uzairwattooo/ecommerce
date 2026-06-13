"use client";

import Link from "next/link";
import { useState } from "react";

const product = {
    mainImage: "/images/Frame 894.png",
    gallery: [
        "/images/Frame 895.png",
        "/images/Frame 896.png",
        "/images/Frame 897.png",
        "/images/Frame 919.png",
    ],
};
const allproduct = [
    {
        image: "/images/Frame 611.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        oldPrice: "$160",
        reviews: "(88)",
        discount: "-35%"
    },
    {
        image: "/images/Frame 612.png",
        name: "AK-900 Wired Keyboard",
        price: "$960",
        oldPrice: "$1160",
        reviews: "(75)",
        discount: "-35%"
    },
    {
        image: "/images/Frame 613.png",
        name: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        reviews: "(99)",
        discount: "-35%"
    },
    {
        image: "/images/Frame 610.png",
        name: "S-Series Comfort Chair",
        price: "$375",
        oldPrice: "$400",
        reviews: "(99)",
    }

];
const colors = ["#A0BCE0", "#E07575"];
const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductDetails() {
    const [activeImage, setActiveImage] = useState(product.mainImage);
    const [activeColor, setActiveColor] = useState(0);
    const [activeSize, setActiveSize] = useState("M");
    const [quantity, setQuantity] = useState(2);

    return (
        <>
            <main className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[80px] flex gap-[12px] poppins text-[14px] leading-[21px]">
                        <Link href="/account" className="text-black/50">Account</Link>
                        <span className="text-black/50">/</span>
                        <span className="text-black/50">Gaming</span>
                        <span className="text-black/50">/</span>
                        <span className="text-black">Havic HV G-92 Gamepad</span>
                    </div>

                    <div className="flex flex-col gap-[70px] lg:flex-row">
                        <div className="flex gap-[30px]">
                            <div className="flex flex-col gap-4">
                                {product.gallery.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className="h-[138px] w-[170px] cursor-pointer rounded-[4px] bg-[#F5F5F5]"
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="h-[100px] w-full object-contain"
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="flex h-[600px] w-[500px] items-center justify-center rounded-[4px] bg-[#F5F5F5]">
                                <img
                                    src={activeImage}
                                    alt=""
                                    className="h-[315px] w-[446px] object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-[400px]">
                            <h1 className="inter text-[24px] font-semibold leading-[24px] tracking-[0.03em]">
                                Havic HV G-92 Gamepad
                            </h1>
                            <div className="mt-[16px] flex items-center gap-[8px]">
                                <span className="text-[16px] text-[#FFAD33]">★★★★★</span>
                                <span className="poppins text-[14px] text-black/50">(150 Reviews)</span>
                                <span className="text-black/50">|</span>
                                <span className="poppins text-[14px] text-[#00FF66]">In Stock</span>
                            </div>

                            <p className="mt-[16px] inter text-[24px] font-normal leading-[24px] tracking-[0.03em]">
                                $192.00
                            </p>

                            <p className="mt-[24px] poppins text-[14px] leading-[21px]">
                                PlayStation 5 Controller Skin High quality vinyl with air channel
                                adhesive for easy bubble free install & mess free removal Pressure
                                sensitive.
                            </p>

                            <div className="mt-[24px] h-[1px] w-full bg-black/50" />
                            <div className="mt-[24px] flex items-center gap-[24px]">
                                <span className="inter text-[20px] font-normal leading-[20px] tracking-[0.03em]">
                                    Colours:
                                </span>

                                <div className="flex gap-[8px]">
                                    {colors.map((color, index) => (
                                        <button
                                            key={color}
                                            onClick={() => setActiveColor(index)}
                                            className={`flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full border ${activeColor === index ? "border-black" : "border-transparent"
                                                }`}
                                        >
                                            <span
                                                className="h-[14px] w-[14px] rounded-full"
                                                style={{ backgroundColor: color }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-[24px] flex items-center gap-[24px]">
                                <span className="inter text-[20px] font-normal leading-[20px] tracking-[0.03em]">
                                    Size:
                                </span>
                                <div className="flex gap-[16px]">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`h-[32px] w-[32px] hover:opacity-85 cursor-pointer rounded-[4px] border text-[14px] ${activeSize === size
                                                ? "border-[#DB4444] bg-[#DB4444] text-white"
                                                : "border-black/50 bg-white text-black"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-[24px] flex items-center gap-[16px]">
                                <div className="flex h-[44px] w-[159px] rounded-[4px] border border-black/50">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="h-full w-[40px] hover:opacity-85 cursor-pointer border-r border-black/50 text-[24px]"
                                    >
                                        −
                                    </button>

                                    <div className="flex flex-1 items-center justify-center poppins text-[20px] font-medium">
                                        {quantity}
                                    </div>

                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="h-full w-[40px] bg-[#DB4444] hover:opacity-85 cursor-pointer text-[24px] text-white"
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="h-[44px] w-[165px] hover:opacity-85 cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                    Buy Now
                                </button>

                                <button className="flex hover:opacity-85 cursor-pointer h-[44px] w-[40px] items-center justify-center rounded-[4px] border border-black/50">
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                </button>
                            </div>
                            <div className="mt-[40px] h-[180px] w-full rounded-[4px] border border-black/50">
                                <div className="flex h-[90px] items-center gap-[16px] border-b border-black/50 px-[16px]">
                                    <span className="text-[28px]"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_261_4843)">
                                            <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M21.6673 10.0002H28.8683C29.5708 10.0002 30.2218 10.3688 30.5833 10.9712L35.0007 18.3335V26.3335C35.0007 27.4381 34.1052 28.3335 33.0007 28.3335H31.6673M35.0007 18.3335H21.6673" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M21.3333 9.66667H28.5343C29.2368 9.66667 29.8878 10.0353 30.2493 10.6377L34.6667 18V26C34.6667 27.1046 33.7712 28 32.6667 28H32M34.6667 18H21.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 11.8182H11.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.81836 15.4545H8.48503" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 19.0909H11.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_261_4843">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span>
                                    <div>
                                        <h3 className="poppins text-[16px] font-medium">Free Delivery</h3>
                                        <p className="mt-[8px] poppins text-[12px] underline">
                                            Enter your postal code for Delivery Availability
                                        </p>
                                    </div>
                                </div>

                                <div className="flex h-[90px] items-center gap-[16px] px-[16px]">
                                    <span className="text-[28px]"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_261_4865)">
                                            <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_261_4865">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span>
                                    <div>
                                        <h3 className="poppins text-[16px] font-medium">Return Delivery</h3>
                                        <p className="mt-[8px] poppins text-[12px]">
                                            Free 30 Days Delivery Returns.{" "}
                                            <span className="underline">Details</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white py-20 border-b border-[#ECECEC]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[40px] flex items-end justify-between">
                        <div>
                            <div className="mb-[24px] flex items-center gap-[16px]">
                                <span className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]" />
                                <p className="poppins text-[16px] font-semibold leading-[20px] text-[#DB4444]">
                                    Related Item
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {allproduct.map((item, index) => (
                            <div
                                key={`${item.name}-${index}`}
                                className="w-full max-w-[270px]"
                            >
                                <div className="group relative h-[250px] w-[270px] overflow-hidden rounded-[4px] bg-[#F5F5F5]">
                                    {item.discount && (

                                        <span className="absolute left-[12px] top-[12px] rounded-[4px] bg-[#DB4444] px-[12px] py-[4px] poppins text-[12px] text-white">
                                            {item.discount}
                                        </span>
                                    )}

                                    <div className="absolute right-[12px] top-[12px] flex flex-col gap-[8px]">
                                        <button className="flex bg-white h-[40px] w-[40px] items-center justify-center rounded-full cursor-pointer hover:opacity-85 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /> </svg> </button>
                                        <button className="flex bg-white h-[40px] w-[40px] items-center justify-center rounded-full cursor-pointer hover:opacity-85 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> </svg> </button>
                                    </div>

                                    <div className="absolute left-[40px] top-[35px] flex h-[180px] w-[190px] items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-[180px] w-[190px] object-contain"
                                        />
                                    </div>
                                    <button className="absolute bottom-0 left-0 h-[41px] w-full cursor-pointer  translate-y-full bg-black poppins text-[12px] font-medium text-white transition duration-300 group-hover:translate-y-0">
                                        Add To Cart
                                    </button>
                                </div>

                                <h3 className="mt-[16px] poppins text-[16px] font-medium leading-[24px] text-black">
                                    {item.name}
                                </h3>

                                <div className="mt-[8px] flex gap-[12px] poppins text-[16px] font-medium leading-[24px]">
                                    <span className="text-[#DB4444]">{item.price}</span>
                                    <span className="text-black/50 line-through">{item.oldPrice}</span>
                                </div>

                                <div className="mt-[8px] flex items-center gap-[8px]">
                                    <span className="text-[14px] text-[#FFAD33]">★★★★★</span>
                                    <span className="poppins text-[14px] font-semibold text-black/50">
                                        {item.reviews}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
}