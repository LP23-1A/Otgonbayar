import NavLogo from "@/components/icons/Navlogo";
import NavThemeChange from "@/components/Navthemechange";
import Menu from "@/components/icons/MenuICON";

export default function Navbar({Darktheme}) {
    return(
        <section className="navcontainer px-[80px] flex justify-between items-center max-md:">
                <div>
                   <div className="navlogo">
                        <NavLogo/>
                    </div> 
                </div>
                <div className="flex gap-[24px] max-md:hidden">
                    <div className="navlist flex items-center">
                        <li>About</li>
                        <li>Work</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </div>
                    <div className="navbtn flex">
                        <button onClick={Darktheme}>
                            <NavThemeChange/>
                        </button>
                        <button className="downloadbtn">Download CV</button>
                    </div>
                    <div className="Menubtn flex items-center max-2xl:hidden">
                        <button>
                            <Menu/>
                        </button>
                    </div>
                </div>
        </section>
    )
}