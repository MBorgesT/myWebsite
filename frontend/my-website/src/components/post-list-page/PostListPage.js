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
        this.selectPage(1);
    }

    async selectPage(pageIndex, scrollToRef) {
        let upperLimit = this.state.postListModel == null ? true : pageIndex <= this.state.postListModel.numberOfPages;
        if (upperLimit && pageIndex > 0) {
            let data, count;
            try {
                data = await PostStore.getPostPage(this.state.postsPerPage, pageIndex);
                count = await PostStore.getPostCount();
            } catch (e) {
                console.log(e);
                return;
            }

            const numberOfPages = Math.floor(count / this.state.postsPerPage) + 1;
            this.setState({
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
                    <Row className="justify-content-md-center">
                        <Col sm={12} md={12} lg={8}>
                            {content}
                        </Col>
                        <Col>
                            <SideColumn />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

