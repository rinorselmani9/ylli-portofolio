import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Projects.module.scss";
import ArrowUp from "./ArrowUp";
import ArrowDown from './ArrowDown'

const Card = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <img
          src={`/assets/images/projects/${project.preview_image}`}
          alt={`${project?.preview_description}`}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h5>{project?.preview_heading}</h5>
            <p>{project?.preview_description}</p>
          </div>
          <span className={styles.button} onClick={openModal}>
            <ArrowUp className={styles.arrowUp} />
          </span>
        </div>
      </div>

      <Modal
        size="lg"
        className={styles.modal}
        show={showModal}
        onHide={closeModal}
      >
        <Modal.Header className={styles.modalHeader}>
          <button className={styles.button} onClick={closeModal}>
            <ArrowDown />
          </button>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`/assets/images/projects/${project?.modal?.first_image}`}
            alt={`${project?.preview_description}`}
          />
          <div className={styles.firstContent}>
            <div className={styles.rightContent}>
              {project?.modal?.left_content?.map((content, index) => {
                return (
                  <div key={index}>
                    <h1>{content?.title}</h1>
                    <p>{content?.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.leftContent}>
              {project?.modal?.right_content?.map((content, index) => {
                return (
                  <div key={index}>
                    <h1>{content?.title}</h1>
                    <p>{content?.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src={`/assets/images/projects/${project?.modal?.second_image}`}
            alt={`${project?.preview_description}`}
          />
          <div className={styles.solutions}>
            <h1>{project?.modal?.my_solution?.title}</h1>
            <ol className={styles.solutionHeadings}>
              {project?.modal?.my_solution?.solution_steps.map(
                (solution, i) => {
                  return (
                    <li key={i}>
                      {solution?.heading}
                      <ul className={styles.solutionPoints}>
                        {solution?.bullet_points.map((point, index) => {
                          return <li key={index}>{point}</li>;
                        })}
                      </ul>
                    </li>
                  );
                }
              )}
            </ol>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
