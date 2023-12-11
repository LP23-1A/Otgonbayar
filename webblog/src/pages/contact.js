import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllBlogCard from "@/components/AllBlogCard";

export default function BlogPage() {
    return(
        <section className="flex flex-col justify-center items-center gap-[100px]">
            <Navbar/>
            <div className="w-[1240px]">
                <div>
                    <p className="text-[36px]">Contact us</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div>
                    <div>
                        <p>Address</p>
                        <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>313-332-8662
                        info@email.com</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}