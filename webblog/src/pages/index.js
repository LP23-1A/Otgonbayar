import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Navbar/>
        <Trending/>
    </div>
  )
}
