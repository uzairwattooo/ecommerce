"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const getCategories = async () => {
    const res = await fetch("/api/admin/categories");
    const data = await res.json();

    if (res.ok) setCategories(data.categories || []);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addCategory = async () => {
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Category add failed");
      return;
    }

    toast.success("Category added");
    setForm({ name: "", slug: "", icon: "" });
    getCategories();
  };

  return (
    <section className="w-full">
      <h1 className="inter text-[32px] font-semibold">Categories</h1>

      <div className="mt-8 rounded bg-white p-6 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            placeholder="Category Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none"
          />

          <input
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none"
          />

          <input
            placeholder="Icon URL"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none"
          />
        </div>

        <button
          onClick={addCategory}
          className="mt-5 h-[48px] rounded bg-[#DB4444] px-6 text-white"
        >
          Add Category
        </button>
      </div>

      <div className="mt-8 rounded bg-white p-6 shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Slug</th>
              <th className="p-4 text-left">Icon</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="p-4">{cat.name}</td>
                <td className="p-4">{cat.slug}</td>
                <td className="p-4">{cat.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}