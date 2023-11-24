import Skillicons from "@/components/icons/SkillsICON";

export default function Skill() {
    return(
        <section className="skillscontainer my-[96px] flex flex-col justify-center bg-white">
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="px-5">Skills</p>
                    </button>   
                </div>
                <p className="flex justify-center">The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="technoicons flex flex-wrap justify-between">
                <Skillicons/>
            </div>
        </section>
    )
}