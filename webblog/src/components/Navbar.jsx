import MetaLogo from "@/components/MblogLOGO";
import SearchICON from "@/utils/SearchICON";

export default function Nav() {
    return(
        <section className="flex w-[1240px] items-center justify-between py-[32px]">
            <MetaLogo/>
            <div className="flex gap-[40px]">
                <p className="text-[16px]">Home</p>
                <p className="text-[16px]">Blog</p>
                <p className="text-[16px]">Contact</p>
            </div>
            <div className="flex items-center rounded-[5px] border-solid bg-[#dadae1] p-[8px]" title="search">
                <input className="bg-[#dadae1] rounded-[5px]" type="search" placeholder="search"/>
                <SearchICON/>
            </div>
        </section>
    )
}