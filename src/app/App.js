import { useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';
import EditModal from '../editModal/editModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import FilteringPosts from '../filteringPosts/filteringPosts';
import { fetchPosts } from '../store/asyncActions/posts';
import Loader from '../loader/Loader';

function App() {

  const dispatch = useDispatch();

  const editingPost = useSelector(state => state.editingPost);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loader = loading ? <Loader /> 
                         : <PostList />

  return (
    <div className='app'>
      <PostAdder/>
      <FilteringPosts />

      {(editingPost !== null) && <EditModal />}
      
      {loader}
    </div> 
  );
}

export default App;
