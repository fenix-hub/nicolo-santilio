import React from 'react';
import {FaFileDownload} from 'react-icons/fa';

function Formazione() {
    return(
        <div id="formazione" className="l-content-container">
            <h3>Formazione</h3>
            <div className="separator"></div>
            <div className="content">
            <p>Partendo da una formazione scientifica presso il Liceo Scientifico, senza mai abbandonare la mia passione per lo studio degli strumenti musicali (pianoforte classico, jazz, musica elettronica), mi sono fatto strada nel campo dell'ingegneria, ed in particolare nell'Ingegneria Informatica e dell'Automazione presso il <a href="http://www.poliba.it/it">Politecnico di Bari</a>. </p>
            <p>Questi sono campi spesso visti come uno inibitore dell'altro in ambito professionale, ma che io ho sempre visto come facce di una stessa medaglia, per me entrambe degne di interesse in egual misura.</p>
            <p>Ho sempre svolto lavoretti che mi permettessero di contribuire alle spese della mia famiglia, o anche semplicemente per sostenere le mie stesse spese. Da esperienze in asilo, a studente/aiuto compiti per impartire ripetizioni a studenti di scuole medie e superiori, fino alla vendita di piccoli software e esperienze in negozio di elettronica.</p>
            <p>A prescindere dalla carriera professionale che avrò l'opportunità di condurre, punto molto sull'investire me stesso e le mie conoscenze. La mia persistente curiosità mi spinge sempre a studiare, conoscere ed imparare.
                Attualmente mi piacerebbe proseguire la carriera universitaria specializzandomi in ambiti vicini all'<b>Automazione e la Meccatronica</b>, ma ho anche grande interesse per campi più specifici come i <b>Sistemi Cyberfisci e l'Affective Computing</b>.
            </p>
            <div className="CV">
{/*                 <p>Vuoi saperne di più sulla mia formazione, esperienze e competenze? Scarica la versione digitale del mio CV.</p>
 */}                <a href={"docs/CV_Nicolò_Santilio.pdf"} download>
                    <button type="submit" className="customButton"><FaFileDownload className="icon"/>  Scarica il CV Digitale</button>
                </a>
            </div>
            </div>

        </div>
    );
}

export default Formazione;