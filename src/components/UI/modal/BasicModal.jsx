import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';


export default function BasicModal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyle>
          <TypographyStyle id="modal-modal-title" variant="h6" component="h2">
          </TypographyStyle>
          <TypographyStyle id="modal-modal-description">
          </TypographyStyle>
          {children}
        </BoxStyle>
      </Modal>
    </div>
  );
}

const BoxStyle = styled(Box)(() =>({
  "&":{
    position: "absolute" ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    height: "500px",
    backgroundColor: 'white',
    border: '2px solid green', 
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
  }
}))

const TypographyStyle = styled(Typography)(() =>({
  '&': {
    mt: 2
}}))
