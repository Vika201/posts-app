import EditModal from '../editModal/editModal';
import deleteItem from '../img/delete2.png';

import './postListItem.css';

function PostListItem({ post, 
                        setPost,
                        handleRemove,
                        handleSave, 
                        openEditModal,
                        isEditing,
                        setIsEditing,
                         }) {

    return (
        <div>
            <div>
                <div className='post-title'>{post.title}</div> 
                <div className='post-body'>{post.body}</div> 
            </div>
            <EditModal isEditing={isEditing === post.id}
                        setIsEditing={setIsEditing} 
                        post={post} 
                        setPost={setPost}
                        handleSave={handleSave}
                        openEditModal={openEditModal}/>
            <button onClick={() => openEditModal(post.id)}>Edit</button>
            <button className='btn-delete'
                    onClick={() => handleRemove(post.id)}>
                <img src={deleteItem} alt='delete' />
            </button>
        </div>
    )
}

export default PostListItem;