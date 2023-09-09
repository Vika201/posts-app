import { useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';
import EditModal from '../editModal/editModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setPostsAction } from '../store';
import FilteringPosts from '../filteringPosts/filteringPosts';
import PostsService from '../services/postsService';

function App() {
  const postsService = new PostsService();

  const dispatch = useDispatch();

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
      
      <PostList />
    </div> 
  );
}

export default App;
