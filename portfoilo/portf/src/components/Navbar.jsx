import NavLogo from "@/components/Navlogo";
import NavThemeChange from "@/components/Navthemechange";

export default function Navbar() {
    return(
        <section className="navcontainer w-1216 flex justify-between align-center">
                <div>
                   <div className="navlogo">
                        <NavLogo/>
                    </div> 
                </div>
                <div className="flex gap24">
                    <div className="navlist flex">
                        <li>About</li>
                        <li>Work</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </div>
                    <div className="navbtn flex">
                        <button className="changetheme flex justify-center align-center">
                            <NavThemeChange/>
                        </button>
                        <button className="downloadbtn">Download CV</button>
                    </div>
                </div>
        </section>

    )
}