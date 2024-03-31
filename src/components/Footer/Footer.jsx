import React from "react";
import styles from "./Footer.module.scss";
import ArrowUp from "../Projects/ArrowUp";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <h1>
        <b>Have an idea?</b>
      </h1>
      <div className={styles.arrowContainer}>
        <p className={styles.talk}>Let's Talk</p>
        <ArrowUp />
      </div>
    </div>
  );
};

export default Footer;
