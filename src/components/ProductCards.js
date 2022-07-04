import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  OverlayTrigger,
  Button,
  Tooltip,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartPlus } from "react-bootstrap-icons";
import { ProductsContext } from "../context/productsContext";
import ViewCart from "../views/ViewCart";

function ProductCards() {
  const { products, loader, error, fetchData, filter } =
    useContext(ProductsContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchData();
  }, []);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Good idea 🤑
    </Tooltip>
  );

  return (
    <div className="ProductCards">
      <div className="Content">
        {loader && <div className="loader">Loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <Row className="g-4">
          {/*TODO  instead of mapping the fiter, you could use products and use the filter method on products*/}
          {filter ? (
            filter.map(({ id, title, price, description, category, image }) => (
              <Col key={id}>
                <Card key={id} className="h-100" style={{ width: "18rem" }}>
                  <Card.Header>
                    <Badge pill bg="dark">
                      {category}
                    </Badge>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Card.Img
                      variant="top"
                      src={image}
                      alt={title}
                      style={{ height: "250px" }}
                    />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-truncate description">
                      {description}
                    </Card.Text>
                    <Card.Text className="text-truncate price">
                      {price}€
                    </Card.Text>
                    <Card.Text className="text-truncate small-text">
                      inkl. MwSt, zzgl. Versand
                    </Card.Text>

                    <Container className="d-flex justify-content-between p-0 m-0">
                      <Link to={`../shop/${id}`} className="w-100  me-2">
                        <Button
                          size="sm"
                          className="card-button read-more w-100"
                        >
                          Read More
                        </Button>
                      </Link>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 100, hide: 500 }}
                        overlay={renderTooltip}
                      >
                        <Button
                          size="sm"
                          className="card-button add-cart"
                          onClick={handleShow}
                        >
                          <CartPlus size={20} />
                        </Button>
                      </OverlayTrigger>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>hola</p>
          )}
        </Row>
      </div>
      {/* <Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Fakeshop Cart</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ViewCart />
				</Offcanvas.Body>
			</Offcanvas> */}
    </div>
  );
}

export default ProductCards;
