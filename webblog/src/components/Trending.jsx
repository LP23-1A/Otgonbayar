import TrendingCard from "@/components/TrendingData";

export default function Trending() {
    return(
        <section className="flex w-full">
            <div className="flex flex-col gap-[30px]">
                <div>
                    <h6 className="text-[24px]">Trending</h6>
                </div>
                <div className="flex w-full gap-[20px]">
                    <TrendingCard/>
                </div>
            </div>
        </section>
    )
}