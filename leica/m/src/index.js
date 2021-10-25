import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ResetStyles from './styles/ResetStyles';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
      <ResetStyles />
      <ScrollToTop />
      <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
