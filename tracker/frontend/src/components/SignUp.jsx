'use client'
import  axios from "axios";
import { useState } from "react";
import GeldICON from "@/icon/GeldICON";
import GeldLOGO from "@/icon/GeldLOGO";

const API = "http://localhost:3001/users"

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handler = async () => {
    let res = await axios.post(API, { name: name, email: email, password: password })
    console.log(res, 'res');
  }
    return(
        <section className="flex">
          <div className="w-[50%] h-[100vh] bg-white flex flex-col justify-center items-center gap-[30px]">
            <div className="flex flex-row justify-center items-center gap-[10px] p-[5px]">
              <div><GeldLOGO/></div>
              <div><GeldICON/></div>
            </div>
            <div className="flex flex-col items-center gap-[px]">
              <p className="text-[24px]">Create Geld account</p>
              <p>Sign up below to create your Wallet account</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="w-[385px]">
                <input onChange={(event) => setName(event.target.value)} value={name} className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Name"></input>
              </div>
              <div className="w-full">
                <input onChange={(event) => setEmail(event.target.value)} value={email} className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Email"></input>
              </div>
              <div className="w-full">
                <input onChange={(event) => setPassword(event.target.value)} value={password} className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Password"></input>
              </div>
              <div className="w-full">
                <input className="w-full py-[15px] px-[15px] bg-[#F3F4F6] rounded-[8px]" placeholder="Re-password"></input>
              </div>
                <button onClick={handler} className="w-full bg-[#0166FF] rounded-[20px] h-[48px] text-[white]">Sign Up</button>
            </div>
            <div className="flex justify-center gap-[10px]">
                <div>Already have account?</div>
                <div className="text-[#0166FF]">Log in</div>
            </div>
          </div>
            <div className="w-[50%] bg-[#0166FF]"></div>
        </section>
    )
}