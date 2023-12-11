import Carsoule from "@/components/Carsoule";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import AllBlogCard from "@/components/AllBlogCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
        <Navbar/>
        <Carsoule/>
        <Trending/>
        <AllBlogCard/>
        <Footer/>
    </div>
  )
}
