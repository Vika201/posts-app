import { setPostsAction } from ".."

export const fetchPosts = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch(setPostsAction(json)))

    }
}