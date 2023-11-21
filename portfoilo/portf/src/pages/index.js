import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";

export default function Portf() {
  return(
    <div className="body">
          <div className="container">
      <Navbar/>
      <Introduction/>
      <About/>
    </div>
    </div>
  )
}