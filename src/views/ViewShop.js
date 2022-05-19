import React from 'react'
import { useState, useEffect } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import Menu from '../components/Menu'
import Searchbar from '../components/Searchbar'
// import ImageCarousel from '../components/ImageCarousel'
import Pagination from '../components/Pagination' 



// let myCounter = 0
function ViewShop() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filter, setFilter] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [myCounter, setMyCounter] = useState(0)



    let result = []
    function handleChange(event) {
        let myValue = event.target.value
        result = data.filter((element) => {
            return element.title.includes(myValue)
        })
        setFilter(result)
    }


    const onPrev = (event) => {
        let prevPage = data.info.prev
        if (myCounter > 0  ) {
            myUrl = prevPage
            getData(myUrl)
            setMyCounter(myCounter-1)
            console.log(myCounter);
        } else {
            setDisabled(false)
        }
    }

    const onNext = (event) => {
        let nextPage = data.info.next
        myUrl = nextPage
        getData(myUrl)
        setDisabled(true)
        setMyCounter(myCounter+1)
        console.log(myCounter);
    }

useEffect(() => {
if (myCounter === 0) {
    setDisabled(false)
}
}, [myCounter])

let myUrl = "https://fakestoreapi.com/products"

const getData = async () => {
try {
const response = await fetch(myUrl);
if (!response.ok) {
    throw new Error(
    `This is an HTTP error: The status is ${response.status}`
    );
}
let actualData = await response.json();
const myData = actualData
setData(actualData)
setFilter(myData)
setError(null);
} catch (err) {
    setError(err.message);
setData(null);
} finally {
    setLoading(false);
}
}

useEffect(() => {
getData()
//eslint-disable-next-line
}, [])

return (

    <div className="App">
        
    <Menu handleChange={handleChange} />
    <Searchbar handleChange={handleChange} />

    <div className="Content">
    {loading && <div>A moment please...</div>}

    {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
    <Row className="g-4">
        {filter && filter.map(({ id, title, price, description, category, image }) => (

        
        <Col key={id}>
            <Card key={id} className="h-100" style={{ width: '18rem' }}>
            
            <Card.Header>
                <Badge pill bg="dark">{category}</Badge>
                </Card.Header>

                <Card.Body className="p-0">
                <Card.Img variant="top" src={image} alt={title} style={{ height: '250px' }} />
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-truncate description">{description}</Card.Text>
                <Card.Text className="text-truncate price">{price}€</Card.Text>
                <Card.Text className="text-truncate small-text">inkl. MwSt, zzgl. Versand</Card.Text>
            </Card.Body>
            
            </Card>
        </Col>
        ))}
    </Row>
    <Pagination
    onNext={onNext}
    onPrev={onPrev} 
    disabled={disabled} />
            
    </div>
</div>
);
}

export default ViewShop