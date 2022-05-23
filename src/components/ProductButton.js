import React from 'react'
import { Container, OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartPlus } from 'react-bootstrap-icons';



function ProductButton(product) {
    const id = product.id
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Good idea 🤑</Tooltip>
    );


    return (
        <Container className="d-flex justify-content-between p-0 m-0">
            <Link to={`${id}`} className="w-100">
            <Button size="sm" className="card-button read-more w-100">Read More</Button>
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
  )
}

export default ProductButton