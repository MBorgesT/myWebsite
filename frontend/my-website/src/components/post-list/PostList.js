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
			page: this.state.page,
		})
	}

	render() {
		const list = this.state.postList;
		let elements = [];
		if (list) {
			for (let i = 0; i < list.length; i++) {
				elements.push(
					<Post post={list[i]} />
				);
				elements.push(<hr />);
			}
		}

		const pageNumber = Math.floor(this.state.postCount / this.state.postsPerPage) + 1;
		

		return (
			<div className="postList">
				{elements}

				<div className="pagination">
					
				</div>

				<div className="pagination">
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</div>
			</div>
		);
	}
}


export default PostList;