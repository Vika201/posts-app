import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { deletePostAction, openEditModalAction } from '../../store';
import { List, ListItem } from '@mui/material';

export default function PostListItemTest({ post }) {

    const dispatch = useDispatch();
    
    const openEditModal = (id) => {
        console.log('open', id)
        dispatch(openEditModalAction(id));
    }

    const handleRemove = (id) => {
        dispatch(deletePostAction(id));
    }

  return (
      <div>
        <Card sx={{ maxWidth: '80%', margin: '0 auto'}} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {post.title}
                </Typography>
                <Typography variant="body2" >
                {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined"
                        onClick={() => openEditModal(post.id)}>
                            Edit
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} size="small"
                        onClick={() => handleRemove(post.id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
      </div>
    
  );
}