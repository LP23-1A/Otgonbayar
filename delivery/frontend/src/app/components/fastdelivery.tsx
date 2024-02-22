import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import RiceBowlRoundedIcon from '@mui/icons-material/RiceBowlRounded';
import { Box, Stack } from '@mui/material';

const mockdata = [
    {
        icon: <ImportContactsTwoToneIcon/>,
        title: "Хүргэлтийн төлөв хянах",
        text: 'Захиалга бэлтгэлийн явцыг хянах',
    },
    {
        icon: <AccessTimeRoundedIcon/>,
        title: "Шуурхай хүргэлт",
        text: 'Захиалга бэлтгэлийн явцыг хянах'
    },
    {
        icon: <RiceBowlRoundedIcon/>,
        title: "Эрүүл, баталгаат орц",
        text: 'Захиалга бэлтгэлийн явцыг хянах'
    },
    {
        icon: <ImportContactsTwoToneIcon/>,
        title: "Хоолны өргөн сонголт",
        text: 'Захиалга бэлтгэлийн явцыг хянах'
    },
]

export default function fastdelivery() {
    return(
        mockdata.map((props) =>{
            return(
                <Box sx={{marginTop:'150px', padding:'16px', border:1, borderRadius:'16px', borderColor:'#D6D8DB', boxShadow:4}}>
                    <Box sx={{color:"#18BA51", padding:'15px'}} >
                        {props.icon}
                    </Box>
                    <Box sx={{marginTop:'15px'}}>
                        <Box sx={{fontSize:'18px', fontWeight:700}} >{props.title}</Box>
                        <Box sx={{fontSize:'14px', fontWeight:400}} >{props.text}</Box>
                    </Box>
                </Box>
                
            )
        })
    )
}