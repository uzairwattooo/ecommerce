"use client";

import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const validate = () => {
        let newErrors = {};
        if (!email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        const { error } = await authClient.signIn.email({
            email,
            password,
        });
        setLoading(false);
        if (error) {
            toast.error(error.message || "Login failed");
            return;
        }
        const session = await authClient.getSession();
        if (session?.data?.user?.role === "admin") {
            router.replace("/admin");
        } else {
            router.replace("/");
        }
        toast.success("Login successful");
    };
    return (
        <section className="w-full mx-auto max-w-[1440px] bg-white pt-15 pb-[100px]">
            <div className="flex max-w-[1305px] items-center gap-[100px]">
                <div className="hidden h-[781px] w-[750px] overflow-hidden rounded-r-[4px] lg:block">
                    <img src="/images/Side Image.png" alt="Shopping" className="h-full w-full object-cover" />
                </div>
                <div className="w-full px-6 lg:w-[371px] lg:px-0">
                    <div className="w-full">
                        <h1 className="inter text-[36px] font-medium leading-[30px] tracking-[0.04em] text-black">
                            Log in to Exclusive
                        </h1>

                        <p className="mt-[34px] poppins text-[16px] leading-[24px] text-black">
                            Enter your details below
                        </p>
                        <form onSubmit={handleLogin} className="space-y-10 mt-7">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, email: "" });
                                    }}
                                    className="w-full border-b border-gray-400 p-2 outline-none"
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, password: "" });
                                    }}
                                    className="w-full border-b border-gray-400 p-2 outline-none"
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-[20px] h-[56px] w-full rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white disabled:opacity-60"
                            >
                                {loading ? "Logining in..." : "login"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}