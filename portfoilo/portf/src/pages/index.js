import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";

export default function Portf() {
  return(
    <div className="body">
      <div className="container">
        <Navbar/>
        <Introduction/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
      </div>
    </div>
  )
}