import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId); // Set the active link when clicked
  };
  useEffect(() => {
    const { pathname } = location;
    
    if (pathname === '/') {
      setActiveLink('main');
    } else if (pathname === '/projects') {
      setActiveLink('projects');
    } else if (pathname === '/contact') {
      setActiveLink('contact');
    } else {
      setActiveLink('');
    }
  }, [location]);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <h1>
          <b>Yll Selmani</b> Portofolio
        </h1>
      </div>
      <Navbar collapseOnSelect expand="lg" className={`${styles.navWrapper} navbar-light`} variant="light" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="ms-auto" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="ms-auto"
          >
            <Nav>
              <Nav.Item className="ms-auto">
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
              </Nav.Item>
              <Nav.Item className="ms-auto">
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
              </Nav.Item>
              <Nav.Item  className="ms-auto">
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
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
