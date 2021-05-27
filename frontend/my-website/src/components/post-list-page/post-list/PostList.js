import React from 'react';
import PostPreview from '../post-preview/PostPreview';
import './PostList.css'
import MyPagination from '../pagination/MyPagination';

class PostList extends React.Component {

	render() {
		const list = this.props.postListPage.state.postListModel.postList;
		let elements = [];
		if (list) {
			for (let i = 0; i < list.length; i++) {
				elements.push(
					<PostPreview key={list[i].id} post={list[i]} />
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