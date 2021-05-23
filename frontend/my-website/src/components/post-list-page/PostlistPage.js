import React from 'react';
import PostList from './post-list/PostList';
import { Container, Row, Col } from 'react-bootstrap';

import SideColumn from '../side-column/SideColumn';

class PostlistPage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8}>
                            <PostList />
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

export default PostlistPage;