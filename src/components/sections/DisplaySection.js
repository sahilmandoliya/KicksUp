import { Row, Col, Card, Button, Nav, Navbar } from "react-bootstrap";
import ShoesProductCard from "../ShoesProductCard";

const DisplaySection = ({ shoes, setShoeToShow, setShowDesignSpace }) => {
  return (
    <Card className="border-0 shadow w-100 p-3 ps-4">
      <Card.Body className="p-0">
        <Navbar bg="light" expand="lg" className="me-2 pt-0 pb-3">
          <Navbar.Brand className="m-0">SHOES</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex">
              <i
                className="fa-solid fa-magnifying-glass me-3 my-auto"
                role="button"
              ></i>
              <Button variant="outline-dark" size="sm">
                Sort By
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row style={{ minHeight: "71vh" }}>
          {shoes.length === 0 ? (
            <p className="text-center" style={{ marginTop: "24vh" }}>
              Nothing to show! ;
            </p>
          ) : (
            shoes.map((shoe, i) => (
              <Col key={i} sm={12} md={6} lg={6} xl={4}
                className="d-flex justify-content-center"
              >
                <ShoesProductCard
                  name={shoe.name}
                  imgName={shoe.imgName}
                  price={shoe.price}
                  rating={shoe.rating}
                  onClick={(e) => {
                    setShoeToShow(shoe);
                    setShowDesignSpace(true);
                  }}
                />
              </Col>
            ))
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DisplaySection;
