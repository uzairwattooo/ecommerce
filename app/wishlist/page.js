import React from 'react'

export default function Wishlist() {
    const allproduct = [
        {
            image: "/images/Frame 606.png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            oldPrice: "$160",
            discount: "-40%",
        },
        {
            image: "/images/Frame 610.png",
            name: "AK-900 Wired Keyboard",
            price: "$960",
            oldPrice: "$1160",
            cart: true,
        },
        {
            image: "/images/Frame 608 (2).png",
            name: "IPS LCD Gaming Monitor",
            price: "$370",
            oldPrice: "$400",
        },
        {
            image: "/images/Frame 608 (3).png",
            name: "S-Series Comfort Chair",
            price: "$375",
            oldPrice: "$400",
        }

    ];
    const recomendedproduct = [
        {
            image: "/images/Frame 604 (2).png",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            oldPrice: "$160",
            reviews: "(88)",
            discount: '-25%'
        },
        {
            image: "/images/Frame 613.png",
            name: "AK-900 Wired Keyboard",
            price: "$960",
            oldPrice: "$1160",
            reviews: "(75)",
            cart: true,
        },
        {
            image: "/images/Frame 611.png",
            name: "IPS LCD Gaming Monitor",
            price: "$370",
            oldPrice: "$400",
            reviews: "(99)",
            badge: 'NEW'
        },
        {
            image: "/images/Frame 612.png",
            name: "S-Series Comfort Chair",
            price: "$375",
            oldPrice: "$400",
            reviews: "(99)",
        }

    ];
    return (
        <>
            <section className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[60px] flex items-center justify-between">
                        <h2 className="poppins text-[20px] font-normal">
                            Wishlist (4)
                        </h2>
                        <button className="h-[56px] w-[223px] rounded-[4px] cursor-pointer hover:bg-black hover:text-white border border-black/50 poppins text-[16px]">
                            Move All To Bag
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {allproduct.map((item, index) => (
                            <div key={`${item.name}-${index}`} className="w-full max-w-[270px]">
                                <div className="group relative h-[250px] w-[270px] overflow-hidden rounded-[4px] bg-[#F5F5F5]">
                                    {item.discount && (
                                        <span className="absolute left-[12px] top-[12px] rounded-[4px] bg-red-600 px-[12px] py-[4px] poppins text-[12px] text-white">
                                            {item.discount}
                                        </span>
                                    )}
                                    <div className="absolute right-[12px] top-[12px] flex flex-col gap-[8px]">
                                        <button className="flex bg-white h-[40px] w-[40px] items-center justify-center rounded-full cursor-pointer hover:opacity-85 "><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="17" fill="white" />
                                            <path d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-[40px] top-[35px] flex h-[180px] w-[190px] items-center justify-center">
                                        <img src={item.image} alt={item.name} className="h-[180px] w-[190px] object-contain" />
                                    </div>
                                    <button className="absolute bottom-0 left-0 h-[41px] w-full cursor-pointer  bg-black poppins text-[12px] font-medium text-white">
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
                            </div>
                        ))}
                    </div>
                    <div className="mt-[80px] mb-[60px] flex items-center justify-between">
                        <div className="flex items-center gap-[16px]">
                            <span className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]" />
                            <h2 className="poppins text-[20px]">
                                Just For You
                            </h2>
                        </div>
                        <button className="h-[56px] w-[150px] rounded-[4px] cursor-pointer hover:bg-black hover:text-white border border-black/50 poppins text-[16px]">
                            See All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {recomendedproduct.map((item, index) => (
                            <div key={`${item.name}-${index}`} className="w-full max-w-[270px]">
                                <div className="group relative h-[250px] w-[270px] overflow-hidden rounded-[4px] bg-[#F5F5F5]">
                                    {item.discount && (
                                        <span className="absolute left-[12px] top-[12px] rounded-[4px] bg-red-600 px-[12px] py-[4px] poppins text-[12px] text-white">
                                            {item.discount}
                                        </span>
                                    )}
                                    {item.badge && (
                                        <span className="absolute left-[12px] top-[12px] rounded-[4px] bg-[#00FF66] px-[12px] py-[4px] poppins text-[12px] text-white">
                                            {item.badge}
                                        </span>
                                    )}
                                    <div className="absolute right-[12px] top-[12px] flex flex-col gap-[8px]">
                                        <button className="flex bg-white h-[40px] w-[40px] items-center justify-center rounded-full cursor-pointer hover:opacity-85 "><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="17" fill="white" />
                                            <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-[40px] top-[35px] flex h-[180px] w-[190px] items-center justify-center">
                                        <img src={item.image} alt={item.name} className="h-[180px] w-[190px] object-contain"
                                        />
                                    </div>
                                    <button className="absolute bottom-0 left-0 h-[41px] w-full cursor-pointer  bg-black poppins text-[12px] font-medium text-white ">
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
            </section>
        </>
    )
}
