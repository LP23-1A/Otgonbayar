import MetaLogo from "@/components/MblogLOGO";
import SearchICON from "@/utils/SearchICON";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter()
    const home = () => {
        router.push("/")
    }
    const contact = () => {
        router.push("/contact")
    }
    const blog = () => {
        router.push("/blog")
    }
    return(
        <section className="flex w-[1240px] items-center justify-between py-[32px]">
            <MetaLogo/>
            <div className="flex gap-[40px]">
                <button onClick={home} className="text-[16px]">Home</button>
                <button onClick={blog} className="text-[16px]">Blog</button>
                <button onClick={contact} className="text-[16px]">Contact</button>
            </div>
            <div className="flex items-center rounded-[5px] border-solid bg-[#dadae1] p-[8px]" title="search">
                <input className="bg-[#dadae1] rounded-[5px]" type="search" placeholder="search"/>
                <SearchICON/>
            </div>
        </section>
    )
}