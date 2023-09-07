import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

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

const REMOVE_POST = '[Admin] Remove Post';
const CREATE_POST = '[Admin] Create Post';
const OPEN_EDIT_MODAL = '[Admin] Open Edit Modal';
// const SAVE_EDITED_POST = '[Admin] Save Edited Post';
// видалення
// створення
// 


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload,
                // filteredPosts: setFilteredPosts(action.payload, state.filterText)
            };
        case SET_FILTERED_POSTS:
            debugger;
            return {...state, filteredPosts: action.payload};
        case SET_FILTER_TEXT:
            return {...state, filterText: action.payload};
        case SET_EDITING_POST: {
            return {...state, editingPost: action.payload}
        }
        case REMOVE_POST: {
            const updatePosts = state.posts.filter(post => post.id !== action.payload);
            return {
                ...state,
                posts: updatePosts
                // filteredPosts: updatePosts
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
        // case SAVE_EDITED_POST: {
        //     const postIndex = state.posts.findIndex(post => post.id === action.payload);
        //     if(postIndex !== -1){
        //         const updatedPost = {
        //             ...state.posts[postIndex],
        //             title: newTitle,
        //             body: newBody
        //         };
        //     const updatedPosts = [...state.posts];
        //     updatedPosts[postIndex] = updatedPost;
            
        //     return {
        //         ...state,
        //         posts: updatedPosts
        //     }
            // }
        // }
            // видалення
            default: 
            return state;
    }
}

//set state
export const setPostsAction = (payload) => ({type: SET_POSTS, payload});
export const setFilteredPostsAction = (payload) => ({type: SET_FILTERED_POSTS, payload}); 
export const setFilterTextAction = (payload) => ({type: SET_FILTER_TEXT, payload}); 
export const setEditingPostAction = (payload) => ({type: SET_EDITING_POST, payload});
//functions
export const deletePostAction = (payload) => ({type: REMOVE_POST, payload});
export const createPostAction = (payload) => ({type: CREATE_POST, payload});
export const openEditModalAction = (payload) => ({type: OPEN_EDIT_MODAL, payload});
// export const saveEditPostAction = (payload) => ({type: SAVE_EDITED_POST, payload});

export const store = createStore(reducer, composeWithDevTools());