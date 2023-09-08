// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';
import EditModal from '../editModal/editModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setPostsAction, setFilteredPostsAction, setFilterTextAction, deletePostAction, createPostAction, openEditModalAction } from '../store';
import FilteringPosts from '../filteringPosts/filteringPosts';

function App() {
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);
  const filteredPosts = useSelector(state => state.filteredPosts);
  const filterText = useSelector(state => state.filterText);
  const editingPost = useSelector(state => state.editingPost);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          
          dispatch(setPostsAction(data));
          // dispatch(setFilteredPostsAction(data));
        }
        
          )
      .catch(error => console.error('Error fetch data:', error))
  }, []);


  const createPost = (newPost) => {
    dispatch(createPostAction(newPost));
  }

  const handleRemove = (id) => {
    dispatch(deletePostAction(id));
    console.log('delete:', id)
}

// edit posts
     
const openEditModal = (id) => {
  dispatch(openEditModalAction(id));
}

const searchingText = (e) => {
  dispatch(setFilterTextAction(e.target.value));
}



  return (
    <div className='app'>
      <PostAdder create={createPost}/>
      <FilteringPosts />

      {(editingPost !== null) && <EditModal 
                  openEditModal={openEditModal} /> 
}
      
      <PostList 
              posts={posts}
              filteredPosts={filteredPosts}
              // setFilteredPosts={setFilteredPosts}
              handleRemove={handleRemove}
              filterText={filterText}
              openEditModal={openEditModal}
              editingPost={editingPost}
              />
    </div> 
  );
}

export default App;

// редагувати
// пошук