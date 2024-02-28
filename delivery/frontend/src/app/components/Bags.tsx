import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Сагс</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display:"flex", alignItems:"center", gap:"150px"}}>
            <ArrowBackIosIcon/>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{display:"flex", justifyContent:"center", fontWeight:"700"}}>
              Таны сагс
            </Typography>
          </Box>
          <Box sx={{marginY:"20px"}}>
            <hr />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingY:"30px" }}>
            <Box>
              <p>Нийт төлөх дүн</p>
            </Box>
            <Box sx={{bgcolor:"#18BA51", borderRadius:"5px"}}>
              <Button sx={{color:"white", paddingX:"70px", paddingY:"10px"}}>Захиалах</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}