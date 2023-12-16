import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return(
    <Navbar expand="lg"  bg="info" data-bs-theme="dark">
      <Container>
        <LinkContainer to = '/'>
        <Navbar.Brand>InsureDrive</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/customertable">
                <Nav.Link>Details</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog/is-it-safe-to-buy-car-insurance-online">
                <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
                <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
          </Nav>
            <LinkContainer to = '/login'>
              <Button variant="light">Login</Button>
              </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}