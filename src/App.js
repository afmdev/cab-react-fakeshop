import React, { useState } from 'react'
import useFetch from './components/useFetch'
import Menu from './components/Menu'
import ImageCarousel from './components/ImageCarousel'
import ProductCards from './components/ProductCards';


// let myCounter = 0
function App() {
    const [filter, setFilter] = useState([])
    const items = 3
    const {data, loading, error, setData} = useFetch("https://fakestoreapi.com/products", items)
    return (
        <div className="App">
            <Menu />
            <ImageCarousel />
            <ProductCards  data={data} error={error} loading={loading} filter={filter}  />
        </div>
    );
}
export default App
