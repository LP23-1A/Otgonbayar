'use client'
import GeldICON from "@/icon/GeldICON";
import GeldLOGO from "@/icon/GeldLOGO";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const API = "http://localhost:3001/users/user"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handler = async () => {
    let res = await axios.post(API, { email: email, password: password})
    console.log(res.data);
    if (res.data = 'success') {
      router.push("/dashboard")
    }
  }
  return (    
      <section className="flex">
        <div className="w-[50%] h-[100vh] bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center w-[390px] h-[430px] gap-[40px]">
            <div className="flex flex-row justify-center items-center gap-[10px] p-[5px]">
              <div><GeldLOGO/></div>
              <div><GeldICON/></div>
            </div>
            <div className="flex flex-col items-center gap-[px]">
              <p className="text-[24px]">Welcome Back</p>
              <p>Welcome back, Please enter your details</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="w-full h-[]">
              <input onChange={(event) => setEmail(event.target.value)} value={email} className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Email"></input>
              </div>
              <div className="w-full">
              <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Password"></input>
              </div>
              <button onClick={handler} className="w-full bg-[#0166FF] rounded-[20px] h-[48px] text-[white]">Log in</button>
            </div>
            <div className="flex justify-center gap-[10px]">
              <div>Don’t have account?</div>
              <div onClick={() => router.push("/Sign")} className="text-[#0166FF]">Sign up</div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
      </section>
  )
}