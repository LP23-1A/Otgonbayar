import MailIcon from "@/components/MailICON";
import CopyIcon from "@/components/CopyICON";
import PhoneIcon from "@/components/PhoneICON";
import Btnicons from "@/components/Btnicons";

export default function Footer() {
    return(
        <section className="footersection flex column m-top-96 gap48 m-bottom-96">
            <div className="flex column gap10">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="p-20">Get in touch</p>
                    </button>  
                </div>
                <p className="flex justify-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="flex gap10 column">
            <div className="flex gap16 align-center justify-center">
                <div>
                    <MailIcon/>
                </div>
                <div><h3>reachsagarshah@gmail.com</h3></div>
                <div>
                    <CopyIcon/>
                </div>
            </div>
            <div className="flex gap16 align-center justify-center">
                <div>
                    <PhoneIcon/>
                </div>
                <div><h3>+91 8980500565</h3></div>
                <div>
                    <CopyIcon/>
                </div>
            </div>
            </div>
            <div className="flex justify-center column align-center gap10">
                <p>You may also find me on these platforms!</p>
                <div>
                    <Btnicons/>
                </div>
            </div>
        </section>
    )
}