import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ButtonPage from './pages/buttonPage';
import ButtonGroupPage from './pages/buttonGroup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/button-group" element={<ButtonGroupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );