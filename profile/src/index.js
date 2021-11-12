import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './App';
import ResetStyles from './styles/ResetStyles';
import ScrollToTop from './components/common/ScrollToTop';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <ResetStyles />
        <ScrollToTop />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
