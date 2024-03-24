import React from "react";
import { projects } from "./content";
import Card from "./Card";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div id="projects" className={styles.projectsWrapper}>
      {projects?.map((project, index) => (
        <Card className={styles.cardWrapper}  key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
