"use client"
import RecCategory from "@/components/Category";
import RecCat from "@/components/Category";
import LastRecords from "@/components/LastRec";
import Types from "@/components/Types";
import GeldLOGO from "@/icon/GeldLOGO";
import Plus from "@/icon/Plus";
import { useRouter } from "next/navigation";

export default function Records() {
    const router = useRouter()
    return(
        <section className="w-[1440px] flex flex-col justify-center m-auto bg-[#F3F4F6]">
            <nav className="w-full h-[72px] px-[120px] flex justify-between items-center bg-white">
                <div className="flex gap-[24px]">
                    <GeldLOGO/>
                    <button onClick={() => router.push("/dashboard")} >Dashboard</button>
                    <button>Records</button>
                </div>
                <div className="flex gap-[24px]">
                    <button className="w-[100px] h-[32px] rounded-[20px] bg-[#0166FF] text-white">+ Record</button>
                </div>
            </nav>
            <div className="flex justify-between px-[120px]">
                <div className="left flex flex-col gap-[24px] w-[270px] py-[24px] px-[16px]">
                    <div className="flex flex-col gap-[24px]">
                        <h4 className="text-[24px]" >Records</h4>
                        <button className="w-full btn btn-primary">+ Add</button>
                    </div>
                    <div>
                        <input placeholder="search" className="w-full bg-[#e6e4e4] px-[16px] py-[8px] rounded-[8px]"></input>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p>Types</p>
                        <Types/>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex justify-between">
                            <p>Category</p>
                            <p className="text-[#d4d6d8]">Clear</p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <RecCategory/>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <Plus/>
                            <button>Add Category</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <p>Amount Range</p>
                        <div className="flex justify-between">
                            <input placeholder="0" className="w-[110px] px-[16px] py-[8px] rounded-[8px] bg-[#e8e9ea]"></input>
                            <input placeholder="1000" className="w-[110px] px-[16px] py-[8px] rounded-[8px] bg-[#e8e9ea]"></input>
                        </div>
                        <input type="range" min="0" max="100" value="40" class="range range-info" />
                    </div>
                </div>
                <div className="right flex flex-col py-[24px] px-[16px]">
                    <div className="flex items-center gap-[10px] px-[16px]">
                        <button className="w-[32px] h-[32px] bg-[#D1D5DB] flex items-center justify-center rounded-[8px]">a</button>
                        <p>Last 30 Days</p>
                        <button className="w-[32px] h-[32px] bg-[#D1D5DB] flex items-center justify-center rounded-[8px]">a</button>
                    </div>
                    <div className="w-[800px]">
                        <LastRecords/>
                    </div>
                </div>
            </div>
        </section>
    )
}