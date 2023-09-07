import { createStore } from "redux";

const defaultState = {
    posts: [],
    filteredPosts: [],
    filterText: '',
    editingPost: null
}

const SET_POSTS = '[Admin] Set Posts';
const SET_FILTERED_POSTS = '[Admin] Set Filtered Posts';
const SET_FILTERED_TEXT = '[Admin] Set Filtered Text';
const SET_EDITING_POST = '[Admin] Set Editing Post';
// видалення
// створення
// 


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload};
        // видалення
            default: 
            return state;
    }
}

export const setPostsAction = (payload) => ({ type: SET_POSTS, payload});
const setFilteredPosts = (payload) => {} 

export const store = createStore(reducer);