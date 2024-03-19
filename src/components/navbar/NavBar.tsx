import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <section className={styles.navbar}>
      <NavLink to="/dashboard" className={styles.navbar_brand}>
        APIMaker
      </NavLink>
      <div className={styles.navbar_links}>
        <NavLink to="/dashboard" className={styles.navbar_navlink}>
          Dashboard
        </NavLink>
        <NavLink to="/collections" className={styles.navbar_navlink}>
          Collections
        </NavLink>
        <NavLink to="/profile" className={styles.navbar_navlink_icon}>
          <i className={`bi bi-person-fill ${styles.navbar_navlink_icon}`} />
        </NavLink>
      </div>
      {/* ; */}
    </section>
  );
};

export default NavBar;
