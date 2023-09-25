import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostListItem from '../postListItem/PostListItem';
import {setFilteredPostsAction} from '../../store';

import './PostList.css';
import { List, ListItem } from '@mui/material';
import PostAdderModal from '../postAdder/PostAdderModal';

function PostList() {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const filteredPosts = useSelector(state => state.filteredPosts);
    const filterText = useSelector(state => state.filterText);

    const postList = (arr) => {
        return arr.map(post => (
            <ListItem key={post.id} alignItems='center'>
                <PostListItem post={post} />
            </ListItem>
          
            
        ))}

    useEffect(() => {
        const filtered = posts.filter(post => (
            post.body.toLowerCase().includes(filterText.toLowerCase()) || (post.title.toLowerCase().includes(filterText.toLowerCase()))
        ))
        dispatch(setFilteredPostsAction(filtered));
    }, [posts, filterText])

    return (
        <div>
            <PostAdderModal />
            <div className='post-list-wrapper'>
                <List sx={{ width: '100%', maxWidth: 1000 , bgcolor: 'background.paper' }}>
                    {
                            postList(filteredPosts)
                        }
                </List>
            </div>
        </div>  
    )
}

export default PostList;