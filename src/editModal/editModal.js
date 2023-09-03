import { useState } from 'react';

function EditModal({ setIsEditing, 
                    post, 
                    setPost,
                    handleSave }) {
                        
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
        handleSave(post.id, editTitle, editBody);
        const updatedPost = { ...post, title: editTitle, body: editBody};
        setPost(updatedPost);
        setIsEditing(false);
        
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit post</h3>
            <textarea value={editTitle}
                        onChange={handleEditTitle}/>
            <textarea value={editBody}
                        onChange={handleEditBody}/>
            <div>
                <button type='submit'>Save</button>
                <button onClick={handleCancel}>
                    Cancel</button>
            </div>
      </form>
    )
}

export default EditModal;

