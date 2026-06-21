"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function AddProductPage() {
    const [loading, setLoading] = useState(false);
    const [hasVariants, setHasVariants] = useState(false);

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        oldPrice: "",
        discountPercent: "",
        category: "",
        stock: "",
        badge: "",
        isFlashSale: false,
        isBestSelling: false,
        isFeatured: false,
    });

    const [simpleImages, setSimpleImages] = useState([]);
    const [variants, setVariants] = useState([
        {
            colorName: "",
            colorCode: "#000000",
            price: "",
            stock: "",
            images: [],
        },
    ]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const uploadImages = async (files) => {
        const uploaded = [];
        for (const file of files) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            console.log("UPLOAD RESPONSE:", data);
            if (!res.ok) {
                throw new Error(data.error || "Image upload failed");
            }
            uploaded.push(data.url);
        }
        return uploaded;
    };

    const handleSimpleImages = async (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;
        const urls = await uploadImages(files);
        setSimpleImages((prev) => [...prev, ...urls]);
    };

    const handleVariantChange = (index, field, value) => {
        const updated = [...variants];
        updated[index][field] = value;
        setVariants(updated);
    };

    const handleVariantImages = async (index, files) => {
        const selectedFiles = Array.from(files || []);
        if (selectedFiles.length === 0) return;

        const urls = await uploadImages(selectedFiles);

        setVariants((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                images: [...(updated[index].images || []), ...urls],
            };
            return updated;
        });
    };

    const addVariant = () => {
        setVariants([
            ...variants,
            {
                colorName: "",
                colorCode: "#000000",
                price: "",
                stock: "",
                images: [],
            },
        ]);
    };

    const submitProduct = async () => {
        try {
            setLoading(true);
            const payload = {
                ...form,
                hasVariants,
                images: hasVariants ? [] : simpleImages,
                variants: hasVariants ? variants : [],
            };
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error || "Product save failed");
                return;
            }
            toast.success("Product added successfully");
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full">
            <h1 className="inter text-[32px] font-semibold text-black">
                Add Product
            </h1>

            <div className="mt-8 rounded bg-white p-6 shadow-[0_1px_13px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <input name="price" value={form.price} onChange={handleChange} placeholder="Base Price" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <input name="oldPrice" value={form.oldPrice} onChange={handleChange} placeholder="Old Price" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <input name="discountPercent" value={form.discountPercent} onChange={handleChange} placeholder="Discount %" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <input name="category" value={form.category} onChange={handleChange} placeholder="Category ID" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" disabled={hasVariants} className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none disabled:opacity-50" />

                    <input name="badge" value={form.badge} onChange={handleChange} placeholder="Badge e.g NEW" className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none" />

                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="min-h-[100px] rounded bg-[#F5F5F5] p-4 outline-none md:col-span-2" />
                </div>

                <div className="mt-6 flex flex-wrap gap-5">
                    <label><input type="checkbox" name="isFlashSale" checked={form.isFlashSale} onChange={handleChange} /> Flash Sale</label>
                    <label><input type="checkbox" name="isBestSelling" checked={form.isBestSelling} onChange={handleChange} /> Best Selling</label>
                    <label><input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} /> Featured</label>
                    <label><input type="checkbox" checked={hasVariants} onChange={(e) => setHasVariants(e.target.checked)} /> Has Color Variants</label>
                </div>

                {!hasVariants && (
                    <div className="mt-8">
                        <h2 className="mb-3 text-[20px] font-medium">Product Images</h2>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleSimpleImages}
                        />
                    </div>
                )}

                {hasVariants && (
                    <div className="mt-8 space-y-6">
                        <h2 className="text-[20px] font-medium">Color Variants</h2>

                        {variants.map((variant, index) => (
                            <div key={index} className="rounded border p-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                                    <input placeholder="Color Name" value={variant.colorName} onChange={(e) => handleVariantChange(index, "colorName", e.target.value)} className="h-[45px] rounded bg-[#F5F5F5] px-4 outline-none" />

                                    <input type="color" value={variant.colorCode} onChange={(e) => handleVariantChange(index, "colorCode", e.target.value)} className="h-[45px]" />

                                    <input placeholder="Variant Price" value={variant.price} onChange={(e) => handleVariantChange(index, "price", e.target.value)} className="h-[45px] rounded bg-[#F5F5F5] px-4 outline-none" />

                                    <input placeholder="Stock" value={variant.stock} onChange={(e) => handleVariantChange(index, "stock", e.target.value)} className="h-[45px] rounded bg-[#F5F5F5] px-4 outline-none" />
                                </div>

                                <div className="mt-4">
                                    <input type="file" multiple onChange={(e) => handleVariantImages(index, e.target.files)} />
                                </div>
                            </div>
                        ))}

                        <button onClick={addVariant} className="h-[45px] rounded bg-black px-5 text-white">
                            Add Variant
                        </button>
                    </div>
                )}

                <button
                    onClick={submitProduct}
                    disabled={loading}
                    className="mt-8 h-[56px] rounded bg-[#DB4444] px-8 text-white disabled:opacity-60"
                >
                    {loading ? "Saving..." : "Save Product"}
                </button>
            </div>
        </section>
    );
}