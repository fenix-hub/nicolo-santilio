import React from 'react';

import Header from './header';
import Footer from './footer';

import {page, container, content} from '../styles/layout.module.scss';

function Layout(props) {
    return(
        <div className={page}>
            <Header/>
            <div className={container}>
                <div className={content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;