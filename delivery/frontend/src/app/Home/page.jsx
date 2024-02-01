import { Box, Stack } from "@mui/material";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Background from "../icon/Homebg";
import Fastdelivery from "../components/fastdelivery";
import SaleMeals from "../components/Salemeals";

export default function Home() {
    return(
        <Stack sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Topbar/>
            <Stack sx={{ width:'1440px', height:'788px', bgcolor:'#18BA51', position:'relative' }}>
                <Box sx={{position:'absolute'}}>
                    <Background/>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-around', position:'relative', margin:'120px'}}>
                    <Box sx={{ width:"385px", display:'flex', flexDirection:'column', gap:'23px', color:'white' }}>
                        <Box sx={{fontSize:'55px'}}>Pinecone Food delivery</Box>
                        <hr />
                        <Box sx={{fontSize:'22px'}}>Horem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
                    </Box>
                    <Box sx={{display:'flex', top:'30%'}}>
                        <Box sx={{width:'520px', height:'510px'}} ><img src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAgJ14nSS24E04nWC~uDFbmzKlF-IlRL8JniwjzlWwOyYDiAyfbPC5Bg0dLTMaym8PyNqEMrWWVtXyRWcZDWcr2XrBhMe2upyhQ5NMnncZudgYeXP38y751GVdPxHMqdUe~U~kTCSDt5OYlwlYNEBbTXJeDW-XPBED5DEdzIzRYINSyAJwhi6KoYVDlF4ru5EyLQwJab1DCbCtF7gQRSIi6khXM4TWhTu5ZuxzupiuaOoNO-Ytadxox73ZjPXNTw5BJXaO55a~c-4hisGfnmbYlh2v18x1otGkgTbDo~UZbLi8Jhzlma8hQob3c0iqRgwb9qtDjC5d5fCPyg~W8D0g__" alt="" /></Box>
                        <Box sx={{width:'220px', height:'220px', position:'absolute', right:'110px', top:'230px'}} ><img src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9M4eauP8jceRQpl7Mr1ozzxIyt-DJmW-dyVZUVwxInFydK9E~1WU6Fq~R0aYxVSpEa4LAQoO0RVO0Ec70Mcr-guoDunvniAszeYhV-AVhn~yeVj~LuhSTF8SpEh8i3Yo4ylcdtzhaBFBR-8oDcw1G1NG69T9ruY0AfFl1eoAw8gx1LHSxpG~5pgG~omUhNF5Bc1Hml2Ti~~D-WcWntqJ9bg~58ovuN9zsk-zuH8Z3uydfgY9~VlMyohyTbvzwxU1Dh-uPIRv8wV0nZHyTH~CzEY30BqTrk3ElAzp3U2X7k8S3IlE1ezPYl3WH5QiMSGcBXWPRsSIFhJAvVBf-h6Qg__" alt="" /></Box>
                    </Box>
                </Box>
            </Stack>
            <Stack sx={{display:'flex', flexDirection:'row', gap:'60px'}}>
                <Fastdelivery/>
            </Stack>
            <Stack sx={{display:'flex', flexDirection:'row', gap:'45px'}}>
                <SaleMeals/>
            </Stack>
            <Box sx={{marginTop:'200px'}}>
               <Footer/> 
            </Box>
        </Stack>
    )
}