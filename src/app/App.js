import { useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';
import EditModal from '../editModal/editModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import FilteringPosts from '../filteringPosts/filteringPosts';
import { fetchPosts } from '../store/asyncActions/posts';

function App() {

  const dispatch = useDispatch();

  const editingPost = useSelector(state => state.editingPost);

  useEffect(() => {
    dispatch(fetchPosts());
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
