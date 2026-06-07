import { Container, Row, Col } from "react-bootstrap";
import {
  SchoolOutlined,
  LocalHospitalOutlined,
  BusinessOutlined,
  TrendingUpOutlined
} from "@mui/icons-material";

import "./ProjectDetails.scss";

export const ProjectDetails = () => {
  return (
    <Container className="project-section-container why-madhuban">
      <h1 className="project-section-title">
        Why Madhuban
      </h1>

      <div className="project-about-text">
        <p>
          Strategically located near educational institutions,
          healthcare facilities and emerging IT hubs, making it an
          ideal investment destination.
        </p>
      </div>

      <Row className="g-4 mt-4">
        <Col md={6}>
          <div className="feature-card">
            <SchoolOutlined className="feature-icon" />
            <h4>Educational Institutions</h4>

            <ul>
              <li>AMITY University</li>
              <li>GITAM University</li>
              <li>Harrow International School</li>
              <li>Cambridge Institute of Technology</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="feature-card">
            <LocalHospitalOutlined className="feature-icon" />
            <h4>Healthcare Centres</h4>

            <ul>
              <li>Manipal Hospital</li>
              <li>Sri Sathya Sai Hospital</li>
              <li>Ramaiah Leena Hospital</li>
              <li>Akash Hospital</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="feature-card">
            <BusinessOutlined className="feature-icon" />
            <h4>IT Hubs & Business Parks</h4>

            <ul>
              <li>Foxconn Manufacturing Plant</li>
              <li>Brigade World Trade Center</li>
              <li>Exide Energy</li>
              <li>JSW Renewable Energy</li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <div className="feature-card">
            <TrendingUpOutlined className="feature-icon" />
            <h4>Future Growth Potential</h4>

            <p>
              Strong infrastructure development and industrial
              investments are expected to drive substantial land value
              appreciation in the coming years.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};