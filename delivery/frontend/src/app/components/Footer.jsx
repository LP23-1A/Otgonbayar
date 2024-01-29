import Facebook from "../icon/Facebook";
import Instagram from "../icon/Instagram";
import Twitter from "../icon/Twitter";
import LogoWhite from "../icon/LogoWhite";
import Background from "../icon/Background";

export default function Footer() {
    return(
        <section className="w-[1240px] flex flex-col bg-[#18BA51] gap-[40px] py-[114px] px-[120px] relative">
                <div className="absolute top-0 left-0">
                    <Background/>
                </div>
                <div className="flex justify-center gap-[8px]">
                    <LogoWhite/>
                    <p className="text-[20px] text-[#FFFFFF]">Food Delivery</p>
                </div>
                <div className="flex justify-between text-[#FFFFFF]">
                    <p>Нүүр</p>
                    <p>Холбоо барих</p>
                    <p>Хоолны цэс</p>
                    <p>Үйлчилгээний нөхцөл</p>
                    <p>Хүргэлтийн бүс</p>
                    <p>Нууцлалын бодлого</p>
                </div>
                <div className="flex justify-center gap-[18px]">
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
                <hr />
                <div className="flex flex-col items-center text-[white] gap-[8px]">
                    <p>© 2024 Pinecone Foods LLC </p>
                    <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                </div>
        </section>
    )
}