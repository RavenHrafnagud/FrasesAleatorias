import React from 'react';
import {useAleatorio} from '../hooks/useAleatorio';
//import {useEscribir} from '../hooks/useEscribir';
//import {useIntervalo} from '../hooks/useIntervalo';
import {Section,Mainn,Div,I,A,Button} from '../Styles/Style';
import {useClick} from '../hooks/useClick'


function Main() {


    //useIntervalo();


    const {cita,autor,link}=useAleatorio();

  
    return (
        <Mainn>
            <Section id="quote-box">
                <Div texto>
                    <I className="fa fa-quote-left"></I>
                    <span id="text">
                        {cita}
                    </span>
                </Div>
                <Div autor>
                    -
                    <span id="author">
                        {autor}
                    </span>
                </Div>
                <Div boton>
                    <A id="tweet-quote" href={link} title="Twitea esta cita" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </A>
                    <Button id="new-quote" onClick={useClick}>Nueva Cita</Button>
                </Div>
            </Section>
        </Mainn>
    )
}

export default Main
