import GeldICON from "@/icon/GeldICON";
import GeldLOGO from "@/icon/GeldLOGO";

export default function Login() {
  return (    
      <section className="flex">
        <div className="w-[50%] h-[100vh] bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center w-[390px] h-[430px] gap-[40px]">
            <div className="flex flex-row justify-center items-center gap-[10px] p-[5px]">
              <div><GeldLOGO/></div>
              <div><GeldICON/></div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[24px]">Welcome Back</p>
              <p>Welcome back, Please enter your details</p>
            </div>
            <div className="flex flex-col">
              <input className="w-full" placeholder="Email"></input>
              <input className="w-full" placeholder="Password"></input>
              <button>Log in</button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
      </section>
  )
}
