import GeldLOGO from "@/icon/GeldLOGO";
import GeldICON from "@/icon/GeldICON";
import Done from "@/icon/DoneLOGO";

export default function Finish() {
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
                        <li className="step step-primary">Finish</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[384px]">
                   <div className="flex flex-col items-center gap-[10px] h-[100px]">
                        <div className="w-[48px] h-[48px] bg-[#0166FF] flex items-center justify-center rounded-[50%]">
                            <Done/>
                        </div>
                        <p className="text-[24px]">Good Job!</p>
                    </div>
                    <div className="mt-[12px] text-[12px] text-center">
                            <p>Your very first account has been created. Now continue to dashboard and start tracking</p>
                    </div>
                    <div className="w-full h-[48px] bg-[#0166FF] mt-[32px] flex justify-center rounded-[20px] text-[white]">
                        <button className="w-full">Go to Dashboard</button>
                    </div>
                </div>
            </div>
        </section>
    )
}