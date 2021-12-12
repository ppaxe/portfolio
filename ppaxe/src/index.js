import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
