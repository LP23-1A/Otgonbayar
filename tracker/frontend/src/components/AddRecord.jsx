'use client'
import axios from "axios"
import { useState } from "react"

const API = "http://localhost:3001/transaction/transaction"
const category_endpoint = "http://localhost:3001/category/category"

export default function AddRecord() {
const [exinc, setExinc] = useState(true)
const [amount, setAmount] = useState('')
const [activeButton, setActiveButton] = useState(true);
const [description, setDescription] = useState('')
const [catdata, setCatdata] = useState([])
const getcategory = async () => {
    let res = await axios.get(category_endpoint)
    setCatdata(catdata.data)
    console.log(res, 'res');
}
const handler = async () => {
    let res = await axios.post(API, { amount : amount, description : description })
    console.log(res, 'res');
}
const changeclr = async () => {
    setExinc(!exinc)
    setActiveButton(!activeButton)
}
    return(
        <div className="flex flex-col gap-[24px]">
            <h4 className="text-[24px]" >Records</h4>
            <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>+ Add</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <div className="flex flex-col">
                            <div className="flex">
                                <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Add Record</h3>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="left flex flex-col px-[8px] py-[15px] gap-[20px]">
                                <div onClick={changeclr} className="flex justify-center bg-[#F3F4F6] rounded-[20px]">              
                                    <button style={{background:exinc ? "blue" : "", color:exinc ? 'black' : '' }} className="btn w-[50%]  rounded-[20px]">Expense</button>
                                    <button style={{background:exinc ? "" : "green", color:exinc ? '' : 'black'}} className="btn w-[50%]  rounded-[20px]">Income</button>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col p-[12px] bg-[#F3F4F6] rounded-[8px]">
                                            <p>Amount</p>
                                            <div className="flex gap-[5px]">
                                                <input className="bg-[#F3F4F6] w-[15px]" placeholder="₮"></input>
                                                <input value={amount} onChange={(event) => setAmount(event.target.value)} className="bg-[#F3F4F6]" placeholder="000.00"></input>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[5px] w-full ">
                                            <p>Category</p>
                                            <div>
                                                <select className="bg-[#F3F4F6] p-[12px] w-full rounded-[8px]"></select>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-around gap-[8px]">
                                            <div>
                                                <p>Date</p>
                                                <div className="p-[16px] bg-[#F3F4F6] rounded-[8px]">
                                                    <p>Oct 30, 2023</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Date</p>
                                                <div className="p-[16px] bg-[#F3F4F6] rounded-[8px]">
                                                    <p>4:15 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <button style={{background:exinc ? "blue" : "green",}} className="w-full btn btn-primary">Add Record</button>
                                </div>
                            </div>
                            <div className="right flex flex-col gap-[10px] px-[8px] py-[15px]">
                                <div>
                                    <p>Payee</p>
                                    <input className="bg-[#F3F4F6] p-[12px] w-full rounded-[8px]" placeholder="Write here"></input>
                                </div>
                                <div>
                                    <p>Note</p>
                                    <input value={description} onChange={(event) => setDescription(event.target.value)} className="bg-[#F3F4F6] p-[12px] w-full h-[340px] rounded-[8px]" placeholder="Write here"></input>
                                </div>
                            </div>
                            </div>
                    </div>
                </dialog>
        </div>
    )
}