import { useDispatch } from 'react-redux';
import EditModal from '../editModal/editModal';
import deleteItem from '../img/delete2.png';
import { deletePostAction, openEditModalAction } from '../store';

import './postListItem.css';

function PostListItem({ post }) {

    const dispatch = useDispatch();
    
    const openEditModal = (id) => {
        dispatch(openEditModalAction(id));
        }

        const handleRemove = (id) => {
            dispatch(deletePostAction(id));
        }

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