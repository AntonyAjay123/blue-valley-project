import { useState } from "react";
import { Container, Modal, Carousel } from "react-bootstrap";
import "./ProjectGallery.scss";

export const ProjectGallery = ({ images }: { images: string[] }) => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setShow(true);
  };

  return (
    <Container className="project-section-container">
      <h1 className="project-section-title">
        Gallery
      </h1>

      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="project-image"
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
        className="gallery-modal"
      >
        <Modal.Body>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            interval={null}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="carousel-image"
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};