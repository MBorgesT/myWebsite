import React from 'react';
import { Pagination } from 'react-bootstrap';

class MyPagination extends React.Component {

    render() {
        const { parent } = this.props;

        let pagItems = []
        if (parent.state.numberOfPages <= 5) {
            for (let i = 1; i <= parent.state.numberOfPages; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => parent.handlePageClick(i)}
                        active={parent.state.page === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }
        } else if (parent.state.page <= 3) {
            for (let i = 1; i <= 4; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => parent.handlePageClick(i)}
                        active={parent.state.page === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }

            pagItems.push(<Pagination.Ellipsis />)
            pagItems.push(
                <Pagination.Item
                    key={parent.state.numberOfPages}
                    onClick={() => parent.handlePageClick(parent.state.numberOfPages)}
                    active={parent.state.page === parent.state.numberOfPages}
                >
                    {parent.state.numberOfPages}
                </Pagination.Item>
            )
        } else if (parent.state.page >= parent.state.numberOfPages - 2) {
            pagItems.push(
                <Pagination.Item
                    key={1}
                    onClick={() => parent.handlePageClick(1)}
                    active={parent.state.page === 1}
                >
                    {1}
                </Pagination.Item>
            )
            pagItems.push(<Pagination.Ellipsis />)

            for (let i = parent.state.numberOfPages - 3; i <= parent.state.numberOfPages; i++) {
                pagItems.push(
                    <Pagination.Item
                        key={i}
                        onClick={() => parent.handlePageClick(i)}
                        active={parent.state.page === i}
                    >
                        {i}
                    </Pagination.Item>
                )
            }
        } else {
            pagItems.push(
                <Pagination.Item
                    key={1}
                    onClick={() => parent.handlePageClick(1)}
                    active={parent.state.page === 1}
                >
                    {1}
                </Pagination.Item>
            )
            pagItems.push(<Pagination.Ellipsis />)

            pagItems.push(
                <Pagination.Item
                    key={parent.state.page - 1}
                    onClick={() => parent.handlePageClick(parent.state.page - 1)}
                >
                    {parent.state.page - 1}
                </Pagination.Item>
            )
            pagItems.push(
                <Pagination.Item
                    key={parent.state.page}
                    active
                >
                    {parent.state.page}
                </Pagination.Item>
            )
            pagItems.push(
                <Pagination.Item
                    key={parent.state.page + 1}
                    onClick={() => parent.handlePageClick(parent.state.page + 1)}
                >
                    {parent.state.page + 1}
                </Pagination.Item>
            )

            pagItems.push(<Pagination.Ellipsis />)
            pagItems.push(
                <Pagination.Item
                    key={parent.state.numberOfPages}
                    onClick={() => parent.handlePageClick(parent.state.numberOfPages)}
                    active={parent.state.page === parent.state.numberOfPages}
                >
                    {parent.state.numberOfPages}
                </Pagination.Item>
            )

        }

        return (
            <div className="pagination">
                <Pagination>
                    <Pagination.Prev onClick={() => parent.handlePageClick(parent.state.page - 1)} />
                    {pagItems}
                    <Pagination.Next onClick={() => parent.handlePageClick(parent.state.page + 1)} />
                </Pagination>
            </div>
        );
    }

}

export default MyPagination;