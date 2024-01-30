import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function ForgetPass() {
    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'70px'}}>
            <Topbar/>
            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'48px', padding:'32px' }}>
                <Box sx={{ fontSize:'32px' }}>
                    <p>Нууц үг сэргээх</p>
                </Box>
                <Box sx={{width:'250px', paddingY:'10px', fontSize:'14px' }}>
                    <p>Имэйл</p>
                    <input
                    className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                    type="text"
                    placeholder="Имэйл хаягаа оруулна уу"
                    />
                </Box>
                <Box sx={{ width:'250px', borderRadius:'4px', bgcolor:'#EEEFF2' }}>
                    <button className="w-full rounded-[4px] py-[8px] border-solid text-[#1C20243D]">Бүртгүүлэх</button>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}