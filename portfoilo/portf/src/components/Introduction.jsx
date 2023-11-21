import Locicon from "@/components/LocICON";
import Activeicon from "@/components/ActiveICON";
import Btnicons from "@/components/Btnicons";
import IntroductionIMG from "./IntroIMG";
import IntroIMGbg from "@/components/IntroIMGbg";

export default function Introduction() {
    return(
        <section className="introcontainer flex justify-between m-top-96 bg-white">
            <div className="introleft w-770 flex column gap48">
                <div>
                    <div className="introtop flex align-center">
                      <h1>Hi, Im Oggy</h1>
                      <p>👋</p>  
                    </div>
                    <p className="gray600">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div>
                    <div className="flex align-center gap24">
                        <Locicon/>
                        <p>Ahmedabad, India</p>  
                    </div>
                    <div className="flex align-center gap24">
                        <Activeicon/>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="introIcon">
                    <Btnicons/>
                </div>
            </div>
            <div className="introright flex align-center justify-center">
                <IntroIMGbg/>
                <IntroductionIMG/>
            </div>
        </section>
    )
}