import MetaLogo from "@/components/MblogLOGO";
import SearchICON from "@/utils/SearchICON";
import Link from "next/link";
import Menu from "@/components/MenuICON";
import { useState } from "react";
// import DropDown from "@/components/DropDown";

export default function Nav() {
    const [dropDown, setDropDown] = useState(false)
    const MenuHandler = () => {
        setDropDown(!dropDown)
    }
    return(
            <section className="w-full flex items-center justify-between py-[32px] max-sm:px-20">
                <MetaLogo/>
                <div className="flex gap-[40px] max-sm:hidden">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="max-sm:hidden flex items-center rounded-[5px] border-solid bg-[#dadae1] p-[8px]" title="search">
                    <input className="bg-[#dadae1] rounded-[5px]" type="search" placeholder="search"/>
                    <SearchICON/>
                </div>
                {/* <button className="max-2xl:hidden">
                    <Menu/>
                </button> */}
            </section>
        //     {
        //     dropDown && <DropDown setDropDown={setDropDown} />
        // }
    )
}