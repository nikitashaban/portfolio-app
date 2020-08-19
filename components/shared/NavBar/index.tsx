import React from "react";

import { Nav, NavDropdown, Navbar } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold">NikitaShaban</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link className="mr-3">Portfolios</Nav.Link>
            <Nav.Link className="mr-3"> Forum</Nav.Link>
            <Nav.Link className="mr-3"> Cv</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="mr-3"> Sign Up</Nav.Link>
            <Nav.Link className="mr-3"> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
