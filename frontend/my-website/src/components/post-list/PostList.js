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
			numberOfPages: 1,
		};
	}

	componentDidMount() {
		this.handlePaginationClick(this.state.postsPerPage, this.state.page);
	}

	async handlePaginationClick(page) {
		let data, count;
		try {
			data = await PostListStore.getPosts(this.state.postsPerPage, page);
			count = await PostListStore.getPostCount();
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

		let pagItems = []
		if (this.state.numberOfPages <= 5) {
			for (let i = 1; i <= this.state.numberOfPages; i++) {
				pagItems.push(
					<Pagination.Item
						key={i}
						onClick={() => this.handlePaginationClick(i)}
						active={this.state.page === i}
					>
						{i}
					</Pagination.Item>
				)
			}
		} else if (this.state.page <= 3) {
			for (let i = 1; i <= 4; i++) {
				pagItems.push(
					<Pagination.Item
						key={i}
						onClick={() => this.handlePaginationClick(i)}
						active={this.state.page === i}
					>
						{i}
					</Pagination.Item>
				)
			}

			pagItems.push(<Pagination.Ellipsis />)
			pagItems.push(
				<Pagination.Item
					key={this.state.numberOfPages}
					onClick={() => this.handlePaginationClick(this.state.numberOfPages)}
					active={this.state.page === this.state.numberOfPages}
				>
					{this.state.numberOfPages}
				</Pagination.Item>
			)
		} else if (this.state.page >= this.state.numberOfPages - 2) {
			pagItems.push(
				<Pagination.Item
					key={1}
					onClick={() => this.handlePaginationClick(1)}
					active={this.state.page === 1}
				>
					{1}
				</Pagination.Item>
			)
			pagItems.push(<Pagination.Ellipsis />)

			for (let i = this.state.numberOfPages - 3; i <= this.state.numberOfPages; i++) {
				pagItems.push(
					<Pagination.Item
						key={i}
						onClick={() => this.handlePaginationClick(i)}
						active={this.state.page === i}
					>
						{i}
					</Pagination.Item>
				)
			}
		} else {
			pagItems.push(
				<Pagination.Item
					key={1}
					onClick={() => this.handlePaginationClick(1)}
					active={this.state.page === 1}
				>
					{1}
				</Pagination.Item>
			)
			pagItems.push(<Pagination.Ellipsis />)

			pagItems.push(
				<Pagination.Item
					key={this.state.page - 1}
					onClick={() => this.handlePaginationClick(this.state.page - 1)}
				>
					{this.state.page - 1}
				</Pagination.Item>
			)
			pagItems.push(
				<Pagination.Item
					key={this.state.page}
					active
				>
					{this.state.page}
				</Pagination.Item>
			)
			pagItems.push(
				<Pagination.Item
					key={this.state.page + 1}
					onClick={() => this.handlePaginationClick(this.state.page + 1)}
				>
					{this.state.page + 1}
				</Pagination.Item>
			)

			pagItems.push(<Pagination.Ellipsis />)
			pagItems.push(
				<Pagination.Item
					key={this.state.numberOfPages}
					onClick={() => this.handlePaginationClick(this.state.numberOfPages)}
					active={this.state.page === this.state.numberOfPages}
				>
					{this.state.numberOfPages}
				</Pagination.Item>
			)

		}

		return (
			<div className="postList">
				{elements}

				<div className="pagination">
					<Pagination>
						<Pagination.Prev />
						{pagItems}
						<Pagination.Next />
					</Pagination>
				</div>
			</div>
		);
	}
}


export default PostList;