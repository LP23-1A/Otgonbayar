import MailIcon from "@/components/icons/MailICON";
import CopyIcon from "@/components/icons/CopyICON";
import PhoneIcon from "@/components/icons/PhoneICON";
import Btnicons from "@/components/icons/Btnicons";

export default function Footer() {
    return(
        <section className="footersection flex flex-col my-[96px] gap-[26px] m-bottom-96">
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="p-20">Get in touch</p>
                    </button>  
                </div>
                <p className="flex justify-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="flex gap-[10px] flex-col">
            <div className="flex gap-[16px] items-center justify-center">
                <div>
                    <MailIcon/>
                </div>
                <div><h3 className="text-[36px]">reachsagarshah@gmail.com</h3></div>
                <div>
                    <CopyIcon/>
                </div>
            </div>
            <div className="flex gap-[16px] items-center justify-center">
                <div>
                    <PhoneIcon/>
                </div>
                <div><h3 className="text-[36px]">+91 8980500565</h3></div>
                <div>
                    <CopyIcon/>
                </div>
            </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-[10px]">
                <p>You may also find me on these platforms!</p>
                <div>
                    <Btnicons/>
                </div>
            </div>
        </section>
    )
}