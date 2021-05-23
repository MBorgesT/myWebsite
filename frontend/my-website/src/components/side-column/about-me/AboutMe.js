import React from 'react';

import './AboutMe.css'

const body = 'This website is a way for me to learn some technologies and get used to web development. Carpe Diem.'

class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='title'>About me</div>
                    <div className='body'>{body}</div>
                </div>
            </div>
        );
    }

}

export default AboutMe;