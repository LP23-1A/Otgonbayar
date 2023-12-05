import BlogCard from "@/components/AllBlogCard";

export default function AllBlog() {
    return(
        <section className="w-[1240px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[32px]">
                <div>
                    <h6 className="text-[24px]">All Blog Post</h6>
                </div>
                <div className="flex items-center justify-between">
                    <ul className="flex gap-[20px]">
                        <li className="text-[12px] text-[#D4A373]">All</li>
                        <li className="text-[12px]">Design</li>
                        <li className="text-[12px]">Travel</li>
                        <li className="text-[12px]">Fashion</li>
                        <li className="text-[12px]">Technology</li>
                        <li className="text-[12px]">Branding</li>
                    </ul>
                    <button>View All</button>
                </div>
            </div>
            <div>
                <BlogCard/>
            </div>
        </section>
    )   
}