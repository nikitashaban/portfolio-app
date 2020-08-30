import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import Link from 'next/link'

interface IAppLink {
  className: string;
  href: string
}

const AppLink: React.FC<IAppLink> = ({ children, className, href }) => {
  return <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
}


const AppNavBar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">NikitaShaban</AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink className="nav-link mr-3" href="/portfolios">Portfolios</AppLink>
            <AppLink className="nav-link mr-3" href="/forum/categories">Forum</AppLink>
            <AppLink className="nav-link mr-3" href="/cv">Cv</AppLink>

          </Nav>
          <Nav>
            <AppLink className="nav-link mr-3" href="/login">Sign In</AppLink>
            <AppLink className="mr-3 btn btn-success bg-green-2 bright" href="/register">Sign Up</AppLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
};

export default AppNavBar;
