import React from 'react';
import Post from '../post/Post';
import PostListStore from '../../stores/PostListStore';
import { Pagination } from 'react-bootstrap';
import './PostList.css'


class PostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			postsPerPage: 6,
			postList: [],
			postCount: 0,
			page: 1,
		};
	}

	componentDidMount() {
		this.handlePaginationClick(this.state.postsPerPage, this.state.page);
	}

	async handlePaginationClick(page) {
		const data = await PostListStore.getPosts(this.state.postsPerPage, page);
		const count = await PostListStore.getPostCount();
		this.setState({
			postsPerPage: this.state.postsPerPage,
			postList: data,
			postCount: count,
			page: page,
		})
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

		//const pageNumber = Math.floor(this.state.postCount / this.state.postsPerPage) + 1;
		const pageNumber = 5;

		return (
			<div className="postList">
				{elements}

				<div className="pagination">
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						{pageNumber <= 5 ?
							Array.from(Array(pageNumber).keys()).map((_, x) => {
								return (
									<Pagination.Item
										key={x + 1}
										onClick={() => this.handlePaginationClick(x + 1)}
										active={this.state.page === x + 1}
									>
										{x + 1}
									</Pagination.Item>
								);
							})
						: null}
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</div>
			</div>
		);
	}
}


export default PostList;