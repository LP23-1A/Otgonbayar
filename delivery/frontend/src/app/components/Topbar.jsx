import Logo from "../icon/Logo";
import Search from "../icon/Search";
import Bag from "../icon/Bag";
import Profile from "../icon/Profile";

export default function Navbar() {
    return(
        <section className="w-[1240px] flex justify-between p-[20px]">
            <div className="flex items-center gap-[24px]">
                <div><Logo/></div>
                <ul className="flex gap-[20px]">
                    <button>НҮҮР</button>
                    <button>ХООЛНЫ ЦЭС</button>
                    <button>ХҮРГЭЛТИЙН БҮС</button>
                </ul>
            </div>
            <div className="flex items-center gap-[8px]">
                <div className="flex items-center justify-center gap-[8px] border border-[#000000] border-1 py-[8px] px-[16px] rounded-[8px]">
                    <Search/>
                    <input className="outline-none text-[16px] bg-white" type="text" placeholder="Хайх"/>
                </div>
                <div className="flex items-center gap-[8px] py-[8px] px-[16px]">
                    <Bag/>
                    <p>Сагс</p>
                </div>
                <div className="flex items-center gap-[8px] py-[8px] px-[16px]">
                    <Profile/>
                    <p>Нэвтрэх</p>
                </div>
            </div>
        </section>
    )
}