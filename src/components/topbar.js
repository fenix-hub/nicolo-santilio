import React from 'react';

import '../styles/topbar.scss';


function Topbar() {
    return (
        <header id="top" class="customHeader">
            <div class="">
                <div class="row">
                    <div class="col span_3">
                        <a id="logo" href="https://nicolosantilio.com" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="false" class="no-image">
                        <h3>Nicoló Santilio</h3>
                        </a>
                    </div>

                    <div class="col span_9 col_last">
                        <nav>
                            <ul class="customUl">	
                                <li id="menu-item" class="menu-item"><a href="https://nicolosantilio.com/portfolio">Portfolio</a></li>
                                <li id="menu-item" class="menu-item"><a href="https://nicolosantilio.com/#about">About</a></li>
                                <li id="menu-item" class="menu-item "><a href="https://nicolosantilio.com/contact">Contact</a></li>
                            </ul>

                            <ul class="buttons sf-menu" data-user-set-ocm="off">                          
                            </ul>        
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Topbar;