import axios from "axios"
import { useEffect, useState } from "react";
let api = "https://dev.to/api/articles?username=gereltuyamz";

const AllBlog = () => {
    const [data, setData] = useState([]);
    const get = async() => {
        let response = await axios.get(api)
    
        setData(response.data)
        console.log(response.data);
    }
    useEffect(() =>{
        get()
    },[])

    return (
        <div className="w-[1240px] flex flex-wrap justify-between gap-[20px]">
            {
                data.map((props) => {
                    return (
                        <div className="flex flex-col gap-[16px] w-[392px] h-[476px] rounded-xl border-2 p-[16px] "> 
                            <div>
                                <img className="rounded-lg bg-cover w-[360px] h-[240px]" src={props.social_image} alt="" /> 
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[16px]">
                                    <button className="w-fit p-1 px-3 text-indigo-500 bg-indigo-50 rounded-xl">{props.tag_list}</button>
                                    <p className="text-[24px] ">{props.title}</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">{props.readable_publish_date}</p> 
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllBlog