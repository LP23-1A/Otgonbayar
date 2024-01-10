import House from "@/icon/House";

const lastrec = [
    {
        title: 'Lending & Renting',
        date: '3 hours ago',
        minus: '-',
        value: '1,000₮'
    },
    {
        title: 'Lending & Renting',
        date: '3 hours ago',
        minus: '-',
        value: '1,000₮'
    },
    {
        title: 'Lending & Renting',
        date: '3 hours ago',
        minus: '-',
        value: '1,000₮'
    },
    {
        title: 'Lending & Renting',
        date: '3 hours ago',
        minus: '-',
        value: '1,000₮'
    },
    {
        title: 'Lending & Renting',
        date: '3 hours ago',
        minus: '-',
        value: '1,000₮'
    },
    
]

export default function LastRecords() {
    return(
        lastrec.map((props) => {
            return(
            <div className="px-[24px] py-[24px] flex items-center justify-between border-1 border-b">
                <div className="flex gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-[50%] bg-[#0166FF]">
                        <div className="w-full h-full flex items-center justify-center">
                            <House/>
                        </div>
                    </div>
                    <div>
                        <p>{props.title}</p>
                        <p className="text-[#6B7280] text-[12px]">{props.date}</p>
                    </div>
                </div>
                <div className="flex text-[#84CC16]">
                    <p>{props.minus}</p>
                    <p>{props.value}</p>
                </div>
            </div>
            )
        })
    )
}