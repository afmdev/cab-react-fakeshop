import React from 'react'
import { Container, Row, Col, OverlayTrigger, Button, Tooltip, Badge } from 'react-bootstrap';
import ReactStars from 'react-stars'
import { HeartFill } from 'react-bootstrap-icons';

function ProductCards({ data, error, loading }) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Add to Wishlist</Tooltip>
    );

    return (
        <div className="Product">
            <div className="Content w-75">
                {loading && <div className="loader">Loading...</div>}
                {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
                {data &&
                    <>
                        <Container>
                            <Row>
                                <Col sm={7} className="product-pictures">
                                    <img src={data.image} alt={data.title} width="200px" />
                                    <Col sm={4} className="d-flex justify-content-center">
                                        <img src={data.image} alt={data.title} width="50px" />
                                        <img src={data.image} alt={data.title} width="50px" />
                                        <img src={data.image} alt={data.title} width="50px" />
                                        <img src={data.image} alt={data.title} width="50px" />
                                    </Col>
                                </Col>
                                <Col sm={4} className="product-info">
                                    <Badge pill bg="dark">{`${data.category}`}</Badge>
                                    <h1>{`${data.title}`}</h1>
                                    <Row>
                                        <Col className="rating">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={data.rating.rate}
                                                edit={false}
                                                color2={'#ffd700'} />
                                            <div>{data.rating.rate} / 5</div>
                                        </Col>
                                    </Row>
                                    <p className="description">{`${data.description}`}</p>
                                    <p className="price single">{`${data.price}`}€</p>
                                    <p className="small-text">inkl. MwSt, zzgl. Versand</p>
                                    <Container className="d-flex justify-content-between p-0 m-0">
                                        <Button size="sm" className="card-button read-more w-100">Add Cart</Button>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 100, hide: 500 }}
                                            overlay={renderTooltip}>
                                            <Button size="sm" className="card-button add-cart ml-3">
                                                <HeartFill size={20} />
                                            </Button>
                                        </OverlayTrigger>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </>
                }
            </div>
        </div>
    );
}

export default ProductCards
