"use client"
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        });

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        toast.success("Account created successfully!");

        setTimeout(() => {
            router.push("/login");
        }, 1000);
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
                            Create an account
                        </h1>
                        <p className="mt-[24px] poppins text-[16px] leading-[24px] text-black">
                            Enter your details below
                        </p>
                        <form className="mt-[48px]" onSubmit={handleSignup}>
                            <div className="space-y-[40px]">
                                <input type="text" value={name}
                                    onChange={(e) => setName(e.target.value)} placeholder="Name" className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-black/40" />
                                <input type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Email or Phone Number" className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-black/40" />
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-black/40" />
                            </div>
                            <button type="submit" className="mt-[40px] cursor-pointer hover:opacity-85 h-[56px] w-full rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                Create Account
                            </button>
                            <button type="button" className="mt-[16px] cursor-pointer hover:opacity-85 flex h-[56px] w-full items-center justify-center gap-[16px] rounded-[4px] border border-black/40 poppins text-[16px] text-black">
                                <span className="text-[22px] font-bold text-[#4285F4]">G</span>
                                Sign up with Google
                            </button>
                            <p className="mt-[32px] text-center poppins text-[16px] leading-[24px] text-black/70">
                                Already have account?{" "}
                                <Link href="/login" className="border-b border-black text-black">
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}