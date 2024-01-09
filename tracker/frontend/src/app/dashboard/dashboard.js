import GeldLOGO from "@/icon/GeldLOGO";

export default function dashboard() {
    return(
        <section className="w-screen flex justify-center bg-[#F3F4F6]">
            <nav className="w-full h-[72px] flex justify-around items-center bg-white">
                <div className="flex gap-[24px]">
                    <GeldLOGO/>
                    <p>Dashboard</p>
                    <p>Records</p>
                </div>
                <div className="flex gap-[24px]">
                    <button className="w-[100px] h-[32px] rounded-[20px] bg-[#0166FF] text-white">+ Record</button>
                </div>
            </nav>
        </section>
    )
}