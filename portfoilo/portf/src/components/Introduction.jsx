import Locicon from "@/components/LocICON";
import Activeicon from "@/components/ActiveICON";

export default function Introduction() {
    return(
        <section className="introcontainer">
            <div>
                <div>
                    <div className="introtop flex align-center">
                      <h1>Hi, Im Oggy</h1>
                      <p>👋</p>  
                    </div>
                    <p className="gray600">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div>
                    <div className="flex align-center">
                        <Locicon/>
                        <p>Ahmedabad, India</p>  
                    </div>
                    <div className="flex align-center">
                        <Activeicon/>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="introIcon">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </section>
    )
}