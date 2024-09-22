import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/components.css'
import App from './App';
<<<<<<< Updated upstream

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// useContext
import { ServiceDataProvider } from './assets/data/ServiceDataContext';
import { TempStaffing } from './assets/data/ServiceDataContents.js/OfficeManpower';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ServiceDataProvider>
      <App />
      {/* <TempStaffing/> */}
    </ServiceDataProvider>
   
>>>>>>> Stashed changes
);
