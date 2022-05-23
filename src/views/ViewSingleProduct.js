import React, { useState } from 'react'
import Menu from '../components/Menu'
import Product from '../components/Product'
import useFetchSingle from '../components/useFetchSingle'
import { useParams } from 'react-router-dom'


// let myCounter = 0
function ViewSingleProduct() {

    // const [data] = useState(null)
    const productId = useParams()

    console.log(productId)
    console.log(productId.id)
    
    const {data, loading, error, setData} = useFetchSingle("https://fakestoreapi.com/products", productId.id)



return (

    <div className="ViewSingleProduct">
        
    <Menu/>
    <Product  data={data} error={error} loading={loading} productId={productId.id}  />

    </div>
);
}

export default ViewSingleProduct

