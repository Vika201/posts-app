import { useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import EditModal from '../editModal/EditModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import FilteringPosts from '../filteringPosts/FilteringPosts';
import { fetchPosts } from '../../store/asyncActions/posts';
import Loader from '../loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import MyModal from '../postAdder/PostAdderModal';
import EditModal2 from '../postAdder/PostAdderModal';


function App() {

  const dispatch = useDispatch();

  const editingPost = useSelector(state => state.editingPost);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loader = loading ? <Loader /> 
                         : <PostList />

  const posts = (editingPost !== null) && <EditModal />
  

  return (
    <>
    <h1>All Posts</h1>
    {/* <FilteringPosts /> */}
    <PostList />
    {posts}
   </>
    // <div>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<PostList />} />
    //     <Route path='/create' element={<PostAdder />} />
    //   </Routes>
    //   {posts}
    // </div>
    
    // <div className='app'>
    //   <PostAdder/>
    //   <FilteringPosts />

    //   {(editingPost !== null) && <EditModal />}
      
    //   {loader}
    // </div> 
  );
}

export default App;
