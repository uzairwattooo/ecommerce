"use client";

import Link from "next/link";
import { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "LCD Monitor",
    image: "/images/Frame 613.png",
    price: 650,
    quantity: 1,
  },
  {
    id: 2,
    name: "HI Gamepad",
    image: "/images/Frame 611.png",
    price: 550,
    quantity: 2,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
   <main className="w-full bg-white py-12 sm:py-16 lg:py-[80px]">
  <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
    <div className="poppins mb-[50px] flex gap-[12px] text-[14px] leading-[21px] lg:mb-[80px]">
      <Link href="/" className="text-black/50">Home</Link>
      <span className="text-black/50">/</span>
      <Link href="/cart" className="text-black">Cart</Link>
    </div>

    <div className="space-y-[24px] lg:space-y-[40px]">
      <div className="hidden h-[72px] grid-cols-4 items-center rounded-[4px] px-[40px] shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] md:grid">
        <p className="poppins text-[16px]">Product</p>
        <p className="poppins text-[16px]">Price</p>
        <p className="poppins text-[16px]">Quantity</p>
        <p className="poppins text-right text-[16px]">Subtotal</p>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="rounded-[4px] p-4 shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] md:grid md:h-[102px] md:grid-cols-4 md:items-center md:px-[40px] md:py-0"
        >
          <div className="relative flex items-center gap-[16px] md:gap-[20px]">
            <button
              onClick={() => removeItem(item.id)}
              className="absolute -left-[8px] -top-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#DB4444] text-[14px] text-white md:-left-[10px] md:top-[0px]"
            >
              ×
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="h-[54px] w-[54px] object-contain"
            />

            <p className="poppins text-[16px]">{item.name}</p>
          </div>

          <div className="mt-4 grid grid-cols-3 items-center gap-3 md:mt-0 md:block">
            <p className="poppins text-[13px] text-black/50 md:hidden">Price</p>
            <p className="poppins col-span-2 text-[16px] md:col-span-1">${item.price}</p>
          </div>

          <div className="mt-4 grid grid-cols-3 items-center gap-3 md:mt-0 md:block">
            <p className="poppins text-[13px] text-black/50 md:hidden">Quantity</p>
            <select
              value={String(item.quantity).padStart(2, "0")}
              onChange={(e) => updateQty(item.id, e.target.value)}
              className="h-[44px] w-[72px] rounded-[4px] border border-black/40 px-[12px] poppins text-[16px] outline-none"
            >
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
            </select>
          </div>

          <div className="mt-4 grid grid-cols-3 items-center gap-3 md:mt-0 md:block">
            <p className="poppins text-[13px] text-black/50 md:hidden">Subtotal</p>
            <p className="poppins col-span-2 text-[16px] md:col-span-1 md:text-right">
              ${item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-[24px] flex flex-col gap-4 sm:flex-row sm:justify-between">
      <button className="h-[56px] w-full cursor-pointer rounded-[4px] border border-black/50 poppins text-[16px] hover:bg-black hover:text-white sm:w-[218px]">
        Return To Shop
      </button>

      <button className="h-[56px] w-full cursor-pointer rounded-[4px] border border-black/50 poppins text-[16px] hover:bg-black hover:text-white sm:w-[195px]">
        Update Cart
      </button>
    </div>

    <div className="mt-[50px] flex flex-col justify-between gap-[40px] lg:mt-[80px] lg:flex-row">
      <div className="flex h-auto flex-col gap-[16px] sm:h-[56px] sm:flex-row">
        <input
          placeholder="Coupon Code"
          className="h-[56px] w-full rounded-[4px] border border-black/50 px-[24px] poppins text-[16px] outline-none sm:w-[300px]"
        />

        <button className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[211px]">
          Apply Coupon
        </button>
      </div>

      <div className="h-auto w-full rounded-[4px] border-[1.5px] border-black px-[20px] py-[28px] sm:px-[24px] sm:py-[32px] lg:h-[324px] lg:w-[470px]">
        <h3 className="poppins text-[20px] font-medium leading-[28px]">
          Cart Total
        </h3>

        <div className="mt-[24px] space-y-[16px]">
          <div className="flex justify-between border-b border-black/40 pb-[16px] poppins text-[16px]">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between border-b border-black/40 pb-[16px] poppins text-[16px]">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between poppins text-[16px]">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
        </div>

        <div className="mt-[24px] flex justify-center">
          <button className="h-[56px] w-full cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85 sm:w-[260px]">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
  );
}