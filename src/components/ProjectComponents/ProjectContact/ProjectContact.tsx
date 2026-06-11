import { Container, Row, Col, Form, Button } from "react-bootstrap";

import EmailImage from "../../../assets/message.png";
import MobileImage from "../../../assets/mobile.png";
import AddressImage from "../../../assets/location.png";

import "./ProjectContact.scss";

type ContactProps = {
  email: string;
  address: string;
  phoneNo: string;
};

export const ProjectContact = ({
  email,
  address,
  phoneNo,
}: ContactProps) => {
  return (
    <section id="contact">
      <Container className="project-section-container project-contact-container">
        <h1 className="project-section-title">
          Contact Information
        </h1>

        <Row className="contact-wrapper">
          {/* Left Side */}
          <Col lg={5} md={12}>
            <div className="contact-info">
              <div className="contact-item">
                <img src={AddressImage} alt="address" />
                <p>{address}</p>
              </div>

              <div className="contact-item">
                <img src={MobileImage} alt="mobile" />
                <a href={`tel:${phoneNo}`}>{phoneNo}</a>
              </div>

              <div className="contact-item">
                <img src={EmailImage} alt="email" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={7} md={12}>
            <Form className="contact-form">
              <div className="name-phone">
                <Form.Control
                  type="text"
                  placeholder="Name"
                />

                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-4"
              />

              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter a Message"
                className="mb-4"
              />

              <Button type="submit" className="submit-btn">
                SUBMIT
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};