import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="black" expand="lg" collapseOnSelect>
        <div className="mainContainer py-3">
          <LinkContainer to="/">
            <div>
              <Navbar.Brand
                style={{
                  fontWeight: 700,
                  fontSize: "2.2rem",
                  color: "#354b66",
                  cursor: "pointer",
                }}
              >
                Vaccine Store
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          </LinkContainer>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="leftLogin">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart" />
                    Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
