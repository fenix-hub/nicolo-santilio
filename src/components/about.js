import React from 'react';


function About() {
    return(
        <div id="about-me" className="l-content-container">
            <h3>About Me</h3>
            <div className="separator"></div>
            <div className="content">
            <p>Hi, my name is Nicolò Santilio, and I'm an Automation Engineer, class of '97.</p>
            <p>From <i>Isaac Asimov</i> to <i>Masamune Shirow</i>, from the ethics behind <i>artificial intelligence</i> to the dirty and raw <i>cyberpunk</i>, the worlds of computer science and robotics have always fascinated me.</p>
            <p>I'm mainly dedicated to the design and cration of frameworks or single utilities, where the development of a particular application, suite or simple tools could be useful for any user or programmer. I always try to use my resources and knowledge to offer to the community, whatever it is, useful, functional and aesthetically pleasing products.</p>
            <p>The passion for data acquisition and manipulation, in addition to the development of management software (from Restaurants to Stores), has pushed me also in the world of videogame development, especially through <a href="https://godotengine.org">opensource tools</a> to which I contribute almost daily, both in my work and in <a href="https://godotengineitalia.com">community</a>.</p>
            <p>Not missing, in my list, also small home projects related to the world of robotics: from automatic irrigation systems based on Arduino for my seedlings, up to webserver for playful testing and analysis with Raspberry.</p>
            </div>
        </div>
    );
}

export default About;