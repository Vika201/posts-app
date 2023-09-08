import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilterTextAction } from '../store';
// import '.filteringPosts.css';

function FilteringPosts() {
    const dispatch = useDispatch();
    const filterText = useSelector(state => state.filterText);

    const searchingtext = (e) => {
        dispatch(setFilterTextAction(e.target.value));
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Searching posts'
                value={filterText}
                onChange={searchingtext}/>
        </div>
    )
}

export default FilteringPosts;