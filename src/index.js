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
import NoMatch from './components/NoMatch'
import { ProductContextProvider } from './context/productsContext'
import Menu from './components/Menu';
import { AuthContextProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import ViewNoLogged from './views/ViewNoLogged';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/shop" element={<ViewShop />}/>
            <Route path="chat" element={<ProtectedRoute><ViewChat /></ProtectedRoute>} />
            <Route path="contact" element={<ViewContact />} />
            <Route path="login" element={<ViewLogin />} />
            <Route path="shop/:id" element={<ViewSingleProduct />} />
            <Route path="no-logged" element={<ViewNoLogged />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    
    
      </AuthContextProvider>
  </>
);


// <>
//   <ProductContextProvider>
//   <BrowserRouter>
//   <Menu/>
//   <Routes>
//           <Route path="/" element={<App />}/>
//           <Route path=":id" element={<ViewShop />}/>
//           <Route path="chat" element={<ViewChat />} />
//           <Route path="contact" element={<ViewContact />} />
//           <Route path="login" element={<ViewLogin />} />
//           <Route path="shop/:id" element={<ViewSingleProduct />} />
//           <Route path="*" element={<NoMatch />} />
//         </Routes>
//       </BrowserRouter>
//     </ProductContextProvider>
//   </>
