import React from 'react';
import './Post.css';
import { Badge } from 'react-bootstrap';


class Post extends React.Component {
    constructor(props) {
        super(props);

        const post = this.props.post;
        this.parentState = {
            title: post.title,
            date: post.date,
            topic: post.topic_name,
            body: post.body,
        }
    }

    render() {
        return (
            <div className="post">
                <div className="title">{this.parentState.title}</div>
                <div className="date">
                    {this.parentState.date}
                    {' '}
                    <Badge variant="secondary">{this.parentState.topic}</Badge>
                </div>
                <div className="margin" />
                <div className="body">{this.parentState.body}</div>
            </div>
        );
    }
}


export default Post;