import React from 'react';

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
                <ListGroup.Item
                    action
                    id={-1}
                >
                    All
                </ListGroup.Item>
            );

            for (let i = 0; i < this.state.topics.length; i++) {
                elements.push(
                    <ListGroup.Item
                        action
                        id={this.state.topics[i].id}
                    >
                        {this.state.topics[i].name}
                    </ListGroup.Item>
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