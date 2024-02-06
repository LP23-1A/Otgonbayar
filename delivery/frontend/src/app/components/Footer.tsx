import Facebook from "../icon/Facebook";
import Instagram from "../icon/Instagram";
import Twitter from "../icon/Twitter";
import LogoWhite from "../icon/LogoWhite";
import Background from "../icon/Background";
import { Box } from "@mui/material";

export default function Footer() {
    return(
        <Box sx={{ width:'1240px', display:'flex', flexDirection:'column', bgcolor:'#18BA51', gap:'40px', position:'relative', paddingY:'114px', paddingX:'120px' }}>
                <Box sx={{ position:'absolute', top:'0', left:'0' }}>
                    <Background/>
                </Box>
                <Box sx={{ display:'flex', justifyContent:'center', gap:'8px', color:'white', fontSize:'20px' }}>
                    <LogoWhite/>
                    <p>Food Delivery</p>
                </Box>
                <Box sx={{ display:'flex', justifyContent:'space-between', color:'white' }}>
                    <p>Нүүр</p>
                    <p>Холбоо барих</p>
                    <p>Хоолны цэс</p>
                    <p>Үйлчилгээний нөхцөл</p>
                    <p>Хүргэлтийн бүс</p>
                    <p>Нууцлалын бодлого</p>
                </Box>
                <Box sx={{ display:'flex', justifyContent:'center', gap:'18px' }}>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </Box>
                <hr />
                <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', color:'white', gap:'8px' }}>
                    <p>© 2024 Pinecone Foods LLC </p>
                    <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                </Box>
        </Box>
    )
}