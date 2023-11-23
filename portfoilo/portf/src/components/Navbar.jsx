import NavLogo from "@/components/icons/Navlogo";
import NavThemeChange from "@/components/Navthemechange";

export default function Navbar() {
    return(
        <section className="navcontainer w-1216 flex justify-between items-center">
                <div>
                   <div className="navlogo">
                        <NavLogo/>
                    </div> 
                </div>
                <div className="flex gap-[24px]">
                    <div className="navlist flex items-center">
                        <li>About</li>
                        <li>Work</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </div>
                    <div className="navbtn flex">
                        <button className="changetheme flex justify-center items-center">
                            <NavThemeChange/>
                        </button>
                        <button className="downloadbtn">Download CV</button>
                    </div>
                </div>
        </section>

    )
}