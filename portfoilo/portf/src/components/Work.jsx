import Share from "@/components/icons/ShareICON";
import workbg from "../../public/work.png";
import Category from "@/components/WorkCate";

export default function Work() {
    return(
        <section className="workcontainer m-top-96 flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="p-20">Work</p>
                    </button>  
                </div>
                <p className="flex justify-center">Some of the noteworthy projects I have built:</p>
            </div>
            <div className="workmain flex">
                <div className="workleft rounded-xl">
                    <img className="workimg p-48 rounded-xl" src={workbg.src} alt="" />
                </div>
                <div className="workright flex flex-col gap-[24px] p-48 rounded-xl">
                    <h6>Fiskil</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="catbtns flex gap-[16px] flex-wrap">
                        <Category/>
                    </div>
                    <div>
                        <Share/> 
                    </div>
                </div>
            </div>
            <div className="workmain flex">
                <div className="workright flex flex-col gap-[24px] p-48 rounded-xl">
                    <h6>Fiskil</h6>
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
            <div className="workmain flex">
                <div className="workleft rounded-xl">
                    <img className="workimg p-48 rounded-xl" src={workbg.src} alt="" />
                </div>
                <div className="workright flex flex-col gap-[24px] p-48 rounded-xl">
                    <h6>Fiskil</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="catbtns flex gap-[16px] flex-wrap">
                        <Category/>
                    </div>
                    <div>
                        <Share/> 
                    </div>
                </div>
            </div>
            
        </section>
    )
}