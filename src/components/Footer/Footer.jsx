import React from "react";
import styles from "./Footer.module.scss";
import ArrowUp from "../Projects/ArrowUp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <div className={styles.footerWrapper}>
      <h1>
        <b>Have an idea?</b>
      </h1>
      <div className={styles.arrowContainer} onClick={handleClick}>
        <p className={styles.talk}>Let's Talk</p>
        <ArrowUp />
      </div>
    </div>
  );
};

export default Footer;
