import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import {GlobalStyle} from './Styles/Style';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);