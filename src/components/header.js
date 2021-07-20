import React from 'react';
import Socials from '../components/socials';

import '../styles/header.scss';


function Header() {
    const handleClick = () => {
        var header = document.getElementById("customHeader");
        header.style.visibility = (header.style.visibility === 'hidden' ? 'visible' : 'hidden')
    }
    return (
        <header className="customHeader" id="customHeader">
        <div className="headerContainer">
            <img className="avatarImg" src="/img/avatar.png" alt="avatar"></img>
            <nav className="customNav">
                <ul className="customUl">
                    <li>
                        <a href="/#home" onClick={handleClick} >Home</a>
                    </li>
                    <li>
                        <a href="/portfolio" onClick={handleClick}>Projects</a>
                    </li>
                    <li>
                        <a href="/#about-me" onClick={handleClick} >About Me</a>
                    </li>
                    <li>
                        <a href="/#education" onClick={handleClick} >Education</a>
                    </li>
                </ul>
            </nav>
            <Socials/>
        </div>
    </header>
    );
}

export default Header;
