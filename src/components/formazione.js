import React from 'react';
import {FaFileDownload} from 'react-icons/fa';

function Formazione() {
    return(
        <div id="education" className="l-content-container">
            <h3>Education</h3>
            <div className="separator"></div>
            <div className="content">
            <p>Starting from a scientific education at the Liceo Scientifico, without ever abandoning my passion for the study of musical instruments (classical piano, jazz, electronic music), I made my way into the field of engineering, and in particular in Computer Engineering and Automation at the <a href="http://www.poliba.it/it">Politecnico di Bari</a>. </p>
            <p>These are fields often seen as one inhibitor of the other in the professional field, but I have always seen as sides of the same coin, for me both worthy of interest in equal measure.</p>
            <p>I have always worked little jobs that would allow me to contribute to my family's expenses, or even simply to support my own expenses. From experiences in kindergarten, to student/homework help to tutoring middle and high school students, to selling small software and experiences in electronics store.</p>
            <div className="CV">
                <a href={"docs/CV_Nicolò_Santilio_EN.pdf"} download>
                    <button type="submit" className="customButton"><FaFileDownload className="icon"/>Download my resumee</button>
                </a>
            </div>
            </div>

        </div>
    );
}

export default Formazione;