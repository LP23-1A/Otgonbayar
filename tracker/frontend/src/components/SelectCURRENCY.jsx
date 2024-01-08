import MoneyLOGO from "@/icon/MoneyLOGO";
import GeldLOGO from "@/icon/GeldLOGO";
import GeldICON from "@/icon/GeldICON";

export default function Select() {
    return(
        <section className="w-[100vw] py-[40px] bg-white">
            <div className="flex flex-col justify-center items-center gap-[141px]">
                <div className="flex flex-col items-center gap-[48px]">
                    <div className="flex items-center gap-[10px]">
                        <GeldLOGO/>
                        <GeldICON/>
                    </div>
                    <div>
                        <ul className="steps">
                        <li className="step step-primary">Currency</li>
                        <li className="step">Finish</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[384px]">
                   <div className="flex flex-col items-center gap-[10px] h-[100px]">
                        <div className="w-[48px] h-[48px] bg-[#0166FF] flex items-center justify-center rounded-[50%]">
                            <MoneyLOGO/>
                        </div>
                        <p className="text-[24px]">Select base currency</p>
                    </div>
                    <div className="w-full flex flex-col items-center mt-[24px]">
                        <select className="w-full p-[16px] rounded-[8px] bg-[#F3F4F6] text-[#1F2937] border-solid border-2" >
                            <option>MNT - Mongolian Tugrik</option>
                            <option>USD - Dollar</option> 
                        </select>
                    </div>
                    <div className="mt-[12px] text-[12px]">
                        <p>Your base currency should be the one you use most often. All <br/> transaction in other currencies will be calculated based on this one </p>
                    </div>
                    <div className="w-full h-[48px] bg-[#0166FF] mt-[32px] flex justify-center rounded-[20px] text-[white]">
                        <button className="w-full">Confirm</button>
                    </div>
                </div>
            </div>
        </section>
    )
}