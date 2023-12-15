import TrendingCard from "@/components/TrendingData";

export default function Trending() {
    return(
        <section className="flex w-full">
            <div className="flex flex-col gap-[30px] max-sm:px-[32px]">
                <div>
                    <h6 className="text-[24px]">Trending</h6>
                </div>
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center flex w-full gap-[20px]">
                    <TrendingCard/>
                    <TrendingCard/>
                </div>
            </div>
        </section>
    )
}