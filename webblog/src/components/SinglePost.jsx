
import user from "../../public/Image.png";
export default function Detail() {
    return(
        <section className="flex flex-col gap-[32px] w-[800px] mt-[100px] mb-[80px]">
            <div className="flex flex-col gap-[20px]">
                <div className="text-[36px]">
                    <p>The Impact of Technology on the Workplace: How Technology is Changing</p>
                </div>
                <div className="flex items-center gap-[24px] text-[#696A75]">
                    <div className="flex gap-[8px] items-center">
                        <img src={user.src} alt="" />
                        <p>Tracey Wilson</p>
                    </div>
                    <p>August 20, 2022</p>
                </div>
            </div>
            <div>
                <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1703462400&Signature=p2-wTBRyG8K6zRJfjU1zz~NezOtmZ64rAwmUINCPJeWwwNHBUnwIZR5Ijy3iSF1XHw6EXoTSIwC5NSZXWvOF0DqgUv682ZjRsWzhg8tmULyEjkq4C-OtVW~RoIbeQl5g97fWSKCEYQ5rFJk1dikgf16iO2DM2fm2GJY7nje4yyDATb1SRnS51I3728YxKAwVanSmGtLMBxRGsjeP3DnAQb0F8Fomj3xQw2BnMeGnZQvB-E9nufJImhgpL3gwsPSNpX9CjCGARxAbsUkb2ojiqTDOJBXbiub1MD4SArAil4Lo7c0iAiSztnaKeJkcIVL4WeOQNi4XGagPepQlQzYgUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="flex flex-col gap-[30px] text-[#3B3C4A]">
                <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
                <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="text-[24px] text-[#181A2A]">
                    <p>Research Your Destination</p>
                </div>
                <div className="flex flex-col text-[#3B3C4A] gap-[30px]">
                    <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="text-[24px] text-[#181A2A]">
                    <p>Plan Your Itinerary</p>
                </div>
                <div className="flex flex-col text-[#3B3C4A] gap-[30px]">
                    <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
                    <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                </div>
            </div>
        </section>
    )
}
