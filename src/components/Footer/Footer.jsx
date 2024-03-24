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
        <h1 className={styles.talk}>Let's Talk</h1>
        <ArrowUp />
      </div>
    </div>
  );
};

export default Footer;
