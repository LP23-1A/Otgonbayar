import { Box, Stack } from "@mui/material"
import egg from "../../../public/egg.png";

const mockdata = [
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮',
        percent: "20%",
    },
    {
        img: egg,
        name:'Зайрмаг',
        saleprice:'4,800₮',
        mainprice:'6,800₮',
        percent: "20%",
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮',
        percent: "20%",
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮',
        percent: "20%",
    },
]

export default function SaleMeals() {
    return(
        mockdata.map((props) => {
            return(
                <Stack sx={{ width:'283px', height:'186px', display:'flex', flexDirection:'column', gap:'5px', marginTop:'40px'}}>
                    <Box sx={{position:'absolute'}}>
                        <img src={props.img.src} alt="" />
                    </Box>
                    <Box sx={{marginTop:'200px', paddingLeft:'15px'}}>
                        <Box sx={{fontSize:'18px', fontWeight:700}}>{props.name}</Box>
                        <Box sx={{display:'flex', gap:'15px', fontSize:'18px'}}>
                            <Box sx={{color:'#18BA51', fontWeight:700}} >{props.saleprice}</Box>
                            <Box>{props.mainprice}</Box>
                        </Box>
                    </Box>
                    <Box sx={{position:'relative', left:'210px', bottom:'230px', width:'60px', height:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box sx={{paddingX:'15px', paddingY:'5px', bgcolor:'#18BA51', color:'white', border:'1', borderRadius:'100px'}}>{props.percent}</Box>
                    </Box>
                </Stack>
            )
        })
    )
}