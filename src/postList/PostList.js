import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostListItem from '../postListItem/postListItem';
import {setFilteredPostsAction} from '../store';

import './PostList.css';

function PostList({ posts,
                    // filteredPosts, 
                    // setFilteredPosts, 
                    filterText, 
                    handleRemove,
                    openEditModal }) {

    const dispatch = useDispatch();
    const filteredPosts = useSelector(state => state.filteredPosts);

    const postList = (arr) => {
        return arr.map(post => (
            <li key={post.id} className='wrapper'>
               <PostListItem 
                    post={post}
                    handleRemove={handleRemove}
                    openEditModal={openEditModal}
                    />
                    
            </li>
            
        ))}

    useEffect(() => {
        const filtered = posts.filter(post => (
            post.body.toLowerCase().includes(filterText.toLowerCase()) || (post.title.toLowerCase().includes(filterText.toLowerCase()))
        ))
        dispatch(setFilteredPostsAction(filtered));
    }, [posts, filterText])

    return (
        <div>
            <h3>All posts</h3>
            <div className='post-list-wrapper'>
                <ul className='post-list'>
                    {
                        postList(filteredPosts)
                    }
                </ul>
            </div>
        </div>  
    )
}

export default PostList;