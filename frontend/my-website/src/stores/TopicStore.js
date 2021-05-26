import axios from 'axios';

import AbstractStore from './AbstractStore';

export default class TopicStore extends AbstractStore {

	constructor() {
		super();
		this.apiUrl = this.backendUrl + 'topic/';
	}

	async getAllTopics() {
		try {
			const promise = await axios.get( this.apiUrl );
			const data = promise.data;
            return data;
		} catch (e) {
			throw e;
		}
	}

}