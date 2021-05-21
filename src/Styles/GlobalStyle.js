import {createGlobalStyle} from 'styled-components';
import {useColor} from '../hooks/useColor';

const Color =()=>{
    const {color}=useColor();
    let dibujar=color;
    return dibujar;
}

const dibujar=Color();

export const GlobalStyle =createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        vertical-align: baseline;
    }
    
    html{
        font-size: 62.5%;
    }

    body {
        background-color: ${dibujar};
        color: ${dibujar};
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`