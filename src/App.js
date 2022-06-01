import React from 'react'
import ImageCarousel from './components/ImageCarousel'
import ProductCards from './components/ProductCards';
import { app } from './config'


// let myCounter = 0
function App() {
	console.log(app)
	return (
		<div className="App">
			<ImageCarousel />
			<ProductCards />
		</div>
	);
}
export default App
