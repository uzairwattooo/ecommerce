"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getBanners = async () => {
            const res = await fetch("/api/banners");
            const data = await res.json();

            if (res.ok) setBanners(data.banners || []);
        };

        const getCategories = async () => {
            const res = await fetch("/api/admin/categories");
            const data = await res.json();

            if (res.ok) setCategories(data.categories || []);
        };

        getBanners();
        getCategories();
    }, []);

    return (
        <section className="w-full bg-white">
            <div className="mx-auto flex w-full max-w-[1170px] gap-[45px] px-4 lg:px-0">
                <aside className="hidden w-[217px] shrink-0 border-r border-black/30 pt-[40px] md:block">
                    <ul className="space-y-[16px] pr-[16px] poppins text-[16px] font-normal text-black">
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <Link
                                    href={`/category/${cat.slug}`}
                                    className="flex items-center justify-between hover:text-[#DB4444]"
                                >
                                    <span>{cat.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="relative mt-[40px] h-[344px] flex-1 overflow-hidden bg-black md:max-w-[908px]">
                    {banners.length === 0 ? (
                        <div className="flex h-full items-center justify-center text-white">
                            No banners found
                        </div>
                    ) : (
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop={true}
                            className="hero-swiper h-full bg-black"
                        >
                            {banners.map((banner) => (
                                <SwiperSlide key={banner.id}>
                                    <div className="flex h-full items-center justify-between px-5 sm:px-8 lg:px-16">
                                        <div className="z-10 max-w-[300px] shrink-0 text-white sm:max-w-[360px]">
                                            <p className="mb-4 poppins text-[14px] font-normal sm:text-[16px]">
                                                <span className="flex items-center gap-5">
                                                    <img className="mb-6 h-[49px] w-[40px] object-contain" src="/images/Apple.png" alt="apple" />
                                                    <p className="mb-4 poppins text-[14px] font-normal sm:text-[16px]"> {banner.title} </p> </span>  
                                            </p>

                                            <h2 className="inter text-[32px] font-semibold leading-[40px] tracking-[0.04em] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[60px]">
                                                {banner.heading}
                                            </h2>

                                            <Link
                                                href={banner.buttonLink || "/products"}
                                                className="mt-6 flex w-fit items-center gap-2 poppins text-[16px] font-medium"
                                            >
                                                <span className="border-b border-white">
                                                    {banner.buttonText || "Shop Now"}
                                                </span>
                                                →
                                            </Link>
                                        </div>

                                        <img
                                            src={banner.image}
                                            alt={banner.title}
                                            className="absolute bottom-0 right-[-80px] h-[260px] object-contain sm:right-[-20px] sm:h-[310px] lg:static lg:h-[320px]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
}