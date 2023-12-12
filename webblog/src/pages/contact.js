import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
    return(
        <section className="flex flex-col justify-center items-center gap-[100px]">
            <Navbar/>
                <div className="w-[769px] flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[36px]">Contact us</p>
                        <p className="text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="flex gap-[50px] mt-[20px]">
                        <div className="w-[294px] h-[133px] flex flex-col p-[16px] border-2 rounded-[12px] gap-[10px]">
                            <p className="text-[24px] text-[#000000]">Address</p>
                            <p className="text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                        <div className="w-[294px] h-[133px] flex flex-col p-[16px] border-2 rounded-[12px] gap-[10px]">
                            <p className="text-[24px] text-[#000000]">Contact</p>
                            <p className="text-[#696A75]">313-332-8662
                            info@email.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] mt-[40px] bg-[#F6F6F7] rounded-[10px] py-[29px] pl-[35px] pr-[130px]">
                        <p className="text-[18px] text-[#000000]">Leave a message</p>
                        <div className="flex gap-[20px]">
                            <input className="py-[8px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Your Name"></input>
                            <input className="py-[8px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Your Email"></input>
                        </div>
                        <div>
                            <input className="w-full py-[8px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Subject"></input>
                        </div>
                        <div>
                            <input className="w-full h-[135px] py-[14px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Write a message"></input>
                        </div>
                        <div>
                            <button className=" bg-[#4B6BFB] text-[white] rounded-[6px] p-[10px]">Send Message</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </section>
    )
}