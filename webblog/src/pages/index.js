import Carsoule from "@/components/Carsoule";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import AllBlogCard from "@/components/AllBlogCard";

export default function Home() {
  return (
    <div className="max-sm:w-[600px] w-[1240px] flex flex-col m-auto items-center gap-[100px]">
        <Navbar/>
        <Carsoule/>
        <Trending/>
        <AllBlogCard/>
        <Footer/>
    </div>
  )
}
