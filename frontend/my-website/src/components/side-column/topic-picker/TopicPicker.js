import React from 'react';

import { Link } from 'react-router-dom';

import { ListGroup } from 'react-bootstrap';

import TopicStore from '../../../stores/TopicStore';

import './TopicPicker.css'

export default class TopicPicker extends React.Component {

    constructor(props) {
        super(props);

        this.getTopics();
    }

    async getTopics() {
        const topicStore = new TopicStore();
        let data;
        try {
            data = await topicStore.getAllTopics();
        } catch (e) {
            console.log(e);
        }

        this.setState({
            topics: data
        })
    }

    render() {
        let elements = []
        if (this.state != null && this.state.topics != null) {
            elements.push(
                <Link to='/'>
                    <ListGroup.Item
                        action
                        id={-1}
                        active={this.props.selectedTopic == null}
                    >
                        All
                    </ListGroup.Item>
                </Link>
            );

            let topics = this.state.topics;
            for (let i = 0; i < topics.length; i++) {
                let url = '/topic/' + topics[i].id;
                elements.push(
                    <Link to={url}>
                        <ListGroup.Item
                            action
                            id={topics[i].id}
                            active={parseInt(this.props.selectedTopic) === parseInt(topics[i].id)}
                        >
                            {topics[i].name}
                        </ListGroup.Item>
                    </Link>
                );
            }
        }

        return (
            <div>
                <div className='title'>Topics</div>
                <ListGroup>
                    {elements}
                </ListGroup>
            </div>
        );
    }

}
