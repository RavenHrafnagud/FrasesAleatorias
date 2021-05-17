import React from 'react';
import {useAleatorio} from '../hooks/useAleatorio';
import {useEscribir} from '../hooks/useEscribir';
import {useIntervalo} from '../hooks/useIntervalo';


function Main() {


    useIntervalo();


    const {cita,autor,link}=useAleatorio();

  
    return (
        <main>
            <section id="quote-box">
                <div>
                    <i>"</i>
                    <span id="text">
                        {cita}
                    </span>
                </div>
                <div>
                    -
                    <span id="author">
                        {autor}
                    </span>
                </div>
                <div>
                    <a id="tweet-quote" href={link} title="Twitea esta cita" target="_blank" rel="noreferrer">
                        <i>Twitter</i>
                    </a>
                    <button id="new-quote" onClick={useEscribir}>Nueva Cita</button>
                </div>
            </section>
        </main>
    )
}

export default Main
