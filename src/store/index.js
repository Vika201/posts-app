import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { setFilteredPosts } from '../store/utils';
import thunk from 'redux-thunk';

const defaultState = {
    posts: [],
    filteredPosts: [],
    filterText: '',
    editingPost: null,
    loading: true
}

const ADD_ALL_POSTS = 'Add All Posts';
const SET_POSTS = '[Admin] Set Posts';
const SET_FILTERED_POSTS = '[Admin] Set Filtered Posts';
const SET_FILTER_TEXT = '[Admin] Set Filter Text';
const SET_EDITING_POST = '[Admin] Set Editing Post';

const REMOVE_POST = '[Admin] Remove Post';
const CREATE_POST = '[Admin] Create Post';
const OPEN_EDIT_MODAL = '[Admin] Open Edit Modal';

const SAVE_EDITED_TITLE_IN_POST = '[Admin] Save Edited Title in Post';
const SAVE_EDITED_BODY_IN_POST = '[Admin] Save Edited Body in Post';


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_POSTS: {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }
        case SET_POSTS:
            return {
                ...state, 
                posts: action.payload,
                loading: false
                // filteredPosts: setFilteredPosts(action.payload, state.filterText)
            };
        case SET_FILTERED_POSTS:
            return {
                ...state, 
                filteredPosts: action.payload};
        case SET_FILTER_TEXT:
            return {...state, filterText: action.payload,
                // filteredPosts: setFilteredPosts(state.posts, action.payload)
            };
        case SET_EDITING_POST: {
            return {
                ...state, 
                editingPost: action.payload}
        }
        case REMOVE_POST: {
            const updatePosts = state.posts.filter(post => post.id !== action.payload);
            return {
                ...state,
                posts: updatePosts
            }
        }
        case CREATE_POST: {
            const updatePosts = [action.payload, ...state.posts];
            return {
                ...state,
                posts: updatePosts
            }
        }
        case OPEN_EDIT_MODAL: {
            const postFinded = state.posts.find(post => post.id === action.payload);
            return {
                ...state,
                editingPost: postFinded
            }
        }
        case SAVE_EDITED_TITLE_IN_POST: {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if(postIndex !== -1){
                const updatedPost = {
                    ...state.posts[postIndex],
                    title: action.payload.title
                };
            const updatedPosts = [...state.posts];
            updatedPosts[postIndex] = updatedPost;
            return {
                        ...state,
                        posts: updatedPosts
                    }
        }
    }
        case SAVE_EDITED_BODY_IN_POST: {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if(postIndex !== -1){
                const updatedPost = {
                    ...state.posts[postIndex],
                    body: action.payload.body
                };
            const updatedPosts = [...state.posts];
            updatedPosts[postIndex] = updatedPost;
            return {
                        ...state,
                        posts: updatedPosts
                    }
        }
        }
            // видалення
            default: 
            return state;
    }
}
export const addAllPostsAction = (payload) => ({type: ADD_ALL_POSTS, payload})
//set state
export const setPostsAction = (payload) => ({type: SET_POSTS, payload});
export const setFilteredPostsAction = (payload) => ({type: SET_FILTERED_POSTS, payload}); 
export const setFilterTextAction = (payload) => ({type: SET_FILTER_TEXT, payload}); 
export const setEditingPostAction = (payload) => ({type: SET_EDITING_POST, payload});
//functions
export const deletePostAction = (payload) => ({type: REMOVE_POST, payload});
export const createPostAction = (payload) => ({type: CREATE_POST, payload});
export const openEditModalAction = (payload) => ({type: OPEN_EDIT_MODAL, payload});

export const saveEditedTitleInPostAction = (id, title) => ({type: SAVE_EDITED_TITLE_IN_POST, payload: {id, title}});
export const saveEditedBodyInPostAction = (id, body) => ({type: SAVE_EDITED_BODY_IN_POST, payload: {id, body}});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

