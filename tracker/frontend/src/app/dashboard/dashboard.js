import GeldLOGO from "@/icon/GeldLOGO";
import GeldLOGOwhite from "@/icon/GeldLOGOwhite";
import GeldICONwhite from "@/icon/GeldICONwhite";
import GreenDOT from "@/icon/GreenDOT";
import ArrowCIrcleUp from "@/icon/ArrowCircleUp";
import BlueDOT from "@/icon/BlueDOT";

export default function dashboard() {
    return(
        <section className="w-screen flex flex-col justify-center bg-[#F3F4F6]">
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
            <div className="flex gap-[10px] mt-[10px] justify-center">
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
            <div className="flex justify-center gap-[20px] mt-[20px]">
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
                <div className="w-[1200px] h-[500px] bg-white rounded-[8px]">
                    <div className="px-[24px] py-[30px]">
                        <p>Last Records</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}