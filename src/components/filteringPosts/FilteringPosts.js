import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilterTextAction } from '../../store';

import SearchIcon from '@mui/icons-material/Search'
import './FilteringPosts.css';

function FilteringPosts() {
    const dispatch = useDispatch();
    const filterText = useSelector(state => state.filterText);

    const searchingText = (e) => {
        dispatch(setFilterTextAction(e.target.value));
    }

    return (
        <TextField 
            sx={{width: '80%', maxWidth: 800, margin: '0 auto'}}
            placeholder='Search'
            variant='outlined'
            size='small'
            fullWidth
            value={filterText}
            onChange={searchingText}
            InputProps={{
                endAdornment: (
                    <SearchIcon />
                )
            }}/>
      
    )
}

export default FilteringPosts;