import React from 'react';

import Header from './header';
import Footer from './footer';

import layoutStyle from '../styles/layout-project.module.scss';

function LayoutProject(props) {
    return(
        <div className={layoutStyle.page}>
            <Header/>
            <div className={layoutStyle.container}>
                <div className={layoutStyle.content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default LayoutProject;