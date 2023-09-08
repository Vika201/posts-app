import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveEditedBodyInPostAction, saveEditedTitleInPostAction, setEditingPostAction } from '../store';

import './editModal.css';

function EditModal() {

    const dispatch = useDispatch();
    const editingPost = useSelector(state => state.editingPost);

    const [editTitle, setEditTitle] = useState(editingPost.title);
    const [editBody, setEditBody] = useState(editingPost.body);

    

    const handleEditTitle = (e) => {
       setEditTitle(e.target.value);
    }

    const handleEditBody = (e) => {
        setEditBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // щоб форма відпрацьовувала належним чином
        dispatch(saveEditedTitleInPostAction(editingPost.id, editTitle));
        dispatch(saveEditedBodyInPostAction(editingPost.id, editBody));
        dispatch(setEditingPostAction(null));
        
    }

    const handleCancel = () => {
        dispatch(setEditingPostAction(null));
    }

    

    return (
    
        <div>
            {editingPost && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' 
                                onClick={handleCancel}>&times;</span>
                        <input value={editTitle}
                                onChange={handleEditTitle} />
                        <input value={editBody}
                                onChange={handleEditBody} />
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default EditModal;
