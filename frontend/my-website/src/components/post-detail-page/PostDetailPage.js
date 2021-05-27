import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import SideColumn from '../side-column/SideColumn';
import DetailedPost from './detailed-post/DetailedPost';

import PostStore from '../../stores/PostStore';

import loadingGif from '../../assets/loading.gif';

export default class PostDetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.loadPost();
    }

    async loadPost() {
        const postStore = new PostStore();
        const postId = this.props.match.params.postId;
        let data;

        try {
            data = await postStore.getPostById(postId);
        } catch (e) {
            console.log(e);
            return;
        }
        debugger;

        this.setState({
            post: data
        });
    }

    render() {
        let content;
        if (this.state != null) {
            content = (
                <DetailedPost post={this.state.post} />
            )
        } else {
            content = (
                <Image className='loading' src={loadingGif} />
            )
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8}>
                            {content}
                        </Col>
                        <Col>
                            <SideColumn topicId={-1} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}