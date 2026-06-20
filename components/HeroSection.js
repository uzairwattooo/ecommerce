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
                <aside className="hidden w-[217px] shrink-0 border-r border-black/30 pt-[40px] md:block">
                    <ul className="space-y-[16px] pr-[16px] poppins text-[16px] font-normal text-black">
                        {categories.map((item, i) => (
                            <li key={item} className="flex items-center justify-between">
                                <span>{item}</span>

                                {(i === 0 || i === 1) && (
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="size-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Banner */}
                <div className="relative mt-[40px] h-[344px] flex-1 overflow-hidden bg-black md:max-w-[908px]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        className="hero-swiper h-full bg-black"
                    >
                        {banners.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex h-full items-center justify-between px-5 sm:px-8 lg:px-16">
                                    {/* Text */}
                                    <div className="z-10 max-w-[300px] shrink-0 text-white sm:max-w-[360px]">
                                        <span className="flex items-center gap-5">
                                            <img
                                                className="mb-6 h-[49px] w-[40px] object-contain"
                                                src="/images/Apple.png"
                                                alt="apple"
                                            />

                                            <p className="mb-4 poppins text-[14px] font-normal sm:text-[16px]">
                                                {banner.title}
                                            </p>
                                        </span>

                                        <h2 className="inter text-[32px] font-semibold leading-[40px] tracking-[0.04em] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[60px]">
                                            {banner.heading}
                                        </h2>

                                        <button className="mt-6 flex items-center gap-2 poppins text-[16px] font-medium">
                                            <span className="border-b border-white">Shop Now</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <img
                                        src={banner.image}
                                        alt=""
                                        className="absolute bottom-0 right-[-80px] h-[260px] object-contain sm:right-[-20px] sm:h-[310px] lg:static lg:h-[320px]"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}