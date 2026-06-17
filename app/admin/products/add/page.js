"use client";

import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "../../../../lib/supabase";

export default function AddProductPage() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        oldPrice: "",
        discountPercent: "",
        category: "",
        stock: "",
    });

    const [colors, setColors] = useState([
        { colorName: "", colorCode: "#000000", images: [] },
    ]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const addColor = () => {
        setColors([...colors, { colorName: "", colorCode: "#000000", images: [] }]);
    };

    const updateColor = (index, field, value) => {
        const updated = [...colors];
        updated[index][field] = value;
        setColors(updated);
    };

    const uploadImages = async (files, colorIndex) => {
        const uploadedUrls = [];

        for (const file of files) {
            const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
            const filePath = `${Date.now()}-${safeName}`;

            const { error } = await supabase.storage
                .from("products")
                .upload(filePath, file, {
                    contentType: file.type,
                    upsert: true,
                });

            if (error) {
                console.log("UPLOAD ERROR:", error);
                toast.error(error.message || "Image upload failed");
                return;
            }

            const { data } = supabase.storage
                .from("products")
                .getPublicUrl(filePath);

            uploadedUrls.push(data.publicUrl);
        }

        const updated = [...colors];
        updated[colorIndex] = {
            ...updated[colorIndex],
            images: [...updated[colorIndex].images, ...uploadedUrls],
        };

        toast.success("Image uploaded");
        setColors((prev) => {
            const updated = [...prev];

            updated[colorIndex] = {
                ...updated[colorIndex],
                images: uploadedUrls
            };

            return updated;
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, colors }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            toast.error(data.error || "Product add nahi hua");
            return;
        }

        toast.success("Product added successfully");
        setFormData({
            name: "",
            description: "",
            price: "",
            oldPrice: "",
            discountPercent: "",
            category: "",
            stock: "",
        });

        setColors([
            { colorName: "", colorCode: "#000000", images: [] },
        ]);
    };

    return (
        <main className="min-h-screen bg-[#F5F5F5]">
            <div className="mx-auto max-w-[1170px] px-4 py-[60px] lg:px-0">
                <h1 className="inter text-[36px] font-semibold">Add Product</h1>

                <form onSubmit={handleSubmit} className="mt-8 rounded bg-white p-8 shadow">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <input name="name" placeholder="Product Name" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />
                        <input name="category" placeholder="Category" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />
                        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />
                        <input name="oldPrice" type="number" placeholder="Old Price" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />
                        <input name="discountPercent" type="number" placeholder="Discount %" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />
                        <input name="stock" type="number" placeholder="Stock" onChange={handleChange} className="h-[50px] rounded border px-4 outline-none" />

                        <textarea
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            className="min-h-[120px] rounded border p-4 outline-none md:col-span-2"
                        />
                    </div>

                    <div className="mt-8">
                        <h2 className="poppins text-[20px] font-medium">Colors & Images</h2>

                        {colors.map((color, index) => (
                            <div key={index} className="mt-6 rounded border p-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <input
                                        placeholder="Color Name"
                                        value={color.colorName}
                                        onChange={(e) => updateColor(index, "colorName", e.target.value)}
                                        className="h-[50px] rounded border px-4 outline-none"
                                    />

                                    <input
                                        type="color"
                                        value={color.colorCode}
                                        onChange={(e) => updateColor(index, "colorCode", e.target.value)}
                                        className="h-[50px] rounded border px-2"
                                    />

                                    <input
                                        type="file"
                                        multiple
                                        onChange={(e) => uploadImages(Array.from(e.target.files), index)}
                                        className="h-[50px] rounded border px-4 py-3"
                                    />
                                </div>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {color.images.map((img) => (
                                        <img key={img} src={img} className="h-20 w-20 rounded object-cover" />
                                    ))}
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addColor}
                            className="mt-4 rounded bg-black px-5 py-3 text-white"
                        >
                            Add Color
                        </button>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="isFlashSale" checked={formData.isFlashSale} onChange={handleChange} />
                            Flash Sale
                        </label>

                        {formData.isFlashSale && (
                            <input
                                type="datetime-local"
                                name="saleEndTime"
                                value={formData.saleEndTime}
                                onChange={handleChange}
                                className="h-[50px] rounded border px-4 outline-none"
                            />
                        )}

                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="isBestSelling" value={formData.isBestSelling} onChange={handleChange} />
                            Best Selling
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="isFeatured" value={formData.isFeatured} onChange={handleChange} />
                            Featured / Explore
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 h-[56px] w-[200px] rounded bg-[#DB4444] text-white disabled:opacity-60"
                    >
                        {loading ? "Saving..." : "Save Product"}
                    </button>
                </form>
            </div>
        </main>
    );
}