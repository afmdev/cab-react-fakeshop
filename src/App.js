import React from 'react';
import { Routes, Route } from "react-router-dom";
import ViewShop from './views/ViewShop'
import ViewChat from './views/ViewChat'
import ViewContact from './views/ViewContact'
import ViewLogin from './views/ViewLogin'
import ViewSingleProduct from './views/ViewSingleProduct'
import NoMatch from './components/NoMatch'
import { AuthContextProvider } from './context/authContext';
import { ProductContextProvider } from './context/productsContext'
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ViewNoLogged from './views/ViewNoLogged';
import ViewRegister from './views/ViewRegister';
import ViewMyAccount from './views/ViewMyAccount';

function App() {
	// console.log(app);
	return (
		<>
			<AuthContextProvider>
				<ProductContextProvider>
					<Menu />
					<Routes>
						<Route path="/" element={<ViewShop />} />
						<Route path="chat" element={<ProtectedRoute><ViewChat /></ProtectedRoute>} />
						<Route path="contact" element={<ViewContact />} />
						<Route path="login" element={<ViewLogin />} />
						<Route path="register" element={<ViewRegister />} />
						<Route path="my-account" element={<ProtectedRoute><ViewMyAccount /></ProtectedRoute>} />
						<Route path="shop/:id" element={<ViewSingleProduct />} />
						<Route path="no-logged" element={<ViewNoLogged />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
					<Footer />
				</ProductContextProvider>
			</AuthContextProvider>
		</>
	);

}

export default App;


// import React from 'react'
// import ImageCarousel from './components/ImageCarousel'
// import ProductCards from './components/ProductCards';
// import { app } from './config'


// // let myCounter = 0
// function App() {
// 	console.log(app)
// 	return (
// 		<div className="App">
// 			<ImageCarousel />
// 			<ProductCards />
// 		</div>
// 	);
// }
// export default App
