import React from 'react';


function About() {
    return(
        <div id="su-di-me" className="l-content-container">
            <h3>Su di me</h3>
            <div className="separator"></div>
            <div className="content">
            <p>Ciao, sono Nicolò Santilio, e sono un Ingegnere dell'Automazione, classe '97.</p>
            <p>Da <i>Isaac Asimov</i> a <i>Masamune Shirow</i>, dall'etica dietro l'<i>intelligenza artificiale</i> fino allo sporco e crudo 
            <i> cyberpunk</i>, i mondi dell'informatica e della robotica mi hanno sempre appassionato.</p>
            <p>Mi dedico principalmente alla progettazione e crazione di framework o singole utilities, lì dove lo sviluppo di un particolare applicativo, di una suite o di semplici tools possa risultare utile per qualsiasi utente o programmatore. Cerco sempre di impiegare le mie risorse e conoscenze per offrire alla community, qualsiasi essa sia, prodotti utili, funzionali ed esteticamente piacevoli.</p>
            <p>La passione per l'acquisizione e la manipolazione dei dati, oltre allo sviluppo di software gestionali (da Ristoranti a Negozi), mi ha spinto anche nel mondo del videogame development, soprattutto attraverso <a href="https://godotengine.org">strumenti opensource</a> a cui contribuisco quasi quotidianamente, sia a livello di operato che di <a href="https://godotengineitalia.com">community</a>.</p>
            <p>Non mancano, nella mia lista, anche piccoli progetti domestici inerenti al mondo della robotica: da sistemi di irrigazione automatici basati su Arduino per le mie piantine, fino a webserver per test ludici ed analisi con Raspberry.</p>
            </div>
        </div>
    );
}

export default About;