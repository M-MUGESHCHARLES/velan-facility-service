import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/components.css'
import App from './App';
// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardDataProvider } from './assets/data/CardDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CardDataProvider>
      <App />
    </CardDataProvider>
   
);
