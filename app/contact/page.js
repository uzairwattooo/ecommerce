import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="w-full bg-white py-[80px]">
      <div className="mx-auto max-w-[1170px] px-4 lg:px-0">
        <div className="mb-[80px] flex gap-[12px] poppins text-[14px] leading-[21px]">
          <Link href="/" className="text-black/50">Home</Link>
          <span className="text-black/50">/</span>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>
        <div className="flex flex-col gap-[30px] lg:flex-row">
          <div className="h-auto w-full rounded-[4px] bg-white px-[35px] py-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.05)] lg:h-[457px] lg:w-[340px]">
            <div>
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DB4444] text-white">
                  ☎
                </div>
                <h3 className="poppins text-[16px] font-medium leading-[24px]">
                  Call To Us
                </h3>
              </div>

              <p className="mt-[24px] poppins text-[14px] leading-[21px]">
                We are available 24/7, 7 days a week.
              </p>

              <p className="mt-[16px] poppins text-[14px] leading-[21px]">
                Phone: +8801611112222
              </p>
            </div>

            <div className="my-[32px] h-[1px] w-full bg-black/30" />

            <div>
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DB4444] text-white">
                  ✉
                </div>
                <h3 className="poppins text-[16px] font-medium leading-[24px]">
                  Write To Us
                </h3>
              </div>

              <p className="mt-[24px] poppins text-[14px] leading-[21px]">
                Fill out our form and we will contact you within 24 hours.
              </p>

              <p className="mt-[16px] poppins text-[14px] leading-[21px]">
                Emails: customer@exclusive.com
              </p>

              <p className="mt-[16px] poppins text-[14px] leading-[21px]">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="h-auto w-full rounded-[4px] bg-white px-[31px] py-[40px] shadow-[0_1px_13px_rgba(0,0,0,0.05)] lg:h-[457px] lg:w-[800px]">
            <form>
              <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
                <input
                  placeholder="Your Name *"
                  className="h-[50px] rounded-[4px] bg-[#F5F5F5] px-[16px] poppins text-[16px] outline-none placeholder:text-black/40"
                />
                <input
                  placeholder="Your Email *"
                  className="h-[50px] rounded-[4px] bg-[#F5F5F5] px-[16px] poppins text-[16px] outline-none placeholder:text-black/40"
                />
                <input
                  placeholder="Your Phone *"
                  className="h-[50px] rounded-[4px] bg-[#F5F5F5] px-[16px] poppins text-[16px] outline-none placeholder:text-black/40"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="mt-[32px] h-[207px] w-full resize-none rounded-[4px] bg-[#F5F5F5] px-[16px] py-[13px] poppins text-[16px] outline-none placeholder:text-black/40"
              />

              <div className="mt-[32px] flex justify-end">
                <button className="h-[56px] w-[215px] cursor-pointer hover:opacity-85 rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                  Send Massage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}