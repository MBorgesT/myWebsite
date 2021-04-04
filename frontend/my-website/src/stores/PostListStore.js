import axios from 'axios';


class PostListStore {
	static async getPosts(postsPerPage, page) {
		const promise = await axios.post('http://localhost:8000/api/posts/get_post_page/', {
			posts_per_page: postsPerPage,
			page: page
		})
		const data = promise.data;
		return data;
	}

	static async getPostCount() {
		const promise = await axios.get('http://localhost:8000/api/posts/get_post_count/');
		const count = parseInt(promise.data);
		return count;
	}
}


export default PostListStore;