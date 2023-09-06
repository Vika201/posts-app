// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';
import EditModal from '../editModal/editModal';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterText, setFilterText] = useState('');
// edit posts
  const [isEditing, setIsEditing] = useState(null);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          sorterPosts(data);
          setFilteredPosts(data);
        }
        
          )
      .catch(error => console.error('Error fetch data:', error))
  }, []);

  const sorterPosts = (arr) => {
    const sortPosts = arr.sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortPosts)
  }

  const createPost = (newPost) => {
    const updatePosts = [...posts, newPost];
    sorterPosts(updatePosts);
    setPosts(updatePosts);
  }

  const handleRemove = (id) => {
    const updatePosts = posts.filter(post => post.id !== id);
    setPosts(updatePosts);
    setFilteredPosts(updatePosts);
    console.log('delete:', id)
}

// edit posts
     
const openEditModal = (id) => {
  const postFinded = posts.find(post => post.id === id)
  setIsEditing(postFinded);
}

const handleSave = (postId, newTitle, newBody) => {
  const postIndex = posts.findIndex(post => post.id === postId);

  if(postIndex !== -1) {
    const updatedPost = {
      ...posts[postIndex],
      title: newTitle,
      body: newBody,
    };

    const updatedPosts = [...posts];
    updatedPosts[postIndex] = updatedPost;

    setPosts(updatedPosts);
  }
}



  return (
    <div className='app'>
     <PostAdder create={createPost}/>
     <input type='text'
            placeholder='Search'
            value={filterText}
            onChange={e => setFilterText(e.target.value)}/>

      {(isEditing !== null) && <EditModal 
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  handleSave={handleSave}
                  openEditModal={openEditModal} /> 
}
      
      <PostList posts={posts}
              filteredPosts={filteredPosts}
              setFilteredPosts={setFilteredPosts}
              handleRemove={handleRemove}
              filterText={filterText}
              openEditModal={openEditModal}
              isEditing={isEditing}
              />
    </div> 
  );
}

export default App;

// редагувати
// пошук