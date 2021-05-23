import React from 'react';
import Post from '../post/Post';
import PostStore from '../../../stores/PostStore';
import './PostList.css'
import MyPagination from '../pagination/MyPagination';

class PostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			postsPerPage: 6,
			postList: [],
			postCount: 0,
			page: 1,
			numberOfPages: 1,
		};

		this.paginationRef = React.createRef();
	}

	componentDidMount() {
		this.handlePageClick(this.state.page);
	}

	async handlePageClick(page) {
		if (page <= this.state.numberOfPages && page >= 0) {
			let data, count;
			try {
				data = await PostStore.getPosts(this.state.postsPerPage, page);
				count = await PostStore.getPostCount();
			} catch (e) {
				console.log(e);
				return;
			}

			const numberOfPages = Math.floor(count / this.state.postsPerPage) + 1;
			this.setState({
				postsPerPage: this.state.postsPerPage,
				postList: data,
				postCount: count,
				page: page,
				numberOfPages: numberOfPages,
			});

			window.scrollTo(0, this.paginationRef.current.offsetTop);
		}
	}

	render() {
		const list = this.state.postList;
		let elements = [];
		if (list) {
			for (let i = 0; i < list.length; i++) {
				elements.push(
					<Post key={list[i].id} post={list[i]} />
				);
				elements.push(<hr />);
			}
		}

		return (
			<div className="postList">
				{elements}
				<div ref={this.paginationRef}>
					<MyPagination parent={this} handlePageClick={this.handlePaginationClick} />
				</div>
			</div>
		);
	}
}


export default PostList;