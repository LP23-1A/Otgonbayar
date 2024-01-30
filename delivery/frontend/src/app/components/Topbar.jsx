import Logo from "../icon/Logo";
import Search from "../icon/Search";
import Bag from "../icon/Bag";
import Profile from "../icon/Profile";
import { Box, Stack } from "@mui/material";

export default function Navbar() {
    return(
        <section className="w-[1240px] flex justify-between p-[20px]">
            <Stack sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'24px' }}>
                <div><Logo/></div>
                <Box sx={{ display:'flex', gap:'20px' }}>
                    <button>НҮҮР</button>
                    <button>ХООЛНЫ ЦЭС</button>
                    <button>ХҮРГЭЛТИЙН БҮС</button>
                </Box>
            </Stack>
            <Stack sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px' }} className="border border-[#000000] border-1 py-[8px] px-[16px] rounded-[8px]">
                    <Search/>
                    <input className="outline-none text-[16px] bg-white" type="text" placeholder="Хайх"/>
                </Box>
                <Box sx={{ display:'flex', alignItems:'center', gap:'8px' }} className="py-[8px] px-[16px]">
                    <Bag/>
                    <p>Сагс</p>
                </Box>
                <Box sx={{ display:'flex', alignItems:'center', gap:'8px' }} className="py-[8px] px-[16px]">
                    <Profile/>
                    <p>Нэвтрэх</p>
                </Box>
            </Stack>
        </section>
    )
}