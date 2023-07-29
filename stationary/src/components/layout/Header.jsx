import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
 
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/#">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/05/00/18/pencil-2998243_1280.png"
              alt="Logo"
              className="logo"
            />
            INEXOFT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="/"
                className={
                  location.pathname == "/" ? "nav-link active" : "nav-link  "
                }
              >
                <i class="fa-solid fa-house"></i>&nbsp;Home
              </Nav.Link>
              <Nav.Link
                href="/products"
                className={
                  location.pathname == "/products"
                    ? "nav-link active  "
                    : "nav-link  "
                }
              >
                <i class="fa-brands fa-product-hunt"></i>&nbsp;Products
              </Nav.Link>
              <Nav.Link
                href="/about-us"
                className={
                  location.pathname == "/about-us"
                    ? "nav-link active"
                    : "nav-link  "
                }
              >
                <i class="fa-solid fa-circle-info"></i>&nbsp;About Us
              </Nav.Link>
              <Nav.Link
                href="/contact-us"
                className={
                  location.pathname == "/contact-us"
                    ? "nav-link active  "
                    : "nav-link  "
                }
              >
                <i class="fa-solid fa-user-large"></i>&nbsp;Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <div className="position-relative">
                <FormControl type="text" placeholder="Search" />
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
              </div>
            </Form>
            <Nav className="mr-auto">
              {" "}
              {/* Add "mr-auto" class here */}
              <Nav.Link href="/cart" className="nav-link cart-icon">
                <i class="fa-solid fa-cart-shopping fa-lg"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
