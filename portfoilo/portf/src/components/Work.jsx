import Share from "@/components/icons/ShareICON";
import workbg from "../../public/work.png";
import Category from "@/components/WorkCate";
import Workinfo from "@/components/Workinfo";

export default function Work() {
    return(
        <section className="workcontainer my-[96px] flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="px-5">Work</p>
                    </button>  
                </div>
                <p className="flex justify-center">Some of the noteworthy projects I have built:</p>
            </div>
            <div className="w-full flex flex-col justify-center gap-[40px]">
                <Workinfo/>
            <div className="workmain flex justify-center">
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
                <div className="workleft rounded-xl">
                    <img className="workimg p-48 rounded-xl" src={workbg.src} alt="" />
                </div>
            </div>
                <Workinfo/>
            </div>
        </section>
    )
}