import React from 'react';
import {useAleatorio} from '../hooks/useAleatorio';
import {Section,Mainn,Div,I,A,Button} from '../Styles/Style';
import {useClick} from '../hooks/useClick'
import { GlobalStyle } from '../Styles/GlobalStyle';
//import { useIntervalo } from '../hooks/useIntervalo';



function Main() {

    const {cita,autor,link}=useAleatorio();

    //useIntervalo();

    return (   
        <Mainn>
            <GlobalStyle/>
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
