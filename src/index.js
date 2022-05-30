import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ViewShop from './views/ViewShop'
import ViewChat from './views/ViewChat'
import ViewContact from './views/ViewContact'
import ViewLogin from './views/ViewLogin'
import ViewSingleProduct from './views/ViewSingleProduct'
import { ProductContextProvider } from './context/productsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
    <ProductContextProvider>
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}/>
          <Route path="/:id" element={<ViewShop />}/>
          <Route path="/chat" element={<ViewChat />} />
          <Route path="/contact" element={<ViewContact />} />
          <Route path="/login" element={<ViewLogin />} />
          <Route path="shop/:id" element={<ViewSingleProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>
    
  </>
);



