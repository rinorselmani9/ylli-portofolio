import React from "react";
import Projects from "../../components/Projects/Projects";
import styles from "./ProjectsPage.module.scss";

const ProjectsPage = () => {
  return (
    <div className={styles.projectPage}>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
