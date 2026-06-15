"use client"

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState("email");
    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const router = useRouter();
    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const sendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        const normalizedEmail = email.trim().toLowerCase();

        const checkRes = await fetch("/api/check-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: normalizedEmail }),
        });

        const checkText = await checkRes.text();

        if (!checkText) {
            toast.error("Check user API empty response de rahi hai");
            setLoading(false);
            return;
        }

        const checkData = JSON.parse(checkText);

        if (!checkData.exists) {
            setLoading(false);
            toast.error("Email not registered", {
                style: {
                    background: "#DB4444",
                    color: "#fff",
                    border: "none",
                },
            });
            return;
        }

        const { error } = await authClient.emailOtp.sendVerificationOtp({
            email: normalizedEmail,
            type: "sign-in",
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "OTP send nahi hua");
            return;
        }
        toast.success("OTP email par send kar diya gaya");
        setStep("otp");
        setSeconds(50);
    };

    const verifyOtp = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { error } = await authClient.signIn.emailOtp({
            email: email.trim().toLowerCase(),
            otp,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "OTP galat ya expire ho gaya");
            return;
        }
        const session = await authClient.getSession();

        if (session.data.user.role === "admin") {
            router.push("/admin");
        } else {
            router.push("/");
        }
    };

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min}:${String(sec).padStart(2, "0")}`;
    };

    return (
        <section className="w-full mx-auto max-w-[1440px] bg-white pt-15 pb-[100px]">
            <div className="flex max-w-[1305px] items-center gap-[100px]">
                <div className="hidden h-[781px] w-[750px] overflow-hidden rounded-r-[4px] lg:block">
                    <img src="/images/Side Image.png" alt="Shopping" className="h-full w-full object-cover" />
                </div>
                <div className="w-full px-6 lg:w-[371px] lg:px-0">
                    <div className="w-full">
                        {step === "email" && (
                            <form onSubmit={sendOtp} className="mt-[48px]">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-[40px] h-[56px] w-full rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send OTP"}
                                </button>
                            </form>
                        )}

                        {step === "otp" && (
                            <form onSubmit={verifyOtp} className="mt-[48px]">
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] outline-none"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />

                                <p className="mt-[16px] poppins text-[14px] text-black/60">
                                    OTP expires in{" "}
                                    <span className="font-semibold text-[#DB4444]">
                                        {formatTime(seconds)}
                                    </span>
                                </p>

                                {seconds === 0 && (
                                    <button
                                        type="button"
                                        onClick={sendOtp}
                                        className="mt-[12px] poppins text-[14px] text-[#DB4444]"
                                    >
                                        Resend OTP
                                    </button>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || seconds === 0}
                                    className="mt-[40px] h-[56px] w-full rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white disabled:opacity-60"
                                >
                                    {loading ? "Verifying..." : "Verify & Login"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}