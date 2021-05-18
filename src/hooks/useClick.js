import {useEscribir} from './useEscribir';
import {Style} from '../Styles/Style';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import {createGlobalStyle} from 'styled-components';

export const useClick = () => {
    useEscribir();
    const dibujar=Style();
    const GlobalStyle =createGlobalStyle`
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
    ReactDOM.render(
        <React.StrictMode>
          <GlobalStyle/>
          <Main />
        </React.StrictMode>,
        document.getElementById('root')
      );
}