import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import "./ProjectLayout.scss";

export const ProjectLayout = ({ image }: { image: string }) => {
  const [show, setShow] = useState(false);

  return (
    <Container className="project-layout-container">
      <h1 className="project-section-title layout-title">
        Layout Plan
      </h1>

      <img
        className="layout-preview"
        src={image}
        alt="Layout Plan"
        onClick={() => setShow(true)}
      />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="xl"
        className="layout-modal"
      >
        <Modal.Body>
          <img
            className="layout-full-image"
            src={image}
            alt="Layout Plan"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};