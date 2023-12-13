import MetaLogo from "@/components/MblogLOGO";
import SearchICON from "@/utils/SearchICON";
import Link from "next/link";

export default function Nav() {
    return(
        <section className="flex w-[1240px] items-center justify-between py-[32px]">
            <MetaLogo/>
            <div className="flex gap-[40px]">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="flex items-center rounded-[5px] border-solid bg-[#dadae1] p-[8px]" title="search">
                <input className="bg-[#dadae1] rounded-[5px]" type="search" placeholder="search"/>
                <SearchICON/>
            </div>
        </section>
    )
}