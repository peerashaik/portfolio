import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/styles.css';
import './css/hero-banner.css';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import Client from 'shopify-buy';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const client = Client.buildClient({storefrontAccessToken: '6a95b1cd24e8bb94d05669e9a6d0eadc', domain: 'zstorefoods.myshopify.com'});
root.render(
  <HashRouter>
    <ScrollToTop/>
    <App />
  </HashRouter>
);
registerServiceWorker();