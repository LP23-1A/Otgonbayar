export default function Carsoule() {
    return(
        <section className="w-[1240px] h-[900px]">
            <div className="relative">
                <div className="absolute">
                    <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className="absolute top-[550px] left-[20px] w-[598px] h-[252px] bg-white rounded-[12px]">
                    <div className="p-[40px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[16px]">
                            <button className="w-[100px] py-[5px] rounded-[6px] bg-[#4B6BFB] text-[white] ">Technology</button>
                            <p className="text-[36px]">Grid system for better Design User Interface</p>
                        </div>
                        <div>
                            <p className="text-[#97989F]">August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1240px] relative flex justify-end top-[850px]">
                <div className="w-[90px] flex gap-[9px]">
                    <button className="w-[40px] h-[40px] flex items-center justify-center border-2 rounded-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                        <path d="M8.5 16L1 8.5L8.5 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="w-[40px] h-[40px] flex items-center justify-center border-2 rounded-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                        <path d="M1 1L8.5 8.5L1 16" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}