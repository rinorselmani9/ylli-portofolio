import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId); // Set the active link when clicked
  };
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <h1><b>Yll Selmani</b> Portofolio</h1>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.navWrapper}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/"
                className={
                  activeLink === "main"
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={() => handleLinkClick("main")}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={
                  activeLink === "projects"
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={
                  activeLink === "contact"
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
