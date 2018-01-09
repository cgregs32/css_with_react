import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Ranga', cursive;
    src: url("https://fonts.googleapis.com/css?family=Ranga");
  }

  html:not(i) * {
    font-family: 'Ranga', cursive !important;
  }
`

const theme = {
  fg: 'white',
  bg: 'blue',
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
