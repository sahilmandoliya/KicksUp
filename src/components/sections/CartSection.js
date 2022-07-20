import { Card, Button, Row, Col } from "react-bootstrap";
import CartItemCard from "../CartItemCard";

const CartSection = ({ cartItems, setCartItems }) => {
  const removeFromCartHandler = (cartItemId, size) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.itemId === cartItemId && item.size === size)
    );

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <Card className="border-0 shadow bg-body w-100 px-2 pt-3">
      <Card.Body className="px-0 py-2">
        <Card.Title className="d-flex justify-content-between mx-3">
          CART
          <i className="fa-solid fa-bag-shopping"></i>
        </Card.Title>

        <div
          className={`d-flex flex-column${
            cartItems.length === 0 ? " justify-content-center" : ""
          } mt-3 mb-4`}
          style={{ height: "57.7vh", overflowX: "hidden", overflowY: "auto" }}
        >
          {cartItems.length === 0 ? (
            <p className="text-center">What's stopping you, designer?</p>
          ) : (
            cartItems.map((item) => (
              <CartItemCard
                key={`${item.itemId}-s${item.size}`}
                cartItem={item}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <Row className="mx-2">
          <Col sm={12} md={8} lg={5} xl={4} className="pe-0 mb-1">
            <span
              className={`fw-light${
                cartItems.length === 0 ? " text-muted" : ""
              }`}
              style={{ cursor: cartItems.length === 0 ? "auto" : "pointer" }}
            >
              <i className="fa-solid fa-location-dot me-2"></i>
              <small>Home</small>
            </span>
          </Col>
          <Col sm={12} md={10} lg={7} xl={4.5} className="pe-0">
            <span
              className={`fw-light${
                cartItems.length === 0 ? " text-muted" : ""
              }`}
              style={{ cursor: cartItems.length === 0 ? "auto" : "pointer" }}
            >
              <i className="fa-solid fa-calendar me-2"></i>
              <small>Select date</small>
            </span>
          </Col>
        </Row>

        <Button
          variant="dark"
          size="sm"
          disabled={cartItems.length === 0}
          className="d-block mt-4 mb-2 mx-auto"
        >
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartSection;
