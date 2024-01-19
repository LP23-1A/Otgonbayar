import Eye from "@/icon/Eye";
import Arrow from "@/icon/ArrowDropDown";
import { useEffect, useState } from "react";
import axios from "axios";

const RecCat = [
    {
        text: "Food & Drinks",
    },
    {
        text: "Shopping",
    },
    {
        text: "Housing",
    },
    {
        text: "Transportation",
    },
    {
        text: "Vehicle",
    },
    {
        text: "Life & Entertainment",
    },
    {
        text: "Communication, PC",
    },
    {
        text: "Financial expenses",
    },
    {
        text: "Investments",
    },
    {
        text: "Income",
    },
    {
        text: "Others",
    },
]

const API = "http://localhost:3001/category/category"

export default function RecCategory() {
    const [name, setName] = useState([])

    const handler = async () => {
        let res = await axios.get(API)
        setName(res.data)
        console.log('data', res.data);
    }
    useEffect( () =>{
        handler()
    })
    return( 
        name.map((el) => {
            return(
            <div key={el} className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                    <Eye/>
                    <p>{el.name}</p>
                </div>
                <p><Arrow/></p>
            </div>
            )
        })
    )
}