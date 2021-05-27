import React from 'react';

import { Badge } from 'react-bootstrap';

import './DetailedPost.css';

export default class DetailedPost extends React.Component{

    render() {
        const post = this.props.post;
        return (
            <div className='post'>
                <div className='title'>{post.title}</div>
                <div className='date'>
                    {post.date}
                    {' '}
                    <Badge variant='secondary'>{post.topic_name}</Badge>
                </div>
                <div className='body'>{post.body}</div>
            </div>
        );
    }

}