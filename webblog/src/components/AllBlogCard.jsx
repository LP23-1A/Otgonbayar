import axios from "axios"
import { useEffect, useRef, useState } from "react";
let api = "https://dev.to/api/articles";
import Link from "next/link";

const AllBlog = () => {
    const [data, setData] = useState([])
    const initData = useRef([])
    const All = () => setData(initData.current)
    const get = async() => {
        let response = await axios.get(api)
        initData.current = response.data
        setData(response.data)
        console.log(response.data)
    }

    const [firstData, setFirstData] = useState(9)

    const ReadMore = () =>{
        setFirstData((adddata) => adddata + 3 )
    }

    const filter = (name) => setData(() => initData.current.filter((el) => el.tags === name))
    useEffect(() =>{
        get()
    },[])

    return (
        <section className="w-full flex flex-col gap-[32px] ">
        <div className="flex flex-col gap-[32px]">
            <div className="max-sm:px-[32px]">
                <h6 className="text-[24px]">All Blog Post</h6>
            </div>
            <div className="flex items-center justify-between max-sm:hidden">
                <div className="flex gap-[20px] text-[12px]">
                    <button className="hover:text-[#D4A373]" onClick={All} >All</button>
                    <button className="hover:text-[#D4A373]" onClick={() => filter('webdev')} >Webdev</button>
                    <button className="hover:text-[#D4A373]" onClick={() => filter('programming')} >Programming</button>
                    <button className="hover:text-[#D4A373]" onClick={() => filter('nextjs')} >Nextjs</button>
                    <button className="hover:text-[#D4A373]" onClick={() => filter('Technology')} >Technology</button>
                    <button className="hover:text-[#D4A373]" onClick={() => filter('Branding')} >Branding</button>
                </div>
                <button>View All</button>
            </div> 
        </div>
        <div className="flex flex-wrap justify-between gap-[20px] max-sm:px-[32px]">
            {
                data.slice(0, firstData).map((props) => {
                    return (
                        <Link href={`/Blog/${props.id}`}>
                        <div className="flex flex-col gap-[16px] w-[392px] h-[476px] rounded-xl border-2 p-[16px] "> 
                            <div>
                                <img className="rounded-lg bg-cover w-[360px] h-[240px]" src={props.cover_image} alt="" /> 
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[16px]">
                                    <button className="w-fit p-1 px-3 text-indigo-500 bg-indigo-50 rounded-xl">{props.tags}</button>
                                    <p className="text-[24px] ">{props.title}</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">{props.readable_publish_date}</p> 
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
        <div className="flex justify-center max-sm:hidden">
            <button onClick={ReadMore} className="flex items-center border-solid border-2 border-[#a3a4a9] rounded-[12px] py-[12px] px-[20px] text-[#696A75]">Read More</button>
        </div>
    </section>

    )
}

export default AllBlog