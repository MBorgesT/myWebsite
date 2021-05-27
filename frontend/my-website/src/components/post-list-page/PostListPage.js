import React from 'react';
import PostList from './post-list/PostList';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './PostListPage.css';

import loadingGif from '../../assets/loading.gif';

import SideColumn from '../side-column/SideColumn';
import PostListModel from '../../models/PostListModel';
import PostStore from '../../stores/PostStore';

export default class PostListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postsPerPage: 6,
            postListModel: null
        };

        this.selectPage = this.selectPage.bind(this);
    }

    componentDidMount() {
        this.selectPage(1, null, this.props.match != null ? this.props.match.params.topicId : null);
    }

    componentWillReceiveProps(nextProps) {
        this.selectPage(1, null, nextProps.match.params.topicId);
    }

    async selectPage(pageIndex, scrollToRef, topicId) {
        let upperLimit = this.state.postListModel == null ? true : pageIndex <= this.state.postListModel.numberOfPages;
        if (upperLimit && pageIndex > 0) {
            this.setState({
                postsPerPage: this.state.postsPerPage,
                postListModel: null
            })

            let data, count;
            let postStore = new PostStore();
            try {
                if (topicId != null && topicId > 0) {
                    data = await postStore.getPostPageByTopic(topicId, this.state.postsPerPage, pageIndex);
                    count = await postStore.getPostCountByTopic(topicId);
                } else {
                    data = await postStore.getPostPage(this.state.postsPerPage, pageIndex);
                    count = await postStore.getPostCount();
                }
            } catch (e) {
                console.log(e);
                return;
            }

            const numberOfPages = Math.floor(count / this.state.postsPerPage) + 1;
            this.setState({
                postsPerPage: this.state.postsPerPage,
                postListModel: new PostListModel(data, count, pageIndex, numberOfPages)
            });

            if (scrollToRef != null) {
                window.scrollTo(0, scrollToRef.current.offsetTop);
            }
        }
    }

    render() {
        let content;
        if (this.state.postListModel != null) {
            content = (
                <PostList
                    postListPage={this}
                    selectPage={this.selectPage}
                />
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
                            <SideColumn topicId={this.props.match.params.topicId} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

