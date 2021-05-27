import React from 'react';

import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import TopicPicker from './topic-picker/TopicPicker';

import './SideColumn.css';

export default class SideColumn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='component'>
                <AboutMe />
                <Contact />
                <TopicPicker selectedTopic={this.props.topicId} />
            </div>
        );
    }

}