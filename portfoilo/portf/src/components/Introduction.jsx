import Locicon from "@/components/icons/LocICON";
import Activeicon from "@/components/icons/ActiveICON";
import Btnicons from "@/components/icons/Btnicons";
import IntroductionIMG from "@/components/IntroIMG";
import IntroIMGbg from "@/components/IntroIMGbg";

export default function Introduction() {
    return(
        <section className="introcontainer flex justify-between py-[96px] px-[80px] bg-white max-md:flex-col-reverse max-md:p-0 max-md:justify-center max-md:flex">
            <div className="introleft w-770 flex flex-col gap-[48px]">
                <div>
                    <div className="introtop flex items-center">
                      <h1>Hi, Im Oggy</h1>
                      <p>👋</p>  
                    </div>
                    <p className="gray600">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div>
                    <div className="flex items-center gap-[24px]">
                        <Locicon/>
                        <p>Ahmedabad, India</p>  
                    </div>
                    <div className="flex items-center gap-[24px]">
                        <Activeicon/>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="introIcon">
                    <Btnicons/>
                </div>
            </div>
            <div className="introright flex items-center justify-center relative">
                <IntroIMGbg/>
                <IntroductionIMG/>
            </div>
        </section>
    )
}