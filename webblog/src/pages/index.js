import AllBlog from "@/components/AllBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
        <Navbar/>
        <Trending/>
        <AllBlog/>
        <div>
          <button className="flex items-center border-solid border-2 border-[#a3a4a9] rounded-[12px] py-[12px] px-[20px] ">Read More</button>
        </div>
        <Footer/>
    </div>
  )
}
