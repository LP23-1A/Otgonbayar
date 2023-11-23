import Expcol from "@/components/Expcol";

export default function Experience() {
    return(
        <section className="experiencecontainer my-[96px] flex flex-col justify-center">
            <div className="flex flex-col gap-y-5">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="p-20">Experience</p>
                    </button>
                </div>
                <p className="flex justify-center">Here is a quick summary of my most recent experiences:</p>
            </div>
            <div className="flex flex-col">
                <Expcol/>
                <Expcol/>
                <Expcol/>
            </div>
        </section>
    )
}