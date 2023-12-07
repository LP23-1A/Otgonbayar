import BlogCard from "@/components/AllBlogCard";

export default function AllBlog() {
    return(
        <section className="w-[1240px] flex flex-col gap-[32px] mt-">
            <div className="flex flex-col gap-[32px]">
                <div>
                    <h6 className="text-[24px]">All Blog Post</h6>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-[20px] text-[12px]">
                        <button className="hover:text-[#D4A373]">All</button>
                        <button className="hover:text-[#D4A373]">Design</button>
                        <button className="hover:text-[#D4A373]">Travel</button>
                        <button className="hover:text-[#D4A373]">Fashion</button>
                        <button className="hover:text-[#D4A373]">Technology</button>
                        <button className="hover:text-[#D4A373]">Branding</button>
                    </div>
                    <button>View All</button>
                </div>
            </div>
            <div>
                <BlogCard/>
            </div>
        </section>
    )   
}