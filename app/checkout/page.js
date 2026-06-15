export default function Checkout() {
    const cartItems = [
        { name: "LCD Monitor", image: "/images/Frame 613.png", price: "$650" },
        { name: "HI Gamepad", image: "/images/Frame 611.png", price: "$1100" },
    ];

    return (
        <main className="w-full bg-white py-12 sm:py-16 lg:py-[80px]">
  <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
    <div className="poppins mb-[50px] flex flex-wrap gap-[8px] text-[14px] leading-[21px] lg:mb-[80px]">
      <span className="text-black/50">Account</span>
      <span className="text-black/50">/</span>
      <span className="text-black/50">My Account</span>
      <span className="text-black/50">/</span>
      <span className="text-black/50">Product</span>
      <span className="text-black/50">/</span>
      <span className="text-black/50">View Cart</span>
      <span className="text-black">/ CheckOut</span>
    </div>

    <div className="flex flex-col justify-between gap-[50px] lg:flex-row lg:gap-[80px]">
      <div className="w-full lg:w-[470px]">
        <h1 className="inter text-[30px] font-medium leading-[34px] tracking-[0.04em] text-black sm:text-[36px] sm:leading-[30px]">
          Billing Details
        </h1>

        <form className="mt-[36px] space-y-[24px] lg:mt-[48px]">
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

          <label className="flex items-start gap-[16px] sm:items-center">
            <input
              type="checkbox"
              defaultChecked
              className="mt-[2px] h-[24px] w-[24px] shrink-0 cursor-pointer accent-[#DB4444] sm:mt-0"
            />
            <span className="poppins text-[15px] leading-[23px] sm:text-[16px] sm:leading-[24px]">
              Save this information for faster check-out next time
            </span>
          </label>
        </form>
      </div>

      <div className="w-full pt-0 lg:w-[527px] lg:pt-[32px]">
        <div className="space-y-[32px]">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-[16px] sm:gap-[24px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[54px] w-[54px] shrink-0 object-contain"
                />
                <p className="poppins truncate text-[16px] leading-[24px]">
                  {item.name}
                </p>
              </div>

              <p className="poppins shrink-0 text-[16px] leading-[24px]">
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
            <label className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-[16px] poppins text-[16px]">
                <input type="radio" name="payment" className="h-[24px] w-[24px]" />
                Bank
              </span>

              <div className="flex flex-wrap items-center gap-[8px] pl-[40px] sm:pl-0">
                <img src="/images/visa (4).png" alt="no" className="w-[38px]" />
                <img src="/images/visa (1).png" alt="no" className="w-[38px]" />
                <img src="/images/visa (2).png" alt="no" className="w-[38px]" />
                <img src="/images/visa (3).png" alt="no" className="w-[38px]" />
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

          <div className="flex flex-col gap-[16px] sm:flex-row">
            <input
              placeholder="Coupon Code"
              className="h-[56px] w-full rounded-[4px] border border-black/50 px-[24px] poppins text-[16px] outline-none sm:w-[300px]"
            />

            <button className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[211px]">
              Apply Coupon
            </button>
          </div>

          <button className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[190px]">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
    );
}