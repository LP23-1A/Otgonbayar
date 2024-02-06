'use client'
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Stack } from "@mui/material";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Folder, Visibility, VisibilityOff } from "@mui/icons-material";
import Profile from "../icon/Profile";
import { useRouter } from "next/navigation";

export default function LoginModal() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const Signup = async () => {
        router.push("/Signup")
    }
    const Forget = async () => {
        router.push("/forgetpass")
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
    return(
            <Stack sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                <Profile/>
                <Button onClick={handleOpen}>Нэвтрэх
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                <Box sx={style}>
                    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'48px', padding:'32px'}}>
                        <Box sx={{ fontSize:'32px' }}>
                            <p>Нэвтрэх</p>
                        </Box>
                        <Box sx={{ width:'250px' }}>
                            <Box sx={{ width:'full', paddingY:'10px', fontSize:'14px' }}>
                                <p>Имэйл</p>
                                <input 
                                className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                                type="text"
                                placeholder="Имэйл хаягаа оруулна уу"
                                />
                            </Box>
                            <Box sx={{ width:'full', paddingY:'10px', fontSize:'14px' }}>
                                <p>Нууц үг</p>
                                <Box sx={{width:'250px'}}>
                                <FormControl sx={{ width: '250px' }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Нууц үг</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                </Box>
                                <Box sx={{ display:'flex', justifyContent:'end', fontSize:'14px', color:'#3F4145' }}>
                                    <button onClick={Forget}>Нууц үг сэргээх</button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width:'250px', display:'flex', flexDirection:'column', alignItems:'center', gap:"32px" }}>
                            <button className="w-full rounded-[4px] py-[8px] bg-[#EEEFF2] text-[#1C20243D]">Нэвтрэх</button>
                            <p>Эсвэл</p>
                            <button onClick={Signup} className="w-full rounded-[4px] py-[8px] border-solid text-[#272727]">Бүртгүүлэх</button>
                        </Box>
                    </Box>
                    </Box>
                </Modal>
            </Stack>

    )
}