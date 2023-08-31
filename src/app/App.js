// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import PostList from '../postList/PostList';
import PostAdder from '../postAdder';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterText, setFilterText] = useState('');


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
    sorterPosts(updatePosts)
  }

  const handleRemove = (id) => {
    const updatePosts = posts.filter(post => post.id !== id);
    setPosts(updatePosts);
}


  return (
    <div className='app'>
     <PostAdder create={createPost}/>
     <input type='text'
            placeholder='Search'
            value={filterText}
            onChange={e => setFilterText(e.target.value)}/>
     <PostList posts={posts}
                filteredPosts={filteredPosts}
                setFilteredPosts={setFilteredPosts}
                handleRemove={handleRemove}
                filterText={filterText}

                />
    </div> 
  );
}

export default App;

// редагувати
// пошук