import Skillicons from "@/components/SkillsICON";

export default function Skill() {
    return(
        <section className="skillscontainer m-top-96 flex column justify-center bg-white">
            <div className="flex column gap10">
                <div className="flex justify-center">
                 <button className="btngray">Skills</button>   
                </div>
                <p className="flex justify-center">The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="technoicons flex wrap justify-between">
                <Skillicons/>
            </div>
        </section>
    )
}