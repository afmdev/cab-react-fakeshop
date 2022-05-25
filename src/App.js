import React from 'react'
import useFetch from './components/useFetch'
import Menu from './components/Menu'
import ImageCarousel from './components/ImageCarousel'
import ProductCards from './components/ProductCards';


// let myCounter = 0
function App() {
    const items = 8
    const {data, loading, error} = useFetch("https://fakestoreapi.com/products", items)
    return (
        <div className="App">
            <Menu />
            <ImageCarousel />
            <ProductCards  data={data} error={error} loading={loading}/>
        </div>
    );
}
export default App
