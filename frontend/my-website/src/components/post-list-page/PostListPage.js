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
        this.selectPage(1, this.props.match != null ? this.props.match.params.topicId : null);
    }

    componentWillReceiveProps(nextProps) {
        this.selectPage(1, nextProps.match.params.topicId);
    }

    async selectPage(pageIndex, topicId) {
        let upperLimit = this.state.postListModel == null ? true : pageIndex <= this.state.postListModel.numberOfPages;
        if (upperLimit && pageIndex > 0) {
            const selectedTopic = topicId != null ? topicId : this.props.match.params.topicId;

            this.setState({
                postsPerPage: this.state.postsPerPage,
                postListModel: null
            })

            let data, count;
            let postStore = new PostStore();
            try {
                if (selectedTopic != null && selectedTopic > 0) {
                    data = await postStore.getPostPageByTopic(selectedTopic, this.state.postsPerPage, pageIndex);
                    count = await postStore.getPostCountByTopic(selectedTopic);
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

            /*
            if (refCurrent != null) {
                window.scrollTo(0, refCurrent.offsetTop);
            }
            */
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

