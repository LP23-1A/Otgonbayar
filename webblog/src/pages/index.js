import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="body w-[100%]">
      <div className="container flex flex-col items-center">
        <Navbar/>
        <Trending/>
      </div>
    </div>
  )
}
