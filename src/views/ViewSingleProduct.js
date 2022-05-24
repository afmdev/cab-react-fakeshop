import React from 'react'
import Menu from '../components/Menu'
import Product from '../components/Product'
import useFetchSingle from '../components/useFetchSingle'
import { useParams } from 'react-router-dom'


function ViewSingleProduct() {
    const productId = useParams()
    const {data, loading, error} = useFetchSingle("https://fakestoreapi.com/products", productId.id)
return (
    <div className="ViewSingleProduct">  
    <Menu/>
    <Product  data={data} error={error} loading={loading} productId={productId.id}  />
    </div>
);
}

export default ViewSingleProduct

