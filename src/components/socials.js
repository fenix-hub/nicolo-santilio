import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedin, FaDiscord, FaEnvelope} from 'react-icons/fa';

import '../styles/socials.scss';

function Socials() {
    return(
    <div className="socials">
        <text>Social e Contatti</text>
        <ul>
            <li>
                <a href="https://github.com/fenix-hub" target="_blank" rel="noreferrer"><FaGithub/></a>
            </li>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100014217049374" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nicolò-santilio-52b714b1/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            </li>
            <li>
                <a href="https://discord.gg/JNrcucg" target="_blank" rel="noreferrer"><FaDiscord/></a>
            </li>
            <li>
                <a href="mailto:n.santilio97@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope/></a>
            </li>
        </ul>
    </div>
    );
}

export default Socials;