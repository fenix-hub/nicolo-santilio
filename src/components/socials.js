import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaSkype, FaTwitter} from 'react-icons/fa';

import '../styles/socials.scss';

function Socials() {
    return(
    <div className="socials">
        <text>Social and Contacts</text>
        <ul>
            <li>
                <a href="https://github.com/fenix-hub" target="_blank" rel="noreferrer"><FaGithub/></a>
            </li>
            <li>
                <a href="https://twitter.com/fenixhub" target="_blank" rel="noreferrer"><FaTwitter/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nicolò-santilio-52b714b1/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            </li>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100014217049374" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            </li>
            <li>
                <a href="https://discord.gg/KnJGY9S" target="_blank" rel="noreferrer"><FaDiscord/></a>
            </li>
            <li>
                <a href="https://join.skype.com/invite/iMJmdMAyjtIQ" target="_blank" rel="noreferrer"><FaSkype/></a>
            </li>
            <li>
                <a href="mailto:nicolo.santilio@outlook.com" target="_blank" rel="noreferrer"><FaEnvelope/></a>
            </li>
        </ul>
    </div>
    );
}

export default Socials;