import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Card = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <p>image</p>
      <h5>{project?.preview_heading}</h5>
      <p>{project?.preview_description}</p>
      <button onClick={openModal}>Open Modal</button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>{project?.modal?.first_image}</p>
          <div>
            <div>
              {project?.modal?.right_content?.map((content) => {
                return (
                  <div>
                    <h1>{content?.title}</h1>
                    <p>{content?.description}</p>
                  </div>
                );
              })}
            </div>
            <div>
              {project?.modal?.left_content?.map((content) => {
                return (
                  <div>
                    <h1>{content?.title}</h1>
                    <p>{content?.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p>{project?.modal?.second_image}</p>
          <div>
            <h1>{project?.modal?.my_solution?.title}</h1>
            <ol>
              {project?.modal?.my_solution?.solution_steps.map((solution) => {
                return (
                  <li>
                    {solution?.heading}
                    <ul>
                      {solution?.bullet_points.map((point) => {
                        return <li>{point}</li>;
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Card;
