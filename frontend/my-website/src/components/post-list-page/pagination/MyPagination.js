import React from 'react';
import { Pagination } from 'react-bootstrap';
import './MyPagination.css';

class MyPagination extends React.Component {

    constructor(props) {
        super(props);

        this.paginationRef = React.createRef();
    }

    selectPage(pageIndex) {
        this.props.selectPage(pageIndex, this.paginationRef, null);
    }

    render() {
        const postListModel = this.props.postListPage.state.postListModel;
        let pagItems = []
        if (postListModel.numberOfPages <= 5) {
            for (let i = 1; i <= postListModel.numberOfPages; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => this.selectPage(i)}
                        active={postListModel.pageIndex === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }
        } else if (postListModel.pageIndex <= 3) {
            for (let i = 1; i <= 4; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => this.selectPage(i)}
                        active={postListModel.pageIndex === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }

            pagItems.push(<Pagination.Ellipsis />)
            pagItems.push(
                <Pagination.Item
                    key={postListModel.numberOfPages}
                    onClick={() => this.selectPage(postListModel.numberOfPages)}
                    active={postListModel.pageIndex === postListModel.numberOfPages}
                >
                    {postListModel.numberOfPages}
                </Pagination.Item>
            )
        } else if (postListModel.pageIndex >= postListModel.numberOfPages - 2) {
            pagItems.push(
                <Pagination.Item
                    key={1}
                    onClick={() => this.selectPage(1)}
                    active={postListModel.pageIndex === 1}
                >
                    {1}
                </Pagination.Item>
            )
            pagItems.push(<Pagination.Ellipsis />)

            for (let i = postListModel.numberOfPages - 3; i <= postListModel.numberOfPages; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => this.selectPage(i)}
                        active={postListModel.pageIndex === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }
        } else {
            pagItems.push(
                <Pagination.Item
                    key={1}
                    onClick={() => this.selectPage(1)}
                    active={postListModel.pageIndex === 1}
                >
                    {1}
                </Pagination.Item>
            )
            pagItems.push(<Pagination.Ellipsis />)

            pagItems.push(
                <Pagination.Item
                    key={postListModel.pageIndex - 1}
                    onClick={() => this.selectPage(postListModel.pageIndex - 1)}
                >
                    {postListModel.pageIndex - 1}
                </Pagination.Item>
            )
            pagItems.push(
                <Pagination.Item
                    key={postListModel.pageIndex}
                    active
                >
                    {postListModel.pageIndex}
                </Pagination.Item>
            )
            pagItems.push(
                <Pagination.Item
                    key={postListModel.pageIndex + 1}
                    onClick={() => this.selectPage(postListModel.pageIndex + 1)}
                >
                    {postListModel.pageIndex + 1}
                </Pagination.Item>
            )

            pagItems.push(<Pagination.Ellipsis />)
            pagItems.push(
                <Pagination.Item
                    key={postListModel.numberOfPages}
                    onClick={() => this.selectPage(postListModel.numberOfPages)}
                    active={postListModel.pageIndex === postListModel.numberOfPages}
                >
                    {postListModel.numberOfPages}
                </Pagination.Item>
            )

        }

        return (
            <div className='pagination' ref={this.paginationRef}>
                <Pagination>
                    <Pagination.Prev onClick={() => this.selectPage(postListModel.pageIndex - 1)} />
                    {pagItems}
                    <Pagination.Next onClick={() => this.selectPage(postListModel.pageIndex + 1)} />
                </Pagination>
            </div>
        );
    }

}

export default MyPagination;