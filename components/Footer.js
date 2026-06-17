import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mx-auto w-full  bg-black text-white">
            <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-12 px-4 py-[60px] sm:grid-cols-2 lg:grid-cols-5 lg:gap-[50px] lg:px-0 lg:pt-[80px]">
                <div className="w-full">
                    <h2 className="inter text-[24px] font-bold leading-[24px] tracking-[0.03em] text-[#FAFAFA]">
                        Exclusive
                    </h2>

                    <h3 className="mt-[24px] poppins text-[20px] font-medium leading-[28px]">
                        Subscribe
                    </h3>

                    <p className="mt-[24px] poppins text-[16px] leading-[24px]">
                        Get 10% off your first order
                    </p>

                    <div className="mt-[16px] flex h-[48px] w-full max-w-[217px] items-center justify-between rounded-[4px] border border-white px-[16px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent poppins text-[16px] leading-[24px] outline-none placeholder:text-white/40"
                        />

                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 12L3 3L7 12L3 21L21 12Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="poppins text-[20px] font-medium leading-[28px]">
                        Support
                    </h3>

                    <div className="mt-[24px] space-y-[16px] poppins text-[16px] leading-[24px]">
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="poppins text-[20px] font-medium leading-[28px]">
                        Account
                    </h3>

                    <ul className="mt-[24px] space-y-[16px] poppins text-[16px] leading-[24px] text-[#FFFFFF]">
                        <li><Link href="/account">My Account</Link></li>
                        <li><Link href="/login">Login</Link> / <Link href="/signup">Register</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li><Link href="/wishlist">Wishlist</Link></li>
                        <li><Link href="/">Shop</Link></li>
                    </ul>
                </div>

                <div className="w-full">
                    <h3 className="poppins text-[20px] font-medium leading-[28px]">
                        Quick Link
                    </h3>

                    <ul className="mt-[24px] space-y-[16px] poppins text-[16px] leading-[24px]">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="w-full">
                    <h3 className="poppins text-[20px] font-medium leading-[28px]">
                        Download App
                    </h3>

                    <p className="mt-[24px] poppins text-[12px] font-medium leading-[18px] text-white/70">
                        Save $3 with App New User Only
                    </p>

                    <div className="mt-[8px] flex flex-wrap gap-[8px]">
                        <img
                            src="/images/Qr Code.png"
                            alt="QR Code"
                            className="h-[80px] w-[80px]"
                        />

                        <div className="flex flex-col gap-[4px]">
                            <img
                                src="/images/GooglePlay.png"
                                alt="Google Play"
                                className="h-[38px] w-[110px]"
                            />
                            <img
                                src="/images/AppStore.png"
                                alt="App Store"
                                className="h-[38px] w-[110px]"
                            />
                        </div>
                    </div>

                    <div className="mt-[24px] flex flex-wrap gap-[20px]">
                        <span className="text-[24px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                                    fill="white"
                                />
                            </svg>
                        </span>

                        <span className="text-[24px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_2829_1563)">
                                    <path
                                        d="M14.1211 4.44336C14.9979 4.09254 15.9592 4.00852 16.8838 4.20117C17.8082 4.39388 18.6557 4.85462 19.3193 5.52637L19.3486 5.55664H19.3906C19.7296 5.55426 20.0806 5.59738 20.498 5.53809C20.882 5.48352 21.3278 5.34203 21.915 5.00977C21.6091 6.49447 21.4324 7.16729 20.7646 8.08301L20.7451 8.10938V8.14258C20.7451 11.9414 19.5781 14.7564 17.8262 16.7393C16.0729 18.7234 13.7275 19.8816 11.3623 20.3535C9.7452 20.6761 7.754 20.5731 5.99609 20.2109C5.11794 20.03 4.30096 19.7842 3.62012 19.4971C3.03699 19.2511 2.56006 18.9759 2.22949 18.6885C2.6606 18.6463 3.41195 18.553 4.24414 18.3594C5.24389 18.1267 6.37194 17.749 7.20312 17.1406L7.31934 17.0557L7.19922 16.9766C6.50766 16.5207 4.81165 15.4984 3.73145 13.5166C2.66701 11.5637 2.19288 8.66296 3.91406 4.42578C5.57929 6.34325 7.27273 7.66041 8.99512 8.36719C9.57627 8.60556 9.94226 8.72333 10.2314 8.79102C10.5195 8.85841 10.7322 8.8754 10.9922 8.91113L11.2871 8.95215L11.1074 8.77148C11.1323 7.84188 11.4255 6.93867 11.9541 6.17285C12.4906 5.3958 13.2444 4.79414 14.1211 4.44336Z"
                                        fill="white"
                                        stroke="black"
                                        strokeWidth="0.2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2829_1563">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>

                        <span className="text-[24px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                                    fill="white"
                                />
                            </svg>
                        </span>

                        <span className="text-[24px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-[16px] text-center">
                <p className="poppins px-4 text-[13px] leading-[20px] text-white/25 sm:text-[16px] sm:leading-[24px]">
                    © Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>
    );
}