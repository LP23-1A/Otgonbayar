import AllBlog from "@/components/AllBlog";
import Carsoule from "@/components/Carsoule";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
        <Navbar/>
        <Carsoule/>
        <Trending/>
        <AllBlog/>
        <Footer/>
    </div>
  )
}
