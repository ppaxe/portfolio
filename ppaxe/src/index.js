import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
