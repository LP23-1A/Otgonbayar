'use client'
import axios from "axios"
import { useState } from "react"

const API = "http://localhost:3001/category/category"

export default function AddCategory() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const handler = async () => {
        let res = await axios.post(API, { name : name, description : description})
        console.log(res, 'res')
    }
    return(
        <div>
            <button className="btn btn-primary w-full" onClick={()=>document.getElementById('my_modal_2').showModal()}>+ Add Category</button>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Add Category</h3>
            <div className="flex justify-around">
                <div>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <input value={name} onChange={(event) => setName(event.target.value)} className="p-[12px] bg-[#F3F4F6] rounded-[8px]" placeholder="name"></input>
                    <input value={description} onChange={(event) => setDescription(event.target.value)} className="p-[12px] bg-[#F3F4F6] rounded-[8px]" placeholder="description"></input>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[30px]">
                <button onClick={handler} className="btn btn-success text-white w-full">Add Category</button>
            </div>
        </div>
        </dialog>
        </div>
    )
}