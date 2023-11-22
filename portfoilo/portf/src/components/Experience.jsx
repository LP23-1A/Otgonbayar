import upwork from "../../public/logo-upwork.png";

export default function Experience() {
    return(
        <section className="experiencecontainer m-top-96 flex column justify-center">
            <div className="flex column gap10">
                <div className="flex justify-center">
                    <button className="btngray">
                        <p className="p-20">Experience</p>
                    </button>
                </div>
                <p className="flex justify-center">Here is a quick summary of my most recent experiences:</p>
            </div>
            <div className="flex column gap48">
                <div className="exptop flex justify-center">
                <div className="exp flex justify-between">
                    <div>
                        <img src={upwork.src} alt="" />
                    </div>
                <div className="gap16 flex column">
                    <h6>Sr. Frontend Developer</h6>
                    <ul className="flex column gap24">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                <div>
                    <p>Nov 2021 - Present</p>
                </div>
            </div>
            </div>
            <div className="exptop flex justify-center">
                <div className="exp flex justify-between">
                    <div>
                        <img src={upwork.src} alt="" />
                    </div>
                <div className="gap16 flex column">
                    <h6>Team Lead</h6>
                    <ul className="flex column gap24">
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                <div>
                    <p>Jul 2017 - Oct 2021</p>
                </div>
            </div>
            </div>
            <div className="exptop flex justify-center">
                <div className="exp flex justify-between">
                    <div>
                        <img src={upwork.src} alt="" />
                    </div>
                <div className="gap16 flex column">
                    <h6>Full Stack Developer</h6>
                    <ul className="flex column gap24">
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                <div>
                    <p>Dec 2015 - May 2017</p>
                </div>
            </div>
            </div>
            </div>

        </section>
    )
}