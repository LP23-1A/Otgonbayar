import BICON from "@/utils/BICON";
import Facebook from "@/utils/FacebookICON";
import Instagram from "@/utils/InstagramICON";
import Linkedin from "@/utils/Linkedin";
import Twitter from "@/utils/Twitter";

export default function Footer() {
    return(
        <section className="bg-[#E8E8EA] flex items-center justify-center w-[100vw]">
            <div className="  py-[64px] flex flex-col gap-[25px] ">
                <div className="flex gap-[20px]">
                    <div className="w-[290px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <div>
                                <p className="text-[18px]">About</p>
                            </div>
                            <div>
                                <p className="text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="text-[#696A75]">
                            <p>Email : info@jstemplate.net</p>
                            <p>Phone : 880 123 456 789</p>
                        </div>
                    </div>
                    <div className="w-[500px] flex justify-center">
                        <ul className="flex flex-col gap-[8px] text-[#3B3C4A]">
                            <li>Home </li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                <div className="w-[400px] flex gap-[26px]">
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <Linkedin/>
                </div>
                </div>
                <div className="flex items-center justify-between py-[25px] border-4 border-t-[#DCDDDF]">
                    <div className="flex gap-[10px]">
                        <div>
                            <BICON/>
                        </div>
                        <div>
                            <p>Meta<b>Blog</b></p>
                            <p>© All Rights Reserved.</p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-[16px]">
                            <li>Terms of Use</li>
                            <hr className="bg-[#E8E8EA]"/>
                            <li>Privacy Policy</li>
                            <hr />
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
        </div>
        </section>
        
    )
}