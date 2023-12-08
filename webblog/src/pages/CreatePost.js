import { useState } from "react"

export default function CreatePost() {
    const [values, inputValue] = useState([])
    console.log(values);
    return(
        <div className="w-1240px flex justify-center">
            <div className="flex flex-col gap-[5px]">
            <input className="border2" type="text " value={values} onChange={(e) => inputValue(e.target.value)} />
            <input className="border2" type="text " value={values} onChange={(e) => inputValue(e.target.value)} />
            <input className="border2" type="text " value={values} onChange={(e) => inputValue(e.target.value)} />
            <input className="border2" type="text " value={values} onChange={(e) => inputValue(e.target.value)} />
            </div>
        </div>
    )
}