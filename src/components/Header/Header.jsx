import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId); // Set the active link when clicked
  };
  useEffect(() => {
    const { pathname } = location;

    if (pathname === "/") {
      setActiveLink("main");
    } else if (pathname === "/projects") {
      setActiveLink("projects");
    } else if (pathname === "/contact") {
      setActiveLink("contact");
    } else {
      setActiveLink("");
    }
  }, [location]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <p className={styles.logoText}>
          <b>Yll Selmani</b> Portofolio
        </p>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${styles.navWrapper} navbar-light`}
        variant="light"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="ms-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="ms-auto">
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
              <Nav.Item className="ms-auto">
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
