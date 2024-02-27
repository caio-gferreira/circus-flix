import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './routes/Home/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Pagina404 = () => (
  <div>
      <h1>Sorry!! Erro404!! </h1>
  </div>

)

ReactDOM.render(

  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      {/* <Route path="/cadastro/video"  component={CadastroVideo} />
      <Route path="/cadastro/categoria"  component={CadastroCategoria} /> */}
      <Route path="*" element={<Pagina404 />} />
      
    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);