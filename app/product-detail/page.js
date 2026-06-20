"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";

const colors = ["#A0BCE0", "#E07575"];
const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductDetails() {
    const router = useRouter();

    const addToCart = useCartStore((state) => state.addToCart);
    const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
    const wishlist = useWishlistStore((state) => state.wishlist);

    const [products, setProducts] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);
    const [activeImage, setActiveImage] = useState("");
    const [activeColor, setActiveColor] = useState(0);
    const [activeSize, setActiveSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();

                const list = Array.isArray(data) ? data : data.products || [];

                setProducts(list);

                if (list.length > 0) {
                    setActiveProduct(list[0]);
                    setActiveImage(getMainImage(list[0]));
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to load product");
            }
        };

        getProducts();
    }, []);

    const getMainImage = (product) => {
        return (
            product?.images?.[0]?.imageUrl ||
            product?.image ||
            "/images/Frame 611.png"
        );
    };

    const galleryImages = useMemo(() => {
        if (!activeProduct) return [];

        if (activeProduct.images?.length > 0) {
            return activeProduct.images.map((img) => img.imageUrl);
        }

        return [getMainImage(activeProduct)];
    }, [activeProduct]);

    const relatedProducts = products
        .filter((item) => item.id !== activeProduct?.id)
        .slice(0, 4);

    const isFavourite = wishlist.some((item) => item.id === activeProduct?.id);

    const handleBuyNow = () => {
        if (!activeProduct) return;

        for (let i = 0; i < quantity; i++) {
            addToCart(activeProduct);
        }

        router.push("/checkout");
    };

    const handleAddWishlist = () => {
        if (!activeProduct) return;
        toggleWishlist(activeProduct);
    };

    if (!activeProduct) {
        return (
            <main className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <p className="poppins text-black/50">Loading product...</p>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="w-full bg-white py-[80px]">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[80px] flex gap-[12px] poppins text-[14px] leading-[21px]">
                        <Link href="/" className="text-black/50">Home</Link>
                        <span className="text-black/50">/</span>
                        <span className="text-black/50">{activeProduct.category || "Product"}</span>
                        <span className="text-black/50">/</span>
                        <span className="text-black">{activeProduct.name}</span>
                    </div>

                    <div className="flex flex-col gap-[70px] lg:flex-row">
                        <div className="flex flex-col gap-[30px] md:flex-row">
                            <div className="flex gap-4 md:flex-col">
                                {galleryImages.map((img, index) => (
                                    <button
                                        key={`${img}-${index}`}
                                        onClick={() => setActiveImage(img)}
                                        className="flex h-[138px] w-[170px] cursor-pointer items-center justify-center rounded-[4px] bg-[#F5F5F5]"
                                    >
                                        <img src={img} alt="" className="h-[100px] w-full object-contain" />
                                    </button>
                                ))}
                            </div>

                            <div className="flex h-[600px] w-full items-center justify-center rounded-[4px] bg-[#F5F5F5] lg:w-[500px]">
                                <img
                                    src={activeImage}
                                    alt={activeProduct.name}
                                    className="h-[315px] w-[446px] object-contain"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-[400px]">
                            <h1 className="inter text-[24px] font-semibold leading-[24px] tracking-[0.03em]">
                                {activeProduct.name}
                            </h1>

                            <div className="mt-[16px] flex items-center gap-[8px]">
                                <span className="text-[16px] text-[#FFAD33]">★★★★★</span>
                                <span className="poppins text-[14px] text-black/50">(150 Reviews)</span>
                                <span className="text-black/50">|</span>
                                <span className="poppins text-[14px] text-[#00FF66]">In Stock</span>
                            </div>

                            <p className="mt-[16px] inter text-[24px] font-normal leading-[24px] tracking-[0.03em]">
                                ${activeProduct.basePrice}
                            </p>

                            <p className="mt-[24px] poppins text-[14px] leading-[21px]">
                                {activeProduct.description || "No description available."}
                            </p>

                            <div className="mt-[24px] h-[1px] w-full bg-black/50" />

                            <div className="mt-[24px] flex items-center gap-[24px]">
                                <span className="inter text-[20px]">Colours:</span>

                                <div className="flex gap-[8px]">
                                    {colors.map((color, index) => (
                                        <button
                                            key={color}
                                            onClick={() => setActiveColor(index)}
                                            className={`flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full border ${activeColor === index ? "border-black" : "border-transparent"
                                                }`}
                                        >
                                            <span className="h-[14px] w-[14px] rounded-full" style={{ backgroundColor: color }} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-[24px] flex items-center gap-[24px]">
                                <span className="inter text-[20px]">Size:</span>

                                <div className="flex gap-[16px]">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`h-[32px] w-[32px] cursor-pointer rounded-[4px] border text-[14px] hover:opacity-85 ${activeSize === size
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
                                        className="h-full w-[40px] cursor-pointer border-r border-black/50 text-[24px] hover:opacity-85"
                                    >
                                        −
                                    </button>

                                    <div className="flex flex-1 items-center justify-center poppins text-[20px] font-medium">
                                        {quantity}
                                    </div>

                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="h-full w-[40px] cursor-pointer bg-[#DB4444] text-[24px] text-white hover:opacity-85"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={handleBuyNow}
                                    className="h-[44px] w-[165px] cursor-pointer rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white hover:opacity-85"
                                >
                                    Buy Now
                                </button>

                                <button
                                    onClick={handleAddWishlist}
                                    className="flex h-[44px] w-[40px] cursor-pointer items-center justify-center rounded-[4px] border border-black/50 hover:opacity-85"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={isFavourite ? "#DB4444" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={isFavourite ? "#DB4444" : "currentColor"} className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-[40px] h-[180px] w-full rounded-[4px] border border-black/50">
                                <div className="flex h-[90px] items-center gap-[16px] border-b border-black/50 px-[16px]">
                                    <span className="text-[28px]">🚚</span>
                                    <div>
                                        <h3 className="poppins text-[16px] font-medium">Free Delivery</h3>
                                        <p className="mt-[8px] poppins text-[12px] underline">
                                            Enter your postal code for Delivery Availability
                                        </p>
                                    </div>
                                </div>

                                <div className="flex h-[90px] items-center gap-[16px] px-[16px]">
                                    <span className="text-[28px]">↩️</span>
                                    <div>
                                        <h3 className="poppins text-[16px] font-medium">Return Delivery</h3>
                                        <p className="mt-[8px] poppins text-[12px]">
                                            Free 30 Days Delivery Returns. <span className="underline">Details</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="mx-auto w-full max-w-[1440px] overflow-hidden border-b border-[#ECECEC] bg-white py-20">
                <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
                    <div className="mb-[40px] flex items-end justify-between">
                        <div className="mb-[24px] flex items-center gap-[16px]">
                            <span className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]" />
                            <p className="poppins text-[16px] font-semibold leading-[20px] text-[#DB4444]">
                                Related Item
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((item) => (
                            <div key={item.id} className="w-full max-w-[270px]">
                                <div className="group relative h-[250px] w-[270px] overflow-hidden rounded-[4px] bg-[#F5F5F5]">
                                    {item.discountPercent && (
                                        <span className="absolute left-[12px] top-[12px] rounded-[4px] bg-[#DB4444] px-[12px] py-[4px] poppins text-[12px] text-white">
                                            -{item.discountPercent}%
                                        </span>
                                    )}

                                    <div className="absolute left-[40px] top-[35px] flex h-[180px] w-[190px] items-center justify-center">
                                        <img
                                            src={getMainImage(item)}
                                            alt={item.name}
                                            className="h-[180px] w-[190px] object-contain"
                                        />
                                    </div>

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="absolute bottom-0 left-0 h-[41px] w-full translate-y-full cursor-pointer bg-black poppins text-[12px] font-medium text-white transition duration-300 group-hover:translate-y-0"
                                    >
                                        Add To Cart
                                    </button>
                                </div>

                                <h3 className="mt-[16px] poppins text-[16px] font-medium leading-[24px] text-black">
                                    {item.name}
                                </h3>

                                <div className="mt-[8px] flex gap-[12px] poppins text-[16px] font-medium leading-[24px]">
                                    <span className="text-[#DB4444]">${item.basePrice}</span>
                                    {item.oldPrice && (
                                        <span className="text-black/50 line-through">${item.oldPrice}</span>
                                    )}
                                </div>

                                <div className="mt-[8px] flex items-center gap-[8px]">
                                    <span className="text-[14px] text-[#FFAD33]">★★★★★</span>
                                    <span className="poppins text-[14px] font-semibold text-black/50">(88)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


