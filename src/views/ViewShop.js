import React, { useState } from 'react'
import Menu from '../components/Menu'
import Searchbar from '../components/Searchbar'
import ImageCarousel from '../components/ImageCarousel'
import ProductCards from '../components/ProductCards'
import useFetch from '../components/useFetch'


// let myCounter = 0
function ViewShop() {

    // const [data] = useState(null)
    
    const [filter, setFilter] = useState([])
    const items = 3
    const {data, loading, error, setData} = useFetch("https://fakestoreapi.com/products", items)

    
    
    function handleChange(event) {
        let myValue = event.target.value
        // console.log(data)
        let result = data.filter((element) => {
            return element.title.toLowerCase().includes(myValue)
        })

        setData(result)
        
    }

return (

    <div className="ViewShop">
        
    <Menu/>
    <Searchbar handleChange={handleChange}/>
    <ImageCarousel />
    <ProductCards  data={data} error={error} loading={loading} filter={filter}  />

    </div>
);
}

export default ViewShop
