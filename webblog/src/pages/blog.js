import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllBlogCard from "@/components/AllBlogCard";

export default function BlogPage() {
    return(
        <section className="flex flex-col justify-center items-center gap-[100px]">
            <Navbar/>
            <AllBlogCard/>
            <Footer/>
        </section>
    )
}