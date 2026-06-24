"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const [uploading, setUploading] = useState(false);

  const makeSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const getCategories = async () => {
    const res = await fetch("/api/admin/categories");
    const data = await res.json();

    if (res.ok) setCategories(data.categories || []);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const uploadIcon = async (file) => {
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (!res.ok) {
      toast.error(data.error || "Icon upload failed");
      return;
    }

    setForm((prev) => ({
      ...prev,
      icon: data.url,
    }));

    toast.success("Icon uploaded");
  };

  const addCategory = async () => {
    if (!form.name.trim()) {
      toast.error("Category name required");
      return;
    }

    const payload = {
      ...form,
      slug: form.slug || makeSlug(form.name),
    };

    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
  const deleteCategory = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/admin/categories/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Delete failed");
      return;
    }

    toast.success("Category deleted");
    getCategories();
  };
  return (
    <section className="w-full">
      <h1 className="inter text-[32px] font-semibold">Categories</h1>

      <div className="mt-8 rounded bg-white p-6 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            required
            placeholder="Category Name"
            value={form.name}
            onChange={(e) => {
              const name = e.target.value;
              setForm({
                ...form,
                name,
                slug: makeSlug(name),
              });
            }}
            className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none"
          />

          <input
            placeholder="Slug auto generated"
            value={form.slug}
            readOnly
            className="h-[50px] rounded bg-[#F5F5F5] px-4 outline-none"
          />

          <input
            type="file"
            accept="image/*,.svg"
            onChange={(e) => uploadIcon(e.target.files?.[0])}
            className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3 outline-none"
          />
        </div>

        {form.icon && (
          <div className="mt-4 flex items-center gap-3">
            <img src={form.icon} alt="icon" className="h-12 w-12 object-contain" />
            <span className="text-sm text-black/60">{form.icon}</span>
          </div>
        )}

        <button
          onClick={addCategory}
          disabled={uploading}
          className="mt-5 h-[48px] rounded bg-[#DB4444] px-6 text-white disabled:opacity-60"
        >
          {uploading ? "Uploading..." : "Add Category"}
        </button>
      </div>

      <div className="mt-8 rounded bg-white p-6 shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Slug</th>
              <th className="p-4 text-left">Icon</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="p-4">{cat.name}</td>
                <td className="p-4">{cat.slug}</td>
                <td className="p-4">
                  {cat.icon ? (
                    <img src={cat.icon} alt={cat.name} className="h-10 w-10 object-contain" />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="rounded bg-red-500 px-4 py-2 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}