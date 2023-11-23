import Share from "@/components/icons/ShareICON";
import Category from "@/components/WorkCate";
import workbg from "../../public/work.png";

export default function Workinfo() {
    return(
        <div className="workmain flex">
        <div className="workleft rounded-xl">
            <img className="workimg p-48 rounded-xl" src={workbg.src} alt="" />
        </div>
        <div className="workright flex flex-col gap-[24px] p-48 rounded-xl">
            <h6 className="text-[20px]">Fiskil</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            <div className="catbtns flex gap-[16px] flex-wrap">
                <Category/>
            </div>
            <div>
                <Share/> 
            </div>
        </div>
    </div>
    )
}