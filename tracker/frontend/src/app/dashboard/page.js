'use client'

import GeldLOGO from "@/icon/GeldLOGO";
import GeldLOGOwhite from "@/icon/GeldLOGOwhite";
import GeldICONwhite from "@/icon/GeldICONwhite";
import GreenDOT from "@/icon/GreenDOT";
import ArrowCIrcleUp from "@/icon/ArrowCircleUp";
import BlueDOT from "@/icon/BlueDOT";
import { Chart } from "chart.js";
import LastRecords from "@/components/LastRec";
import { useRouter } from "next/navigation";

const data = {
    labels: [
      'blue',
      'orange',
      'aqua',
      'aris',
      'purple'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [40, 30, 50, 36, 53],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255,165,0)',
        'rgb(0, 255, 255)',
        'rgb(255,218,185)',
        'rgb(255, 0, 255)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

export default function dashboard() {
    const router = useRouter()
    return(
        <section className="w-[1440px] flex flex-col justify-center m-auto bg-[#F3F4F6]">
            <nav className="w-full h-[72px] px-[120px] flex justify-between items-center bg-white">
                <div className="flex gap-[24px]">
                    <GeldLOGO/>
                    <button>Dashboard</button>
                    <button onClick={() => router.push("/Records")}>Records</button>
                </div>
                <div className="flex gap-[24px]">
                    <button className="w-[100px] h-[32px] rounded-[20px] bg-[#0166FF] text-white">+ Record</button>

                </div>
            </nav>
            <div className="flex gap-[15px] mt-[10px] justify-center">
                <div className="w-[392px] h-[220px] rounded-[18px] bg-[blue]">
                    <div className="flex items-center gap-[8px] mt-[32px] ml-[32px]">
                        <GeldLOGOwhite/>
                        <GeldICONwhite/>
                    </div>
                    <div className="ml-[32px] mt-[80px]">
                        <p className="text-[#8b8b8b]">Cash</p>
                        <p className="text-[white] text-[24px]">10,000,00</p>
                    </div>
                </div>
                <div className="w-[392px] h-[220px] rounded-[18px] bg-white">
                    <div className="flex items-center gap-[8px] mt-[32px] ml-[32px]">
                        <GreenDOT/>
                        <p>Your Income</p>
                    </div>
                    <div className="flex flex-col ml-[32px] mt-[15px] gap-[20px]">
                        <div>
                            <p className="text-[36px]">1,200,00₮</p>
                            <p className="text-[#64748B]">Your Income Amount</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <ArrowCIrcleUp/>
                            <p>32% from last month</p>
                        </div>
                    </div>
                </div>
                <div className="w-[392px] h-[220px] rounded-[18px] bg-white">
                    <div className="flex items-center gap-[8px] mt-[32px] ml-[32px]">
                        <BlueDOT/>
                        <p>Total Expenses</p>
                    </div>
                    <div className="flex flex-col ml-[32px] mt-[15px] gap-[20px]">
                        <div>
                            <p className="text-[36px]">-1,200,00₮</p>
                            <p className="text-[#64748B]">Your Income Amount</p>
                        </div>
                        <div className="flex gap-[5px]">
                            <ArrowCIrcleUp/>
                            <p>32% from last month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-[25px] mt-[20px]">
                <div className="w-[588px] h-[290px] bg-white rounded-[8px]">
                    <div></div>
                    <div></div>
                </div>
                <div className="w-[588px] h-[290px] bg-white rounded-[8px]">
                    <div className="flex justify-between p-[24px]">
                        <p>Income - Expense</p>
                        <p className="text-[#6B7280]">Jun 1 - Nov 30</p>
                    </div>
                    <div className="py-[32px] px-[24px]">

                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[20px]">
                <div className="w-[1200px] bg-white rounded-[8px]">
                    <div className="px-[24px] py-[30px]">
                        <p>Last Records</p>
                    </div>
                <LastRecords/>
                </div>
            </div>
            
        </section>
    )
}