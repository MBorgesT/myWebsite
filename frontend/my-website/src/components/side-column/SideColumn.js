import React from 'react';

import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';

import './SideColumn.css';

class SideColumn extends React.Component {
    
    render() {
        return (
            <div className='component'>
                <AboutMe />
                <Contact />
            </div>
        );
    }

}

export default SideColumn;