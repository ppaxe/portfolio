import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import ResetStyles from './styles/ResetStyles';

ReactDOM.render(
  <HashRouter>
      <ResetStyles />
      <App />
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
