import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { ContextProvider } from "./Components/utils/global.context.jsx";
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);


