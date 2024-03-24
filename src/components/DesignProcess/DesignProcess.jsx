import React from "react";
import { design_process } from "./content";
import Card from "./Card";
import styles from "./DesignProcess.module.scss";

const DesignProcess = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(/assets/images/processes/process_background.png)",
      }}
      className={styles.processWrapper}
    >
        
      <div className={styles.processHeader}>
        <h1>{design_process.title}</h1>
      </div>
      <div className={styles.cardsWrapper}>
        {design_process?.processes.map((process, index) => (
          <Card className={styles.card} key={index} process={process} />
        ))}
      </div>
    </div>
  );
};

export default DesignProcess;
