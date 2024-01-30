import Logo from "../icon/Logo";
import Search from "../icon/Search";
import Bag from "../icon/Bag";
import Profile from "../icon/Profile";
import { Box, Stack } from "@mui/material";

export default function Navbar() {
    return(
        <Box sx={{ width:"1240px", display:'flex', justifyContent:'space-between', padding:'20px' }}>
            <Stack sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'24px' }}>
                <div><Logo/></div>
                <Box sx={{ display:'flex', gap:'20px' }}>
                    <button>НҮҮР</button>
                    <button>ХООЛНЫ ЦЭС</button>
                    <button>ХҮРГЭЛТИЙН БҮС</button>
                </Box>
            </Stack>
            <Stack sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', paddingX:'16px', paddingY:'8px', borderRadius:'8px', borderColor:'black', border:'1' }} className="border">
                    <Search/>
                    <input className="outline-none text-[16px] bg-white" type="text" placeholder="Хайх"/>
                </Box>
                <Box sx={{ display:'flex', alignItems:'center', gap:'8px', paddingX:'16px', paddingY:'8px' }}>
                    <Bag/>
                    <p>Сагс</p>
                </Box>
                <Box sx={{ display:'flex', alignItems:'center', gap:'8px', paddingX:'16px', paddingY:'8px' }}>
                    <Profile/>
                    <p>Нэвтрэх</p>
                </Box>
            </Stack>
        </Box>
    )
}