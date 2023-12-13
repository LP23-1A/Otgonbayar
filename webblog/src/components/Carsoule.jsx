import { useState } from "react"
import { CarsouleData } from "@/components/CarsouleData";

export default function Carsoule() {

    const [activeIndex, setActiveIndex] = useState(0)

    const right = () => {
        if (activeIndex === 2) {
            setActiveIndex(0)
            return
        }
        setActiveIndex((next) => next + 1);
    }

    const left = () => {
        if (activeIndex === 0) {
            setActiveIndex(2)
            return
        }
        setActiveIndex((back) => back - 1);
    }

    return(
        <section className="w-[1240px] h-[900px]">
            <div className="relative">
                <div className="absolute">
                    <img className="w-[1240px] h-[900px] rounded-[12px]" src={CarsouleData[activeIndex].img} alt="" />
                </div>
                <div className="absolute top-[600px] left-[20px] w-[598px] h-[252px] bg-white rounded-[12px]">
                    <div className="p-[40px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[16px]">
                            <button className="w-[100px] py-[5px] rounded-[6px] bg-[#4B6BFB] text-[white] ">{CarsouleData[activeIndex].button}</button>
                            <p className="text-[36px]">{CarsouleData[activeIndex].title}</p>
                        </div>
                        <div>
                            <p className="text-[#97989F]">{CarsouleData[activeIndex].date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1240px] relative flex justify-end top-[930px]">
                <div className="w-[90px] flex gap-[9px]">
                    <button onClick={left} className="w-[40px] h-[40px] flex items-center justify-center border-2 rounded-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                        <path d="M8.5 16L1 8.5L8.5 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={right} className="w-[40px] h-[40px] flex items-center justify-center border-2 rounded-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                        <path d="M1 1L8.5 8.5L1 16" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}