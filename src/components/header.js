import React from 'react';
import Socials from '../components/socials';


import '../styles/header.scss';


function Header() {
    return (
        <header>
            <nav>
                <ul>
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
                    <li>
                        <a href="/#contatti">Contatti</a>
                    </li>
                </ul>
            </nav>
            <Socials/>
        </header>
    );
}

export default Header;