import React, { useContext } from 'react'
import Searchbar from '../components/Searchbar'
import ImageCarousel from '../components/ImageCarousel'
import ProductCards from '../components/ProductCards'
import { ProductsContext } from '../context/productsContext'

function ViewShop() {
	// const items = 8
	// const {data, loading, error, setData} = useFetch("./json/products.json", items)
	const { products, setFilter } = useContext(ProductsContext)

	// useEffect(() => {
	// 	fetchData()
	// }, [])

	function handleChange(event) {
		let myValue = event.target.value
		let result = products.filter((element) => {
			return element.title.toLowerCase().includes(myValue)
		})
		// console.log(result)
		setFilter(result)


	}
	return (
		<div className="ViewShop">
			<Searchbar handleChange={handleChange} />
			<ImageCarousel />
			<ProductCards />
		</div>
	);
}
export default ViewShop
