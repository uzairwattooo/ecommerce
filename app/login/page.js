export default function SignUp() {
    return (
        <section className="w-full mx-auto max-w-[1440px] bg-white pt-15 pb-[100px]">
            <div className="flex max-w-[1305px] items-center gap-[100px]">
                <div className="hidden h-[781px] w-[750px] overflow-hidden rounded-r-[4px] lg:block">
                    <img src="/images/Side Image.png" alt="Shopping" className="h-full w-full object-cover"/>
                </div>
                <div className="w-full px-6 lg:w-[371px] lg:px-0">
                    <div className="w-full">
                        <h1 className="inter text-[36px] font-medium leading-[30px] tracking-[0.04em] text-black">
                            Log in to Exclusive
                        </h1>
                        <p className="mt-[24px] poppins text-[16px] leading-[24px] text-black">
                            Enter your details below
                        </p>
                        <form className="mt-[48px]">
                            <div className="space-y-[40px]">
                                <input type="text" placeholder="Email or Phone Number" className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-black/40"/>
                                <input type="password" placeholder="Password" className="h-[32px] w-full border-b border-black/50 bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-black/40"/>
                            </div>
                            <div className="mt-[40px] flex items-center justify-between">
                                <button type="submit" className="h-[56px] w-[143px] cursor-pointer hover:opacity-85 rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                                    Log In
                                </button>
                                <button type="button" className="poppins cursor-pointer text-[16px] leading-[24px] text-[#DB4444]">
                                    Forget Password?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}