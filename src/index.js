import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './routes/Home/HomePage';
import Page404 from './components/ErrorPage/PageError';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);