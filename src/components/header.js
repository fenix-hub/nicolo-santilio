import React from 'react';
import Socials from '../components/socials';

import '../styles/header.scss';


function Header() {
    return (
        <header className="customHeader">
            <div className="headerContainer">
                <img className="avatarImg" src={"/img/avatar.png"} alt="avatar"></img>
                <nav className="customNav">
                    <ul className="customUl">
                        <li>
                            <a href="/#" >Home</a>
                        </li>
                        <li>
                            <a href="/#su-di-me">Su di me</a>
                        </li>
                        <li>
                            <a href="/#formazione">Formazione</a>
                        </li>
                        <li>
                            <a href="/#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </nav>
                <Socials/>
            </div>
        </header>
    );
}

export default Header;