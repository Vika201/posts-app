import { useEffect } from 'react';
import PostListItem from '../postListItem/postListItem';

import './PostList.css';

function PostList({ posts,
                    setPost, 
                    filteredPosts, 
                    setFilteredPosts, 
                    filterText, 
                    handleRemove,
                    handleSave, 
                    openEditModal,
                    isEditing,
                    setIsEditing }) {

    const postList = (arr) => {
        return arr.map(post => (
            <li key={post.id} className='wrapper'>
               <PostListItem 
                    post={post}
                    isEditing={isEditing}
                    handleRemove={handleRemove}
                    handleSave={handleSave}
                    openEditModal={openEditModal}
                    
                    setIsEditing={setIsEditing} 
                    setPost={setPost} 
                    />
                    
            </li>
            
        ))}

    useEffect(() => {
        const filtered = posts.filter(post => (
            post.body.toLowerCase().includes(filterText.toLowerCase()) || (post.title.toLowerCase().includes(filterText.toLowerCase()))
        ))
        setFilteredPosts(filtered);
    }, [posts, filterText, setFilteredPosts])

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