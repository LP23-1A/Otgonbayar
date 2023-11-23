import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Portf() {
  return(
    <div className="body w-full flex flex-col items-center justify-center">
      <div className="container">
        <Navbar/>
        <Introduction/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Footer/>
      </div>
    </div>
  )
}