import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Importamos o componente de rotas que gerencia a navegação
import AppRoutes from './routes'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Substituímos o <App /> pelo <AppRoutes /> */}
    <AppRoutes />
  </React.StrictMode>
);

reportWebVitals();