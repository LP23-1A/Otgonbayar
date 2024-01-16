"use client"
import RecCategory from "@/components/Category";
import Food from "@/components/FoodDrink";
import FoodRed from "@/components/FoodRed";
import LastRecords from "@/components/LastRec";
import Types from "@/components/Types";
import ForkKnife from "@/icon/ForkKnife";
import GeldLOGO from "@/icon/GeldLOGO";
import House from "@/icon/House";
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
                        {/* <button className="w-full btn btn-primary">+ Add</button> */}
                        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>+ Add</button>
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Add Record</h3>
                                </div>
                            </div>
                            <div className="flex">
                            <div className="left flex flex-col px-[8px] py-[15px] gap-[20px]">
                                <div className="flex justify-center bg-[#F3F4F6] rounded-[20px]">              
                                    <button className="btn w-[50%] btn-primary rounded-[20px]">Expense</button>
                                    <button className="btn w-[50%] bg-[#F3F4F6] rounded-[20px]">Income</button>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col p-[12px] bg-[#F3F4F6] rounded-[8px]">
                                            <p>Amount</p>
                                            <div className="flex gap-[5px]">
                                                <input className="bg-[#F3F4F6] w-[15px]" placeholder="₮"></input>
                                                <input className="bg-[#F3F4F6]" placeholder="000.00"></input>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[5px] w-full ">
                                            <p>Category</p>
                                            <div>
                                                <select className="bg-[#F3F4F6] p-[12px] w-full rounded-[8px]"></select>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-around gap-[8px]">
                                            <div>
                                                <p>Date</p>
                                                <div className="p-[16px] bg-[#F3F4F6] rounded-[8px]">
                                                    <p>Oct 30, 2023</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Date</p>
                                                <div className="p-[16px] bg-[#F3F4F6] rounded-[8px]">
                                                    <p>4:15 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <button className="w-full btn btn-primary">Add Record</button>
                                </div>
                            </div>
                            <div className="right flex flex-col gap-[10px] px-[8px] py-[15px]">
                                <div>
                                    <p>Payee</p>
                                    <input className="bg-[#F3F4F6] p-[12px] w-full rounded-[8px]" placeholder="Write here"></input>
                                </div>
                                <div>
                                    <p>Note</p>
                                    <input className="bg-[#F3F4F6] p-[12px] w-full h-[340px] rounded-[8px]" placeholder="Write here"></input>
                                </div>
                            </div>
                            </div>
                        </div>
                        </dialog>
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
                        <input type="range" min="0" max="100" value="40" class="range range-primary" />
                    </div>
                </div>
                <div className="right flex flex-col py-[24px] px-[16px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                            <button className="w-[32px] h-[32px] bg-[#D1D5DB] flex items-center justify-center rounded-[8px]">a</button>
                                <p>Last 30 Days</p>
                            <button className="w-[32px] h-[32px] bg-[#D1D5DB] flex items-center justify-center rounded-[8px]">a</button>
                        </div>
                        <div>
                            <select className="w-[180px] p-[16px] rounded-[8px]">
                                <option>Newest first</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-[16px] py-[16px] flex items-center justify-between border-1 bg-white rounded-[12px] mt-[15px]">
                        <div className="flex gap-[16px]">
                            <input type="checkbox" className="checkbox" />
                            <div>
                                <p>Select all</p>
                            </div>
                        </div>
                        <div className="flex text-[#94A3B8]">
                            <p>- 35,500₮</p>
                        </div>
                    </div>
                    <div className="w-[800px] mt-[24px]">
                        <p>Today</p>
                            <div className="px-[20px] py-[16px] flex items-center bg-white mt-[12px] rounded-[12px] justify-between border-1 border-b">
                                <div className="flex items-center gap-[16px]">
                                    <div>
                                        <input type="checkbox" className="checkbox" />
                                    </div>
                                    <div className="w-[40px] h-[40px] rounded-[50%] bg-[#0166FF]">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <House/>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Lending & Renting</p>
                                        <p className="text-[#6B7280] text-[12px]">3 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex text-[#84CC16]">
                                    <p>-</p>
                                    <p>1,000₮</p>
                                </div>
                            </div>
                        <FoodRed/>
                        <Food/>
                        <Food/>
                        <Food/>
                    </div>
                    <div className="w-[800px] mt-[24px]">
                        <p>Yesterday</p>
                        <Food/>
                        <Food/>
                        <Food/>
                        <Food/>
                        <Food/>
                        <Food/>
                    </div>
                </div>
            </div>
        </section>
    )
}