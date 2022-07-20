import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CustomRadio from "../CustomRadio";
import ReactStarsRating from 'react-awesome-stars-rating';

const DesignSection = ({
  shoeToShow,
  cartItems,
  setCartItems,
  setShowDesignSpace,
}) => {
  const variants = ["variant1", "variant2", "variant3"];
  const sizes = [7, 8, 9, 10];

  const [front, setFront] = useState(variants[0]);
  const [middle, setMiddle] = useState(variants[0]);
  const [back, setBack] = useState(variants[0]);
  const [sole, setSole] = useState(variants[0]);
  const [size, setSize] = useState(sizes[1]);

  const addToCartHandler = () => {
    const existItem = cartItems.find(
      (item) => item.itemId === shoeToShow.id && item.size === size
    );

    if (existItem === undefined) {
      const updatedCartItems = [
        ...cartItems,
        {
          itemId: shoeToShow.id,
          name: shoeToShow.name,
          brand: shoeToShow.brand,
          imgName: shoeToShow.imgName,
          price: shoeToShow.price,
          size: size,
        },
      ];

      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  return (
    <Card className="border-0 shadow w-100 px-4 pt-3 pb-2">
      <Card.Body className="py-2" style={{ paddingLeft: "3rem" }}>
        <Row className="position-relative mb-3">
          <span
            className="position-absolute"
            style={{ left: "-3rem", top: "-0.2rem" }}
          >
            <i
              className="fa-solid fa-angle-left fa-2x"
              role="button"
              onClick={() => setShowDesignSpace(false)}
            ></i>
          </span>

          <Card.Title className="fw-normal">Your Design Space</Card.Title>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={9} xl={6}>
            <Card.Img
              src={`${process.env.PUBLIC_URL}/assets/images/shoes/${shoeToShow.imgName}`}
              style={{
                aspectRatio: "64/61",
              }}
            />
          </Col>

          <Col sm={12} md={12} lg={2} xl={2}>
            <Row className="h-100">
              <Col sm={4} md={4} lg={12} xl={12}>
                <Card.Img
                  src={`${process.env.PUBLIC_URL}/assets/images/shoes/${shoeToShow.imgName}`}
                />
              </Col>

              <Col sm={4} md={4} lg={12} xl={12}>
                <Card.Img
                  src={`${process.env.PUBLIC_URL}/assets/images/shoes/${shoeToShow.imgName}`}
                />
              </Col>

              <Col sm={4} md={4} lg={12} xl={12}>
                <Card.Img
                  src={`${process.env.PUBLIC_URL}/assets/images/shoes/${shoeToShow.imgName}`}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={4}>
            <h4 className="fw-normal mb-0">{shoeToShow.name}</h4>
            <p className="fw-light mb-2">by {shoeToShow.brand}</p>

            <ReactStarsRating value={shoeToShow.rating} size={20} />
            <p style={{ fontSize: "0.7rem" }}>80 reviews</p>

            <small>Rs. {shoeToShow.price}/-</small>
            <p style={{ fontSize: "0.7rem" }}>
              Get an exclusive 20% off shopping with HDFC bank
            </p>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Front
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={front}
                  onChange={(e) => setFront(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Middle
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={middle}
                  onChange={(e) => setMiddle(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Back
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={back}
                  onChange={(e) => setBack(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Sole
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={variants}
                  defaultValue={sole}
                  onChange={(e) => setSole(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="my-2 d-flex align-items-center">
              <Col sm={12} md={6} lg={4} xl={3} className="pe-0">
                Size
              </Col>
              <Col sm={12} md={10} lg={8} xl={9}>
                <CustomRadio
                  options={sizes}
                  defaultValue={size}
                  showValue={true}
                  onChange={(e) => setSize(e.target.value)}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <div className="d-flex gap-3 mt-2 mb-3">
            <span>Rate product</span>
            <ReactStarsRating value={0} size={20}/>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-dark" size="sm">
              Share Design
            </Button>
            <Button variant="dark" size="sm" onClick={addToCartHandler}>
              Add To Cart
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DesignSection;
