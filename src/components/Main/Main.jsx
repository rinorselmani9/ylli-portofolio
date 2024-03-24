import React from "react";
import { main_content } from "./content";
import Projects from "../Projects/Projects";
import DesignProcess from "../DesignProcess/DesignProcess";
import styles from "./Main.module.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div id="main" className={styles.main}>
        <p className={styles.hello}>{main_content.first_heading} 👋</p>
        <h1 className={styles.header}>
          {" "}
          I’m{" "}
          <b>
            Yll Sel<span>man</span>i
          </b>
        </h1>
        <h2 className={styles.description}>{main_content.description}</h2>
        <div className={styles.buttonWrapper}>
          <Link to="/contact" className={styles.button}>
            {main_content.button_text}
          </Link>
        </div>
        <Projects />
      </div>
      <DesignProcess />
    </>
  );
};

export default Main;
