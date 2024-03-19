import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="/dashboard" className={styles.brand}>
          APIMaker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink
              to="/dashboard"
              className="nav-link"
              style={{ marginTop: "10px" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/collections"
              className="nav-link"
              style={{ marginTop: "10px" }}
            >
              Collections
            </NavLink>
            <NavLink to="/profile" className="nav-link">
              <i className={`bi bi-person-fill ${styles.personIcon}`} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
