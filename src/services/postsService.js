 
const _BaseApi = 'https://jsonplaceholder.typicode.com/posts';

class PostsService {

    getResource = async(url) => {
        try {
            let res = await fetch(url);

            if(!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
    
            return await res.json();
        } catch (error) {
            console.error('Error fetch data:', error);
        }
     
    }

    getAllPosts = () => {
        return this.getResource(_BaseApi)
    }

}



export default PostsService;

