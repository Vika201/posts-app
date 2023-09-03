import deleteItem from '../img/delete2.png';

import './postListItem.css';

function PostListItem({ post, 
                        handleRemove, 
                        openEditModal }) {

    return (
        <div>
            <div>
                <div className='post-title'>{post.title}</div> 
                <div className='post-body'>{post.body}</div> 
            </div>
            <button onClick={() => openEditModal(post.id)}>Edit</button>
            <button className='btn-delete'
                    onClick={() => handleRemove(post.id)}>
                <img src={deleteItem} alt='delete' />
            </button>
        </div>
    )
}

export default PostListItem;