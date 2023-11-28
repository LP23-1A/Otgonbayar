import upwork from "../../public/logo-upwork.png";

export default function Info() {
    return(
        <section className="expmain">
            <div className="exptop flex justify-center">
        <div className="exp flex justify-between">
            <div>
                <img src={upwork.src} alt="" />
            </div>
        <div className="gap-y-4 flex flex-col">
            <h6 className="text-[20px]">Sr. Frontend Developer</h6>
            <ul className="flex flex-col gap-y-6 list-disc">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                <li>Sed quis justo ac magna.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
        </div>
        <div className="years">
            <p>Nov 2021 - Present</p>
        </div>
    </div>
    </div>
        </section>
    )
}