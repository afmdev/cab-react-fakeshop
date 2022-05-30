import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartPlus } from 'react-bootstrap-icons';
import { ProductsContext } from '../context/productsContext'

function ProductCards() {

    const { products, loader, error, fetchData } = useContext(ProductsContext)

    useEffect(() => {
        fetchData()
    }, [])
    

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Good idea 🤑</Tooltip>
    );

    return (
        <div className="ProductCards">
            <div className="Content">
            {loader && <div className="loader">Loading...</div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
                <Row className="g-4">    
                    {products && products.map(({ id, title, price, description, category, image }) => (
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
                            
                            <Container className="d-flex justify-content-between p-0 m-0">
                                <Link to={`../shop/${id}`} className="w-100">
                                <Button size="sm" className="card-button read-more w-100" >Read More</Button>
                                </Link>
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 100, hide: 500 }}
                                overlay={renderTooltip}>
                                    <Button size="sm" className="card-button add-cart ml-3">
                                        <CartPlus size={20} />
                                    </Button>
                                </OverlayTrigger>
                            </Container>

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
