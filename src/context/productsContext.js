import { createContext, useState } from 'react'

export const ProductsContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(null)
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(null)
  

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      setProducts(data)
      setLoader(false)
    })
    .catch((error) => {
      setError(error)
    })
  }

  return (
    <ProductsContext.Provider value={{products, loader, error, fetchData}}>
      {props.children}
    </ProductsContext.Provider>
  )
}
 