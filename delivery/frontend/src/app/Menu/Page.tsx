import { Box, Button, Stack } from "@mui/material";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import SaleMeals from "../components/Salemeals";
import MainDish from "../components/Maindish";
import Salad from "../components/Salad";

export default function Menu() {
    return(
        <Stack sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Topbar/>
            <Stack sx={{width:'1200px'}}>
                <Box sx={{width:'full', display:"flex", justifyContent:"space-between", marginY:"20px"}}>
                    <Button sx={{paddingX:"80px", borderColor:'gray', color:'black'}} variant="outlined">Breakfast </Button>
                    <Button sx={{paddingX:"80px", borderColor:'gray', color:'black'}} variant="outlined">Soup</Button>
                    <Button sx={{paddingX:"80px", borderColor:'gray', color:'black'}} variant="outlined">Main course</Button>
                    <Button sx={{paddingX:"80px", borderColor:'gray', color:'black'}} variant="outlined">Dessert</Button>
                </Box>
                <Stack sx={{display:"flex", gap:"80px", marginBottom:"120px"}}>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <SaleMeals/>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:"space-between"}}>
                        <MainDish/>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <Salad/>
                    </Box>
                </Stack>
            </Stack>
            <Footer/>
        </Stack>
    )
}