import ForkKnife from "@/icon/ForkKnife"

const FoodDATA = [
    {
        title: 'Food & Drinks',
        date: '14:00',
        minus: '-',
        value: '1,000₮'
    },
]

export default function Food() {
    return(
        FoodDATA.map((props) => {
            return(
            <div className="px-[20px] py-[16px] flex items-center bg-white mt-[12px] rounded-[12px] justify-between border-1 border-b">
                <div className="flex items-center gap-[16px]">
                    <div>
                        <input type="checkbox" className="checkbox" />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FF4545]">
                        <div className="w-full h-full flex items-center justify-center">
                            <ForkKnife/>
                        </div>
                    </div>
                    <div>
                        <p>{props.title}</p>
                        <p className="text-[#6B7280] text-[12px]">{props.date}</p>
                    </div>
                </div>
                <div className="flex text-[#EAB308]">
                    <p>{props.minus}</p>
                    <p>{props.value}</p>
                </div>
            </div>
            )
        })
    )
}