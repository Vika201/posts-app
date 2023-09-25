import { Button, createSvgIcon, IconButton, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../store";

import './PostAdderModal.css';


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

const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

function PostAdderModal() {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const createPost = (newPost) => {
        dispatch(createPostAction(newPost));
      }

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            userId: 10,
            id: Date.now()
        }
        createPost(newPost);
        setPost({title: '', body: ''})

    }

    return (
        <div className="btn-add-post">
            <Button
                variant="contained"
                endIcon={<PlusIcon />}
                
                onClick={handleOpen}>Add Post</Button>
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
                            aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                            Create New Post
                        </Typography>                   
                        <TextField 
                            id="filled-basic" 
                            label="Title" 
                            variant="filled"
                            value={post.title}
                            onChange={(e) => setPost({...post, title: e.target.value})}
                            />
                        <TextField 
                            id="outlined-basic" 
                            label="Body" 
                            variant="outlined" 
                            multiline 
                            rows={4}
                            value={post.body}
                            onChange={(e) => setPost({...post, body: e.target.value})}
                            />
                        <Button 
                            variant="contained" 
                            endIcon={<SendIcon />} 
                            sx={{
                                width: '100px', 
                                margin: '0 auto'}}
                            onClick={addNewPost}>
                            Send
                        </Button>
                    </Box>
                
                </Modal>
        </div>
    )
}

export default PostAdderModal;