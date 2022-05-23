import React from 'react'
import { Row, Col, Card, Badge } from "react-bootstrap";
import ProductButton from './ProductButton' 

function ProductCards({data, error, loading, items, filter}) {
    // const items = props.numItems
    // const {data, loading, error} = useFetch("https://fakestoreapi.com/products", items)



return (

    <div className="ProductCards">

    <div className="Content">
    {loading && <div>A moment please...</div>}

    {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
        <Row className="g-4">
            
            {data && data.map(({ id, title, price, description, category, image }) => (

            
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
                    <ProductButton id={`${id}`} />
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>     
    </div>
</div>
);
}

export default ProductCards
