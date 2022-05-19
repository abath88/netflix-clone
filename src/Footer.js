import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__social">
                <FontAwesomeIcon icon={faFacebookF} color="white" size="xl"/>
                <FontAwesomeIcon icon={faInstagram} color="white" size="xl"/>
                <FontAwesomeIcon icon={faTwitter} color="white" size="xl"/>
                <FontAwesomeIcon icon={faYoutube} color="white" size="xl"/>
            </div>
            <div className="footer__menu">
                <span href="#">Audio and Subtitles</span>
                <span href="#">Audio Description</span>
                <span href="#">Help Center</span>
                <span href="#">Gift Cards</span>
                <span href="#">Media Center</span>
                <span href="#">Investor Relations</span>
                <span href="#">Jobs</span>
                <span href="#">Terms of Use</span>
                <span href="#">Privacy</span>
                <span href="#">Legal Notices</span>
                <span href="#">Cookie Preferences</span>
                <span href="#">Corporate Information</span>
                <span href="#">Contact Us</span>
            </div>
            <div className="footer__copyright">
                © 1997-2022 Netflix, Inc.
            </div>
        </div>
    )
}

export default Footer