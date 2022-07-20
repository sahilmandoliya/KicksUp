import {Container, Card} from 'react-bootstrap';
import SocialIcons from "../components/SocialIcons"

const Contact = () => {
  return (
    <Container>
      <Card className="shadow p-5 pb-4 bg-body rounded mt-5 mb-4 mx-auto border-0" style={{width: "22rem"}}>
        <Card.Body>
          <Card.Title className="text-center">REACH US AT</Card.Title>
          <Card.Title className="mt-4 mb-0">support@kicksup.com</Card.Title>
          <Card.Text>
            <small>for any technical support</small>
          </Card.Text>

          <Card.Title className="mt-4 mb-0">info@kicksup.com</Card.Title>
          <Card.Text>
            <small>for more information</small>
          </Card.Text>

          <Card.Title className="mt-4 mb-0">feedback@kicksup.com</Card.Title>
          <Card.Text>
            <small>to send your feedback</small>
          </Card.Text>

          <Card.Title className="mt-4 mb-0">jobs@kicksup.com</Card.Title>
          <Card.Text>
            <small>to work with us</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <small className="d-block text-center">stay in touch</small>
      <SocialIcons iconNames={["twitter", "insta", "facebook"]} />
    </Container>
  )
}

export default Contact