import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/VideoContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

