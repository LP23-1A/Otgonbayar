import { Box, Stack } from "@mui/material"
import egg from "../../../public/egg.png";

const mockdata = [
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮'
    },
    {
        img: egg,
        name:'Зайрмаг',
        saleprice:'4,800₮',
        mainprice:'6,800₮'
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮'
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        saleprice:'14,800₮',
        mainprice:'16,800₮'
    },
]

export default function SaleMeals() {
    return(
        mockdata.map((props) => {
            return(
                <Stack sx={{width:'283px', height:'186px', display:'flex', flexDirection:'column', gap:'5px', marginTop:'100px'}}>
                    <Box>
                        <img src={props.img.src} alt="" />
                    </Box>
                    <Box sx={{paddingLeft:'15px'}}>
                        <Box sx={{fontSize:'18px', fontWeight:700}}>{props.name}</Box>
                        <Box sx={{display:'flex', gap:'15px', fontSize:'18px'}}>
                            <Box sx={{color:'#18BA51', fontWeight:700}} >{props.saleprice}</Box>
                            <Box>{props.mainprice}</Box>
                        </Box>
                    </Box>
                </Stack>
            )
        })
    )
}