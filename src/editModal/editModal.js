import { useState } from 'react';

import './editModal.css';

function EditModal({ isEditing,
                    setIsEditing, 
                    post, 
                    setPost,
                    handleSave,
                    openEditModal }) {

    const [editTitle, setEditTitle] = useState(post.title);
    const [editBody, setEditBody] = useState(post.body);

    const handleEditTitle = (e) => {
        setEditTitle(e.target.value);
    }

    const handleEditBody = (e) => {
        setEditBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // щоб форма відпрацьовувала належним чином
        const updatedPost = handleSave(post.id, editTitle, editBody);
        // const updatedPost = {...post, title: editTitle, body: editBody};
        setPost(updatedPost);
        openEditModal(null);
        console.log('handleSubmit:', post)
        
    }

    const handleCancel = () => {
        openEditModal(null);
        console.log('cancel', isEditing)
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

//     <form onSubmit={handleSubmit}>
    //         <h3>Edit post</h3>
    //         <textarea value={editTitle}
    //                     onChange={handleEditTitle}/>
    //         <textarea value={editBody}
    //                     onChange={handleEditBody}/>
    //         <div>
    //             <button type='submit'>Save</button>
    //             <button onClick={handleCancel}>
    //                 Cancel</button>
    //         </div>
    //   </form>