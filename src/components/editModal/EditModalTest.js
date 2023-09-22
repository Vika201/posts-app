import { Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px'
}

function EditModal2() {
    const [open, setOpen] = useState(false);
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
                    <Box sx={style} >
                        <IconButton
                            sx={closeButtonStyle}
                            onClick={handleClose}
                            color='inherit'
                            arial-label='close'>
                            <CloseIcon />
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                            Create New Post
                        </Typography>                   
                        <TextField id="filled-basic" label="Title" variant="filled"/>
                        <TextField id="outlined-basic" label="Body" variant="outlined" multiline rows={4}/>
                        <Button variant="contained" endIcon={<SendIcon />} sx={{width: '100px', margin: '0 auto'}}>
                            Send
                        </Button>
                    </Box>
                
                </Modal>
        </div>
    )
}

export default EditModal2;