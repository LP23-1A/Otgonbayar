import { Box, Stack } from "@mui/material";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import OrderDetail from "../components/OrderDetail";

export default function Order() {
    return(
        <Stack>
            <Topbar/>
            <Stack sx={{display:"flex", }}>
                <Box>
                    <Box>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            <p>Алхам 1</p>
                            <p>Хаягийн мэдээлэл оруулах</p>
                            <p>Хүлээгдэж байна</p>
                        </Box>
                    </Box>
                    <Box>
                        <OrderDetail/>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            <p>Алхам 2</p>
                            <p>Захиалга баталгаажуулах</p>
                            <p>Хүлээгдэж байна</p>
                        </Box>
                    </Box>
                    <Box></Box>
                </Box>
            </Stack>
            <Footer/>
        </Stack>
    )
}