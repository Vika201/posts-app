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
import PostsService from '../services/postsService';

function App() {
  const postsService = new PostsService();

  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);
  const filteredPosts = useSelector(state => state.filteredPosts);
  const filterText = useSelector(state => state.filterText);
  const editingPost = useSelector(state => state.editingPost);

  useEffect(() => {
    postsService.getAllPosts()
    .then(data => dispatch(setPostsAction(data)));
  }, []);

  return (
    <div className='app'>
      <PostAdder/>
      <FilteringPosts />

      {(editingPost !== null) && <EditModal />}
      
      <PostList 
              posts={posts}
              filteredPosts={filteredPosts}
              // setFilteredPosts={setFilteredPosts}
              filterText={filterText}
              editingPost={editingPost}
              />
    </div> 
  );
}

export default App;

// редагувати
// пошук