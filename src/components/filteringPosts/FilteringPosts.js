import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilterTextAction } from '../../store';
import './FilteringPosts.css';

function FilteringPosts() {
    const dispatch = useDispatch();
    const filterText = useSelector(state => state.filterText);

    const searchingText = (e) => {
        dispatch(setFilterTextAction(e.target.value));
    }

    return (
        <div className='filtering-posts'>
            <input 
                type='text'
                placeholder='Searching posts'
                value={filterText}
                onChange={searchingText}
                name='seatchingPosts' />
        </div>
    )
}

export default FilteringPosts;