import GeldICON from "@/icon/GeldICON";
import GeldLOGO from "@/icon/GeldLOGO";

export default function Create() {
    return(
        <section className="flex">
            <div className="flex flex-row justify-center items-center gap-[10px] p-[5px]">
              <div><GeldLOGO/></div>
              <div><GeldICON/></div>
            </div>
            <div className="flex flex-col items-center gap-[px]">
              <p className="text-[24px]">Create Geld account</p>
              <p>Sign up below to create your Wallet account</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="w-full h-[]">
              <input className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Name"></input>
              </div>
              <div className="w-full h-[]">
              <input className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Email"></input>
              </div>
              <div className="w-full h-[]">
              <input className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Password"></input>
              </div>
              <div className="w-full">
              <input className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Re-password"></input>
              </div>
              <button className="w-full bg-[#0166FF] rounded-[20px] h-[48px] text-[white]">Sign Up</button>
            </div>
            <div className="flex justify-center gap-[10px]">
                <div>Already have account?</div>
                <Link href = "/page">
                    <div className="text-[#0166FF]">Log in</div>
                </Link>
            </div>
           
            <div className="w-[50%] bg-[#0166FF]"></div>
        </section>
    )
}