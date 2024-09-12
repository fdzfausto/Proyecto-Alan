// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';  // Importa el archivo de estilos globales
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
