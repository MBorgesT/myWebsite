import React from 'react';
import Post from '../post/Post';
import './PostList.css'
import MyPagination from '../pagination/MyPagination';

class PostList extends React.Component {

	render() {
		const list = this.props.postListPage.state.postListModel.postList;
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
				<div>
					<MyPagination
						postListPage={this.props.postListPage}
						selectPage={this.props.selectPage}
					/>
				</div>
			</div>
		);
	}
}


export default PostList;