import React from 'react';
import './PostPreview.css';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PREVIEW_SIZE = 350;

export default class PostPreview extends React.Component {
    constructor(props) {
        super(props);

        const post = this.props.post;
        this.state = {
            id: post.id,
            title: post.title,
            date: post.date,
            topic: post.topic_name,
            body: post.body,
        }
    }

    treatBody(text) {
        if (text.length <= PREVIEW_SIZE) {
            return text;
        } else {
            let preview = text.slice(0, PREVIEW_SIZE);
            let list = preview.split(' ');
            list.pop();
            return (list.join(' ') + '...');
        }
    }

    render() {
        return (
            <div className='post'>
                <div className='title'>{this.state.title}</div>
                <div className='date'>
                    {this.state.date}
                    {' '}
                    <Badge variant='secondary'>{this.state.topic}</Badge>
                </div>
                <div className='body'>{this.treatBody(this.state.body)}</div>
                <div className='button'>
                    <Link to={'/post/' + this.state.id}>
                        <Button variant="primary">Read More</Button>
                    </Link>
                </div>
            </div>
        );
    }
}
