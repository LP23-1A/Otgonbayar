import BlogCard from "@/components/AllBlogCard";

export default function AllBlog() {
    return(
        <section className="w-[1240px] flex flex-col gap-[32px] mt-">
            <div className="flex flex-col gap-[32px]">
                <div>
                    <h6 className="text-[24px]">All Blog Post</h6>
                </div>
                <div className="flex items-center justify-between">
                    <ul className="flex gap-[20px] text-[12px]">
                        <li className="text-[#D4A373]">All</li>
                        <li>Design</li>
                        <li>Travel</li>
                        <li>Fashion</li>
                        <li>Technology</li>
                        <li>Branding</li>
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