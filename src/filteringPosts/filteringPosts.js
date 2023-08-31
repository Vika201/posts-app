import { useState } from 'react';
import PostListItem from '../postListItem/postListItem';
// import '.filteringPosts.css';

function FilteringPosts({ filteredPosts, handleRemove }) {
    const [filterText, setFilterText] = useState('');

    return (
        <div>
            <input 
                type='text'
                placeholder='Searching posts'
                value={filterText}
                onChange={e => setFilterText(e.target.value)}/>
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.id}>
                        <PostListItem post={post}
                                    handleRemove={handleRemove}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilteringPosts;