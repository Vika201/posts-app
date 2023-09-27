import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveEditedBodyInPostAction,
  saveEditedTitleInPostAction,
  setEditingPostAction,
} from '../../store';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const EditModal = () => {
  const dispatch = useDispatch();
  const editingPost = useSelector((state) => state.editingPost);

  const [editTitle, setEditTitle] = useState(editingPost.title);
  const [editBody, setEditBody] = useState(editingPost.body);

  const handleEditTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEditBody = (e) => {
    setEditBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveEditedTitleInPostAction(editingPost.id, editTitle));
    dispatch(saveEditedBodyInPostAction(editingPost.id, editBody));
    dispatch(setEditingPostAction(null));
  };

  const handleClose = () => {
    dispatch(setEditingPostAction(null));
  };

  return (
    <Modal
      open={Boolean(editingPost)}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Editing Post
        </Typography>
        <TextField
          label="Title"
          variant="filled"
          value={editTitle}
          onChange={handleEditTitle}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="Body"
          variant="outlined"
          multiline
          rows={4}
          value={editBody}
          onChange={handleEditBody}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ width: '100px', mt: 2, mx: 'auto', display: 'block' }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
