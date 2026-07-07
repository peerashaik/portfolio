import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HashRouter>
    <ScrollToTop/>
    <App />
  </HashRouter>
);
registerServiceWorker();