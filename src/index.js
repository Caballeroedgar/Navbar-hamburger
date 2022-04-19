import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import App from './App';
import About from './Routes/About';
import Home from './Routes/Home';
import Portafolio from './Routes/Portafolio';
import Blog from './Routes/Blog';
import Contact from './Routes/Contact';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}>
      <Route exact path="/Home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/portafolio" element={<Portafolio/>} />
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


