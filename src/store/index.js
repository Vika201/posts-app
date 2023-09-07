import { createStore } from "redux";

const defaultState = {
    posts: [],
    filteredPosts: [],
    filterText: '',
    editingPost: null
}

const SET_POSTS = '[Admin] Set Posts';
const SET_FILTERED_POSTS = '[Admin] Set Filtered Posts';
const SET_FILTER_TEXT = '[Admin] Set Filter Text';
const SET_EDITING_POST = '[Admin] Set Editing Post';
// видалення
// створення
// 


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload};
        case SET_FILTERED_POSTS:
            return {...state, filteredPosts: action.payload};
        case SET_FILTER_TEXT:
            return {...state, filterText: action.payload};
        case SET_EDITING_POST: {
            return {...state, editingPost: action.payload}
        }
            // видалення
            default: 
            return state;
    }
}

export const setPostsAction = (payload) => ({type: SET_POSTS, payload});
export const setFilteredPostsAction = (payload) => ({type: SET_FILTERED_POSTS, payload}); 
export const setFilterTextAction = (payload) => ({type: SET_FILTER_TEXT, payload}); 
export const setEditingPostAction = (payload) => ({type: SET_EDITING_POST, payload}); 

export const store = createStore(reducer);