import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Shop from './views/ViewShop'
import Chat from './views/ViewChat'
import Contact from './views/ViewContact'
import Login from './views/ViewLogin'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>
  </>
);



