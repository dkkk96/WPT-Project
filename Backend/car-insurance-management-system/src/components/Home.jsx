import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Container, Carousel, Nav, Navbar } from "react-bootstrap";
import image from "../Images/Have you Insured Your Drive.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


export function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/buy-now">
                <Nav.Link>Buy Now</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/purchase-policy">
                <Nav.Link>Purchase Policy</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img src={image} fluid />
      <hr class="hr" />
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src="https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI=" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://media.istockphoto.com/id/1150816324/photo/motor-or-car-insurance-claim-form-composition.jpg?s=612x612&w=0&k=20&c=s6AsIU9EwaPH-dO2IZxANNqj9tIs80Vwj5ZuMF38ogY=" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br /><br />
      <hr />
      <br /><br />
      <MDBContainer>
        <h1 className="mt-2">Why To Choose Us?</h1>
        <MDBRow>
          <MDBCol size="md">
            <br />
            <h6>
              <strong>Competitive Rates</strong>
            </h6>
            <p>
              We understand the importance of value for your money. Our company
              offers competitive rates without compromising on coverage quality.
              By analyzing a range of options, we strive to provide
              cost-effective plans that offer extensive protection, ensuring you
              get the best deal without sacrificing on safety.
            </p>
          </MDBCol>
          <MDBCol size="md">
            <br />
            <h6>
              <strong>Comprehensive Coverage Options</strong>
            </h6>
            <p>
              Our insurance plans aren't just about meeting basic requirements;
              they're designed to exceed expectations. We offer a wide array of
              coverage options that cater to various needs and situations.
              Whether it's basic coverage, additional riders, or specialized
              policies, we have comprehensive options to ensure you're
              adequately protected in any scenario.
            </p>
          </MDBCol>
          <MDBCol size="md">
            <br />
            <h6>
              <strong>Trust and Reliability</strong>
            </h6>
            <p>
              When you choose us, you're choosing a company built on trust and
              reliability. Our track record speaks for itself, demonstrating our
              commitment to being there when our customers need us the most. You
              can count on us to deliver on promises, handle claims efficiently,
              and provide consistent support, fostering a relationship based on
              trust and dependability.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr class="hr" />
      <br />
      <br />
      <div>
        <Link to="/buy-now">Buy Now</Link>
      </div>
      <div>
        <Link to="/purchase-policy">Purchase Policy</Link>
      </div>
    </Container>
  );
}
