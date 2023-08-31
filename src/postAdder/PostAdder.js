import React, { useState } from 'react';

import './PostAdder.css';

function PostAdder({ create }) {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            userId: 10,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})

    }


    return(
    <form className='post-adder'>
        <h3>Create new post</h3>
        <div className='post-adder-wrapper'>
            <input  className='post-adder-title'
                    value={post.title}
                    type='text'
                    placeholder='Create a title for your post'
                    onChange={(e) => setPost({...post, title: e.target.value})}/>
            <input  className='post-adder-body'
                    value={post.body}
                    type='text'
                    placeholder='Create text for your post'
                    onChange={(e) => setPost({...post, body: e.target.value})}/>
            <button onClick={addNewPost}>Add Post</button>
        </div>
    </form>
    )
}

export default PostAdder;