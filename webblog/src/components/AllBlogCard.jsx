const data = [
    {
        img: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        category: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022",
    },
]

const AllBlog = () => {
    return (
        <div className="w-[392px] h-[476px] rounded-xl border-2 p-[16px]">
            {
                data.map((props) => {
                    return (
                        <div className="flex flex-col gap-[16px] "> 
                            <div>
                                <img className="rounded-lg bg-cover" src={props.img} alt="" /> 
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[16px]">
                                    <button className="w-fit p-1 px-3 text-indigo-500 bg-indigo-50 rounded-xl">{props.category}</button>
                                    <p className="text-[24px] ">{props.title}</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">{props.date}</p> 
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