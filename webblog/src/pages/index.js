import AllBlog from "@/components/AllBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-[]">
        <Navbar/>
        <Trending/>
        <AllBlog/>
        <Footer/>
    </div>
  )
}
