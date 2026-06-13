"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
    {
        title: "iPhone 14 Series",
        heading: "Up to 10% off Voucher",
        image: "/images/iphone.png",
    },
    {
        title: "Samsung Galaxy",
        heading: "Up to 20% off Voucher",
        image: "/images/iphone.png",
    },
    {
        title: "MacBook Pro",
        heading: "Special Discount",
        image: "/images/iphone.png",
    },
    {
        title: "Samsung Galaxy",
        heading: "Up to 20% off Voucher",
        image: "/images/iphone.png",
    },
    {
        title: "MacBook Pro",
        heading: "Special Discount",
        image: "/images/iphone.png",
    },
];
const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
];
export default function HeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto flex w-full max-w-[1170px] gap-[45px] px-4 lg:px-0">
                <aside className="hidden w-[217px] border-r border-black/30 pt-[40px] md:block">
                    <ul className="space-y-[16px] pr-[16px] text-[16px] text-black font-normal poppins">
                        {categories.map((item, i) => (
                            <li key={item} className="flex items-center justify-between  ">
                                <span>{item}</span>
                                {(i === 0 || i === 1) && <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                </span>}
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className="relative mt-[40px] h-[344px] flex-1 overflow-hidden bg-black">
                    <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop={true} className="hero-swiper h-[344px] bg-black">
                        {banners.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex h-full items-center justify-between px-16">
                                    <div className="text-white">
                                        <span className="flex items-center gap-5">
                                            <img className="mb-6" src="images/Apple.png" alt="apple" />
                                            <p className="mb-4 poppins font-normal text-[16px]">{banner.title}</p>
                                        </span>
                                        <h2 className="text-5xl inter font-semibold">
                                            {banner.heading}
                                        </h2>
                                        <button className="mt-6 flex gap-2 items-center poppins font-medium text-[16px]">
                                            <span className=" border-b border-white  poppins font-medium text-[16px]">Shop Now</span>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4.5 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <img src={banner.image} alt="" className="h-[320px] object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}