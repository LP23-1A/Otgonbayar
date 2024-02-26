import { Box, Stack, TextField } from "@mui/material";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailLockIcon from '@mui/icons-material/MailLock';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile() {
    return(
        <Stack>
            <Topbar/>
            <Stack sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box></Box>
                <Box sx={{display:'flex', flexDirection:"column", alignItems:"center", gap:'20px'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:'10px', bgcolor:'#e6e6e6 ', paddingX:"40px", paddingY:'5px', borderRadius:'3px'}}>
                        <Box><AccountCircleOutlinedIcon/></Box>
                            <TextField
                            required
                            id="standard-required"
                            label="Таны нэр"
                            defaultValue="УгтахБаяр"
                            variant="standard"
                            />
                        <Box sx={{color:"#18BA51"}}><CreateOutlinedIcon/></Box>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', gap:'10px', bgcolor:'#e6e6e6 ', paddingX:"40px", paddingY:'5px', borderRadius:'3px'}}>
                        <Box><LocalPhoneOutlinedIcon/></Box>
                            <TextField
                            required
                            id="standard-required"
                            label="Утасны дугаар"
                            defaultValue="88883345"
                            variant="standard"
                            />
                        <Box sx={{color:"#18BA51"}}><CreateOutlinedIcon/></Box>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', gap:'10px', bgcolor:'#e6e6e6 ', paddingX:"40px", paddingY:'5px', borderRadius:'3px'}}>
                        <Box><MailLockIcon/></Box>
                            <TextField
                            required
                            id="standard-required"
                            label="Имэйл хаяг"
                            defaultValue="Ugtakhbayr@gmail.com"
                            variant="standard"
                            />
                        <Box sx={{color:"#18BA51"}}><CreateOutlinedIcon/></Box>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Stack>
            <Footer/>
        </Stack>
    )
}