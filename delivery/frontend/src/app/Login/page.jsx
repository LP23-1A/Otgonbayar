'use client'
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { Sign } from "crypto";

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const router = useRouter()

    const Signup = async () => {
        router.push("/Signup")
    }

    return(
        <div className="flex flex-col items-center gap-[70px]">
            <Topbar/>
            <div className="flex flex-col items-center gap-[48px] p-[32px]">
                <div className="text-[32px]">
                    <p>Нэвтрэх</p>
                </div>
                <div className="w-[250px]">
                    <div className="w-full py-[10px]">
                        <p className="text-[14px]">Имэйл</p>
                        <input 
                        className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                        type="text"
                        placeholder="Имэйл хаягаа оруулна уу"
                        />
                    </div>
                    <div className="w-full py-[10px]">
                        <p className="text-[14px]">Нууц үг</p>
                        <Box sx={{width: '25ch' }} variant="filled">
                        <FormControl sx={{ width: '25ch' }} variant="filled">
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
                        <p className="flex justify-end text-[#3F4145] text-[14px]">Нууц үг сэргээх</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-[32px]">
                    <button className="w-full rounded-[4px] py-[8px] bg-[#EEEFF2] text-[#1C20243D]">Нэвтрэх</button>
                    <p>Эсвэл</p>
                    <button onClick={Signup} className="w-full rounded-[4px] py-[8px] border-solid text-[#272727]">Бүртгүүлэх</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}