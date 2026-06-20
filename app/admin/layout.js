import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
    let session = null;

    try {
        session = await auth.api.getSession({
            headers: await headers(),
        });
    } catch (error) {
        console.log("ADMIN_SESSION_ERROR:", error);
        redirect("/login");
    }

    if (!session?.user) redirect("/login");

    if (session.user.role !== "admin") redirect("/");

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <div className="flex">
                <aside className="sticky top-0 hidden h-screen w-[300px] bg-black px-6 py-8 text-white lg:block">
                    <h2 className="inter text-[28px] font-semibold mt-10">Admin</h2>

                    <nav className="mt-10 flex flex-col gap-4 poppins text-[16px]">
                        <Link href="/admin" className="rounded px-4 py-3 hover:bg-white/10">
                            Dashboard
                        </Link>

                        <Link href="/admin/products/add" className="rounded px-4 py-3 hover:bg-white/10">
                            Add Product
                        </Link>

                        <Link href="/admin/coupons" className="rounded px-4 py-3 hover:bg-white/10">
                            Coupons
                        </Link>

                        <Link href="/" className="rounded px-4 py-3 hover:bg-white/10">
                            Back To Store
                        </Link>
                    </nav>
                </aside>

                <main className="w-full px-4 py-8 lg:px-10">
                    {children}
                </main>
            </div>
        </div>
    );
}