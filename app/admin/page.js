export default function AdminDashboard() {
    const stats = [
        { title: "Total Products", value: "120" },
        { title: "Total Orders", value: "84" },
        { title: "Customers", value: "356" },
        { title: "Revenue", value: "$12,450" },
    ];

    return (
        <main className="min-h-screen bg-[#F5F5F5]">
            <div className="mx-auto max-w-[1170px] px-4 py-[60px] lg:px-0">
                <div className="mb-[40px] flex items-center justify-between">
                    <div>
                        <p className="poppins text-[16px] font-semibold text-[#DB4444]">
                            Admin
                        </p>
                        <h1 className="mt-[8px] inter text-[36px] font-semibold tracking-[0.04em] text-black">
                            Dashboard
                        </h1>
                    </div>

                    <button className="h-[56px] w-[180px] rounded-[4px] bg-[#DB4444] poppins text-[16px] font-medium text-white">
                        Add Product
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-[4px] bg-white p-[24px] shadow-[0_1px_13px_rgba(0,0,0,0.05)]"
                        >
                            <p className="poppins text-[16px] text-black/60">{item.title}</p>
                            <h2 className="mt-[16px] inter text-[32px] font-bold text-black">
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="mt-[50px] rounded-[4px] bg-white p-[24px] shadow-[0_1px_13px_rgba(0,0,0,0.05)]">
                    <div className="mb-[24px] flex items-center justify-between">
                        <h2 className="poppins text-[20px] font-medium">
                            Recent Orders
                        </h2>

                        <button className="poppins text-[16px] text-[#DB4444]">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px]">
                            <thead>
                                <tr className="border-b border-black/10 text-left poppins text-[14px] text-black/60">
                                    <th className="pb-[16px]">Order ID</th>
                                    <th className="pb-[16px]">Customer</th>
                                    <th className="pb-[16px]">Total</th>
                                    <th className="pb-[16px]">Status</th>
                                    <th className="pb-[16px]">Action</th>
                                </tr>
                            </thead>

                            <tbody className="poppins text-[15px]">
                                {["#1001", "#1002", "#1003"].map((id) => (
                                    <tr key={id} className="border-b border-black/10">
                                        <td className="py-[18px]">{id}</td>
                                        <td className="py-[18px]">Muhammad Uzair</td>
                                        <td className="py-[18px]">$650</td>
                                        <td className="py-[18px]">
                                            <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                                                Paid
                                            </span>
                                        </td>
                                        <td className="py-[18px]">
                                            <button className="text-[#DB4444]">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}