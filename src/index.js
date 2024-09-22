import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/components.css'
import App from './App';
// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// useContext
import { ServiceDataProvider } from './assets/data/ServiceDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ServiceDataProvider>
      <App />
    </ServiceDataProvider>
   
);
