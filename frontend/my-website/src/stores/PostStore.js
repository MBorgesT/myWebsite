import axios from 'axios';

import AbstractStore from './AbstractStore';

export default class PostListStore extends AbstractStore {

	constructor() {
		super();
		this.apiUrl = this.backendUrl + 'post/';
	}

	async getPostPage(postsPerPage, page) {
		try {
			const promise = await axios.post( this.apiUrl + 'get_post_page/', {
				posts_per_page: postsPerPage,
				page: page
			})
			const data = promise.data;
			return data;
		} catch (e) {
			throw e;
		}
	}

	async getPostCount() {
		try {
			const promise = await axios.get( this.apiUrl + 'get_post_count/');
			const count = parseInt(promise.data);
			return count;
		} catch (e) {
			throw e;
		}
	}

}