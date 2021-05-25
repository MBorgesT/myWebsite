import axios from 'axios';

class PostListStore {

	static async getPostPage(postsPerPage, page) {
		try {
			const promise = await axios.post('http://localhost:8000/api/post/get_post_page/', {
				posts_per_page: postsPerPage,
				page: page
			})
			const data = promise.data;
			return data;
		} catch (e) {
			throw e;
		}
	}

	static async getPostCount() {
		try {
			const promise = await axios.get('http://localhost:8000/api/post/get_post_count/');
			const count = parseInt(promise.data);
			return count;
		} catch (e) {
			throw e;
		}
	}

}


export default PostListStore;