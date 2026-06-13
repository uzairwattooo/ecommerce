"use client"
import Link from "next/link";
import { useState } from "react";

export default function About() {
    const stats = [
        { id: 1, value: "10.5k", text: "Sallers active our site", icon: "/icons/icon_shop.svg" },
        { id: 2, value: "33k", text: "Mopnthly Produduct Sale", icon: "/icons/Icon-Moneybag.svg" },
        { id: 3, value: "45.5k", text: "Customer active in our site", icon: "/icons/Icon-Shopping bag.svg" },
        { id: 4, value: "25k", text: "Anual gross sale in our site", icon: "/icons/icon_shop.svg" },
    ];
    const team = [
        {
            name: "Tom Cruise",
            role: "Founder & Chairman",
            image: "/images/man one.png",
        },
        {
            name: "Emma Watson",
            role: "Managing Director",
            image: "/images/girl tow.png",
        },
        {
            name: "Will Smith",
            role: "Product Designer",
            image: "/images/man three.png",
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState(3);
    return (
        <>
            <section className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mx-auto mb-[80px] max-w-[1170px] px-4 lg:px-0">
                        <div className="flex gap-[12px] poppins text-[14px] leading-[21px]">
                            <Link href="/" className="text-black/50">Home</Link>
                            <span className="text-black/50">/</span>
                            <Link href="/about" className="text-black">About</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-[60px] lg:flex-row">
                        <div className="w-full px-4 lg:ml-[135px] lg:w-[525px] lg:px-0">
                            <h1 className="inter text-[54px] font-semibold leading-[64px] tracking-[0.06em] text-black">
                                Our Story
                            </h1>
                            <div className="mt-[40px] space-y-[24px] poppins text-[16px] font-normal leading-[26px] text-black">
                                <p>
                                    Launced in 2015, Exclusive is South Asia’s premier online
                                    shopping marketplace with an active presense in Bangladesh.
                                    Supported by wide range of tailored marketing, data and service
                                    solutions, Exclusive has 10,500 sallers and 300 brands and
                                    serves 3 millioons customers across the region.
                                </p>

                                <p>
                                    Exclusive has more than 1 Million products to offer, growing at
                                    a very fast. Exclusive offers a diverse assortment in categories
                                    ranging from consumer.
                                </p>
                            </div>
                        </div>
                        <div className="h-[609px] w-full overflow-hidden rounded-l-[4px] lg:w-[705px]">
                            <img
                                src="/images/Side Image (1).png"
                                alt="Our Story"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedCategory(item.id)}
                                className={`flex h-[230px] shrink-0 flex-col items-center justify-center gap-[16px] cursor-pointer hover:opacity-85 rounded-[4px] border ${selectedCategory === item.id
                                    ? "border-[#DB4444] bg-[#DB4444] text-white"
                                    : "border-black/30 bg-white text-black"
                                    }`}
                            >
                                <div
                                    className={`flex h-[80px] w-[80px] items-center justify-center rounded-full ${item.active ? "bg-white" : "bg-black/70"
                                        }`}
                                >
                                    <div
                                        className={`flex h-[58px] w-[58px] items-center justify-center rounded-full ${item.active ? "bg-white text-black" : "bg-black text-white"
                                            }`}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className={`h-14 w-14 ${selectedCategory === item.id ? "invert brightness-0" : ""
                                                }`}
                                        />

                                    </div>
                                </div>


                                <h3 className="mt-[24px] inter text-[32px] font-bold leading-[30px] tracking-[0.04em]">
                                    {item.value}
                                </h3>

                                <p className="mt-[12px] poppins text-center text-[16px] leading-[24px]">
                                    {item.text}
                                </p>
                            </button>
                        ))}
                    </div>
                    <div className="mt-[140px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
                        {team.map((person) => (
                            <div key={person.name}>
                                <div className="flex w-[370px] h-[430px] items-end justify-center bg-[#F5F5F5]">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="h-[395px] w-full object-contain object-bottom"
                                    />
                                </div>

                                <h3 className="mt-[32px] inter text-[32px] font-medium leading-[30px] tracking-[0.04em]">
                                    {person.name}
                                </h3>

                                <p className="mt-[8px] poppins text-[16px] leading-[24px]">
                                    {person.role}
                                </p>

                                <div className="mt-[16px] flex gap-[16px] text-[20px]">
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_246_4760)">
                                            <path d="M14.1211 4.44336C14.9979 4.09254 15.9592 4.00852 16.8838 4.20117C17.8082 4.39388 18.6557 4.85462 19.3193 5.52637L19.3486 5.55664H19.3906C19.7296 5.55426 20.0806 5.59738 20.498 5.53809C20.882 5.48352 21.3278 5.34203 21.915 5.00977C21.6091 6.49447 21.4324 7.16729 20.7646 8.08301L20.7451 8.10938V8.14258C20.7451 11.9414 19.5781 14.7564 17.8262 16.7393C16.0729 18.7234 13.7275 19.8816 11.3623 20.3535C9.7452 20.6761 7.754 20.5731 5.99609 20.2109C5.11794 20.03 4.30096 19.7842 3.62012 19.4971C3.03699 19.2511 2.56006 18.9759 2.22949 18.6885C2.6606 18.6463 3.41195 18.553 4.24414 18.3594C5.24389 18.1267 6.37194 17.749 7.20312 17.1406L7.31934 17.0557L7.19922 16.9766C6.50766 16.5207 4.81165 15.4984 3.73145 13.5166C2.66701 11.5637 2.19288 8.66296 3.91406 4.42578C5.57929 6.34325 7.27273 7.66041 8.99512 8.36719C9.57627 8.60556 9.94226 8.72333 10.2314 8.79102C10.5195 8.85841 10.7322 8.8754 10.9922 8.91113L11.2871 8.95215L11.1074 8.77148C11.1323 7.84188 11.4255 6.93867 11.9541 6.17285C12.4906 5.3958 13.2444 4.79414 14.1211 4.44336ZM15.9053 5.90137C15.119 5.90124 14.3638 6.20994 13.8027 6.76074C13.3119 7.24267 13.0038 7.87627 12.9248 8.55371L12.9053 8.84668L12.877 10.4209C12.8756 10.4914 12.8592 10.5613 12.8291 10.625C12.799 10.6887 12.7556 10.7452 12.7021 10.791C12.6487 10.8368 12.5861 10.8716 12.5186 10.8916C12.4511 10.9115 12.3802 10.9166 12.3105 10.9072L10.749 10.6953C8.71753 10.4183 6.7663 9.48248 4.88965 7.91895L4.75781 7.80859L4.72754 7.97754C4.42573 9.64812 4.56793 11.0709 5.14746 12.3018C5.72674 13.532 6.73875 14.5607 8.15625 15.4521L9.90234 16.5498C9.97145 16.5932 10.0296 16.6529 10.0703 16.7236C10.111 16.7944 10.1339 16.8744 10.1367 16.9561C10.1395 17.0377 10.1217 17.1189 10.0859 17.1924C10.0501 17.2658 9.99667 17.3299 9.93066 17.3779L8.33887 18.541L8.11523 18.7041L8.3916 18.7207C9.34472 18.7801 10.2532 18.738 11.0098 18.5879C13.3887 18.1129 15.375 16.9789 16.7656 15.2207C18.1559 13.4627 18.9453 11.0883 18.9453 8.14258C18.9453 7.99705 18.8715 7.78499 18.7441 7.55762C18.6144 7.32598 18.4211 7.06491 18.167 6.82031C17.6584 6.33085 16.8999 5.90145 15.9053 5.90137Z" fill="black" stroke="white" strokeWidth="0.2" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_246_4760">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z" fill="black" />
                                    </svg>
                                    </span>
                                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="black" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[40px] flex justify-center gap-[12px]">
                        {[0, 1, 2, 3, 4].map((dot) => (
                            <span
                                key={dot}
                                className={`h-[12px] w-[12px] rounded-full ${dot === 2 ? "bg-[#DB4444]" : "bg-black/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full max-w-[1260px] mx-auto bg-white pb-8 pt-[80px]">
                <div className="mx-auto max-w-[943px]">
                    <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative h-[80px] w-[80px] rounded-full bg-[#C1C1C1]">
                                <div className="absolute left-[11px] top-[11px] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2829_272)">
                                            <path d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82573 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82573 31.6667 11.6667 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M21.6666 10.0002H28.8676C29.5701 10.0002 30.2211 10.3688 30.5826 10.9712L35 18.3335V26.3335C35 27.4381 34.1046 28.3335 33 28.3335H31.6667M35 18.3335H21.6666" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M21.3333 9.66667H28.5343C29.2368 9.66667 29.8878 10.0353 30.2493 10.6377L34.6667 18V26C34.6667 27.1046 33.7712 28 32.6667 28H32M34.6667 18H21.3333" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 11.8184H11.6667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.81818 15.4546H8.48484" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 19.0908H11.6667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2829_272">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                            </div>

                            <h3 className="mt-[24px] poppins text-[20px] font-semibold leading-[28px]">
                                FREE AND FAST DELIVERY
                            </h3>

                            <p className="mt-[8px] poppins text-[14px] leading-[21px] text-black">
                                Free delivery for all orders over $140
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="relative h-[80px] w-[80px] rounded-full bg-[#C1C1C1]">
                                <div className="absolute left-[11px] top-[11px] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2829_310)">
                                            <path d="M13.3334 24.9998C13.3334 23.1589 11.841 21.6665 10 21.6665C8.15907 21.6665 6.66669 23.1589 6.66669 24.9998V28.3332C6.66669 30.1741 8.15907 31.6665 10 31.6665C11.841 31.6665 13.3334 30.1741 13.3334 28.3332V24.9998Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M33.3334 24.9998C33.3334 23.1589 31.841 21.6665 30 21.6665C28.1591 21.6665 26.6667 23.1589 26.6667 24.9998V28.3332C26.6667 30.1741 28.1591 31.6665 30 31.6665C31.841 31.6665 33.3334 30.1741 33.3334 28.3332V24.9998Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.66669 24.9998V19.9998C6.66669 16.4636 8.07145 13.0722 10.5719 10.5717C13.0724 8.07126 16.4638 6.6665 20 6.6665C23.5362 6.6665 26.9276 8.07126 29.4281 10.5717C31.9286 13.0722 33.3334 16.4636 33.3334 19.9998V24.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2829_310">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </div>

                            <h3 className="mt-[24px] poppins text-[20px] font-semibold leading-[28px]">
                                24/7 CUSTOMER SERVICE
                            </h3>

                            <p className="mt-[8px] poppins text-[14px] leading-[21px] text-black">
                                Friendly 24/7 customer support
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="relative h-[80px] w-[80px] rounded-full bg-[#C1C1C1]">
                                <div className="absolute left-[11px] top-[11px] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.983 2.5874C21.0046 2.5874 22.004 2.73663 22.7574 3.01807L31.0748 6.13525H31.0758C33.2953 6.96202 35.0504 9.50761 35.0504 11.8667V24.2495C35.0504 25.3367 34.7062 26.5895 34.1237 27.7485C33.5777 28.8348 32.8403 29.8024 32.0309 30.4556L31.8678 30.5825L24.7008 35.9321L24.6949 35.937C23.4122 36.9261 21.7236 37.4331 19.9996 37.4331C18.2769 37.433 16.5846 36.9263 15.2643 35.9478H15.2633L8.09924 30.5991C7.22654 29.9484 6.4252 28.9208 5.84241 27.7593C5.25956 26.5976 4.91663 25.3447 4.91663 24.2661V11.8667C4.91663 9.50749 6.67157 6.96189 8.89124 6.13525H8.89221L17.2086 3.01807C17.962 2.73655 18.9614 2.58743 19.983 2.5874ZM20.0006 4.08545C19.202 4.08763 18.3751 4.19487 17.7418 4.43115L17.7408 4.43213L9.42444 7.54834H9.42346C8.59596 7.85993 7.85473 8.52245 7.32385 9.29053C6.79277 10.0589 6.43323 10.9898 6.43323 11.8833V24.2661C6.43323 25.1606 6.74381 26.1893 7.20081 27.1011C7.65769 28.0126 8.29305 28.8726 9.00061 29.4009L16.1676 34.7505C17.2294 35.5444 18.628 35.9252 20.0016 35.9253C21.3755 35.9253 22.7778 35.5442 23.8473 34.7515L23.8492 34.7505L31.0153 29.4009L31.0162 29.3999C31.731 28.8638 32.3666 28.0049 32.8219 27.0942C33.2772 26.1836 33.5836 25.1596 33.5836 24.2661V11.8667C33.5836 10.9807 33.2232 10.0539 32.693 9.28662C32.1625 8.51907 31.422 7.85386 30.5973 7.53369L30.5924 7.53174L22.275 4.41455L22.2662 4.41162C21.6281 4.18643 20.8 4.08327 20.0006 4.08545Z" fill="#FAFAFA" stroke="#FAFAFA" />
                                        <path d="M24.4039 14.77C24.692 14.4822 25.1755 14.482 25.4635 14.77C25.7514 15.058 25.7513 15.5415 25.4635 15.8296L18.2965 22.9966C18.1452 23.1478 17.9574 23.2163 17.7662 23.2163C17.5752 23.2162 17.3881 23.1477 17.2369 22.9966L14.5533 20.313C14.2655 20.0249 14.2654 19.5414 14.5533 19.2534C14.8414 18.9654 15.3248 18.9655 15.6129 19.2534L17.7662 21.4067L18.1207 21.0532L24.4039 14.77Z" fill="#FAFAFA" stroke="#FAFAFA" />
                                    </svg>

                                </div>
                            </div>

                            <h3 className="mt-[24px] poppins text-[20px] font-semibold leading-[28px]">
                                MONEY BACK GUARANTEE
                            </h3>

                            <p className="mt-[8px] poppins text-[14px] leading-[21px] text-black">
                                We return money within 30 days
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[62px] flex justify-end">
                    <button

                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 19V5m0 0-6 6m6-6 6 6"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}