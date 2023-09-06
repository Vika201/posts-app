import { useState } from 'react';

import './editModal.css';

function EditModal({ isEditing,
                    setIsEditing,
                    handleSave }) {

    const [editTitle, setEditTitle] = useState(isEditing.title);
    const [editBody, setEditBody] = useState(isEditing.body);

    const handleEditTitle = (e) => {
        setEditTitle(e.target.value);
    }

    const handleEditBody = (e) => {
        setEditBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // щоб форма відпрацьовувала належним чином
        handleSave(isEditing.id, editTitle, editBody);
        setIsEditing(null);
        
    }

    const handleCancel = () => {
        setIsEditing(null)
    }

    

    return (
    
        <div>
            {isEditing && (
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
