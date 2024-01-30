'use client'
import * as React from 'react';
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
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
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Signup() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return(
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'80px' }}>
            <Topbar/>
            <Box sx={{ width:'370px', display:'flex', flexDirection:'column', alignItems:'center', gap:'48px', padding:'32px'}}>
                <Box sx={{fontSize:'32px'}}>
                    <p>Бүртгүүлэх</p>
                </Box>
                <Box sx={{width:'full'}}>
                    <Box sx={{width:'305px', paddingY:'10px'}}>
                        <p className="text-[14px]">Нэр</p>
                        <input 
                        className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                        type="text"
                        placeholder="Нэрээ оруулна уу"
                        />
                    </Box>
                    <Box sx={{paddingY:'10px'}}>
                        <p className="text-[14px]">И-мэйл</p>
                        <input 
                        className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                        type="text"
                        placeholder="И-мэйл хаягаа оруулна уу"
                        />
                    </Box>
                    <Box sx={{paddingY:'10px'}}>
                        <p className="text-[14px]">Нэр</p>
                        <input 
                        className=" w-full flex flex-col items-center py-[15px] px-[10px] bg-[#F7F7F8] rounded-[4px]"
                        type="text"
                        placeholder="Нэрээ оруулна уу"
                        />
                    </Box>
                    <Box sx={{paddingY:'10px'}}>
                        <p className="text-[14px]">Нууц үг</p>
                        <Box sx={{width: '25ch' }} variant="filled">
                        <FormControl sx={{ width: '305px' }} variant="filled">
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
                    </Box>
                    <Box sx={{paddingY:'10px'}}>
                        <p className="text-[14px]">Нууц үг давтах</p>
                        <Box sx={{width: '25ch' }} variant="filled">
                        <FormControl sx={{ width: '305px' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Нууц үгээ оруулна уу</InputLabel>
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
                    </Box>
                </Box>
                <Box sx={{ width:'full', display:'flex', flexDirection:'column', gap:'8px' }}>
                    <Box sx={{display:'flex', alignItems:'center'}} className='flex items-center'>
                        <Checkbox {...label} />
                        <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
                    </Box>
                    <button className="w-full rounded-[4px] py-[8px] bg-[#EEEFF2] text-[#1C20243D]">Бүртгүүлэх</button>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}