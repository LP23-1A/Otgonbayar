import { Box, Stack } from "@mui/material"
import egg from "../../../public/egg.png";

const mockdata = [
    {
        img: egg,
        name:'Өглөөний хоол',
        mainprice:'16,800₮',
    },
    {
        img: egg,
        name:'Зайрмаг',
        mainprice:'6,800₮',
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        mainprice:'16,800₮',
    },
    {
        img: egg,
        name:'Өглөөний хоол',
        mainprice:'16,800₮',
    },
]

export default function MainDish() {
    return(
        mockdata.map((props) => {
            return(
                <Stack sx={{ width:'283px', height:'186px', display:'flex', flexDirection:'column', gap:'5px', marginTop:'100px'}}>
                    <Box>
                        <img src={props.img.src} alt="" />
                    </Box>
                    <Box sx={{paddingLeft:'15px'}}>
                        <Box sx={{fontSize:'18px', fontWeight:700}}>{props.name}</Box>
                        <Box sx={{display:'flex', gap:'15px', fontSize:'18px', color:'#18BA51', fontWeight:700}}>
                            <Box>{props.mainprice}</Box>
                        </Box>
                    </Box>
                </Stack>
            )
        })
    )
}