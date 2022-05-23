import React from 'react'
import Menu from './components/Menu'
import ImageCarousel from './components/ImageCarousel'
import ProductCards from './components/ProductCards';


// let myCounter = 0
function App() {
    return (
        <div className="App">
            <Menu />
            <ImageCarousel />
            <ProductCards numItems="2" />
        </div>
    );
}
export default App
