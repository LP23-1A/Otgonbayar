import TrendingCard from "@/components/TrendingData";

export default function Trending() {
    return(
        <section className="w-[1240px] flex flex-col">
            <div className="flex flex-col gap-[30px]">
                <div>
                    <h6 className="text-[24px]">Trending</h6>
                </div>
                <div>
                    <TrendingCard/>
                </div>
            </div>
        </section>
    )
}