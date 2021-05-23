import React from 'react';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './Contact.css';

import twitterLogo from '../../../assets/twitter-30.png';
import emailLogo from '../../../assets/email-30.png';

const email = 'matheus.borgest@gmail.com';
const twitterLink = 'https://twitter.com/mborgest';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickOnEmail = () => {
    navigator.clipboard.writeText(email);
}

export default class Concact extends React.Component {

    render() {
        return (
            <div className='contact'>
                <div>Contact</div>
                <div className='link-list'>
                    <Image className='link' src={twitterLogo} onClick={() => openInNewTab(twitterLink)} />

                    <OverlayTrigger placement='top' overlay={
                        <Tooltip>
                            Click to copy the email address to the clipboard
                </Tooltip>
                    }>
                        <Image className='link' src={emailLogo} onClick={() => clickOnEmail()} />
                    </OverlayTrigger>
                </div>
            </div>
        );
    }

}