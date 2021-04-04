import React from 'react';
import './Post.css';
import { Badge } from 'react-bootstrap';


class Post extends React.Component {
    constructor(props) {
        super(props);

        const post = this.props.post;
        this.state = {
            title: post.title,
            date: post.date,
            topic: post.topic_name,
            body: post.body,
        }
    }

    render() {
        return (
            <div className="post">
                <div className="title">{this.state.title}</div>
                <div className="date">
                    {this.state.date}
                    {' '}
                    <Badge variant="secondary">{this.state.topic}</Badge>
                </div>
                <div className="margin" />
                <div className="body">{this.state.body}</div>
            </div>
        );
    }
}


export default Post;