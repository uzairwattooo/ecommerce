export default function Checkout() {
    const cartItems = [
        { name: "LCD Monitor", image: "/images/Frame 613.png", price: "$650" },
        { name: "HI Gamepad", image: "/images/Frame 611.png", price: "$1100" },
    ];

    return (
        <main className="w-full bg-white py-[80px]">
            <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                <div className="poppins mb-[80px] flex gap-[12px] text-[14px] leading-[21px]">
                    <span className="text-black/50">Account</span>
                    <span className="text-black/50">/</span>
                    <span className="text-black/50">My Account</span>
                    <span className="text-black/50">/</span>
                    <span className="text-black/50">Product</span>
                    <span className="text-black/50">/</span>
                    <span className="text-black/50">View Cart</span>
                    <span className="text-black">/ CheckOut</span>
                </div>

                <div className="flex flex-col justify-between gap-[80px] lg:flex-row">
                    <div className="w-full lg:w-[470px]">
                        <h1 className="inter text-[36px] font-medium leading-[30px] tracking-[0.04em] text-black">
                            Billing Details
                        </h1>
                        <form className="mt-[48px] space-y-[24px]">
                            {[
                                "First Name*",
                                "Company Name",
                                "Street Address*",
                                "Apartment, floor, etc. (optional)",
                                "Town/City*",
                                "Phone Number*",
                                "Email Address*",
                            ].map((label) => (
                                <label key={label} className="block">
                                    <span className="poppins text-[16px] font-normal leading-[24px] text-black/40">
                                        {label}
                                    </span>
                                    <input className="mt-[8px] h-[50px] w-full rounded-[4px] bg-[#F5F5F5] px-4 outline-none" />
                                </label>
                            ))}

                            <label className="flex items-center gap-[16px]">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-[24px] w-[24px] cursor-pointer accent-[#DB4444]"
                                />
                                <span className="poppins text-[16px] leading-[24px]">
                                    Save this information for faster check-out next time
                                </span>
                            </label>
                        </form>
                    </div>
                    <div className="w-full pt-[32px] lg:w-[527px]">
                        <div className="space-y-[32px]">
                            {cartItems.map((item) => (
                                <div key={item.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-[24px]">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-[54px] w-[54px] object-contain"
                                        />
                                        <p className="poppins text-[16px] leading-[24px]">
                                            {item.name}
                                        </p>
                                    </div>
                                    <p className="poppins text-[16px] leading-[24px]">
                                        {item.price}
                                    </p>
                                </div>
                            ))}
                            <div className="space-y-[16px]">
                                <div className="flex justify-between border-b border-black/40 pb-[16px] poppins text-[16px]">
                                    <span>Subtotal:</span>
                                    <span>$1750</span>
                                </div>

                                <div className="flex justify-between border-b border-black/40 pb-[16px] poppins text-[16px]">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>

                                <div className="flex justify-between poppins text-[16px]">
                                    <span>Total:</span>
                                    <span>$1750</span>
                                </div>
                            </div>
                            <div className="space-y-[16px]">
                                <label className="flex items-center justify-between">
                                    <span className="flex items-center gap-[16px] poppins text-[16px]">
                                        <input type="radio" name="payment" className="h-[24px] w-[24px] " />
                                        Bank
                                    </span>
                                    <div className="flex items-center gap-[8px]">
                                        <span className="text-[12px] text-pink-500">Bkash</span>
                                        <span className="text-[12px] text-blue-600">VISA</span>
                                        <span className="text-[12px] text-orange-500">Master</span>
                                        <span className="text-[12px] text-red-500">Nagad</span>
                                    </div>
                                </label>
                                <label className="flex items-center gap-[16px] poppins text-[16px]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        defaultChecked
                                        className="h-[24px] w-[24px]"
                                    />
                                    Cash on delivery
                                </label>
                            </div>

                            <div className="flex gap-[16px]">
                                <input
                                    placeholder="Coupon Code"
                                    className="h-[56px] w-[300px] rounded-[4px] border border-black/50 px-[24px] poppins text-[16px] outline-none"
                                />

                                <button className="h-[56px] w-[211px] hover:opacity-85 cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                    Apply Coupon
                                </button>
                            </div>

                            <button className="h-[56px] w-[190px] hover:opacity-85 cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}