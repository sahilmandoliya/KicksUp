import { Card, Row, Col } from "react-bootstrap";
import ReactStarsRating from "react-awesome-stars-rating";

const ShoesProductCard =({name, price, imgName, rating, onClick}) =>{
    return (
        <Card
            className="border-0 mt-2"
            style={{width: "190px"}}
            role="button"
            onClick={onClick}
        >
            <Card.Img
                height="190px"
                src={`${process.env.PUBLIC_URL}assets/images/shoes/${imgName}`}
                className="border border-1"
            />

            <Card.Body className="px-0 py-2">
                <Card.Title className="mb-0">{name}</Card.Title>
                <Row>
                    <Col>
                        <Card.Text className="small">Rs. {price}/-</Card.Text>
                    </Col>
                    <Col>
                    <ReactStarsRating value={rating} size={15}/>;
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ShoesProductCard;