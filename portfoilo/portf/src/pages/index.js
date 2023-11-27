import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Portf() {
    const [isDark, setIsDark] = useState(false)
    const Darktheme = () => {
      setIsDark(!isDark)
    }
  return(
    <div className={`body w-[100%] flex flex-col items-center justify-center" ${isDark && `black-theme bg-black`}`} >
      <div className={`"container" ${isDark && `bg-black`}`}>
        <Navbar Darktheme={Darktheme} isDark={isDark}/>
        <Introduction/>
        <section className="abouttheme">
          <About/> 
        </section>
        <Skills/>
        <Experience/>
        <Work/>
        <Footer/>
      </div>
    </div>
  )
}