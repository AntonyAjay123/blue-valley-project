import { Button, Container, Form } from "react-bootstrap"
import './ContactPage.scss'
import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from "@mui/icons-material/Place";
import { address, email, phoneNumber } from "../../constants";

export const ContactPage = ()=>{
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    return (<Container className="contact-container">
        <div className="contact-input-container">
            <h1 className="section-header"> SEND US A MESSAGE</h1>
            <Form className="contact-form">
        
        <Form.Group className="mb-3">
          <Form.Label className="contact-input-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-input-label">E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-input-label">Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-input-label">Leave a Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input"
          />
        </Form.Group>
        </Form>
        <CustomButton text="Submit" action={()=>{}}/>
        </div>
        <div className="contact-details-section">
            <h1 className="section-header">GET IN TOUCH</h1>
            <div className="contact-detail-one">
                <CallIcon/>
                <span className="contact">{phoneNumber}</span>
            </div>
            <div className="contact-detail-one">
                <EmailIcon/>
                <span className="contact">{email}</span>
            </div>
            <div className="contact-detail-one">
                <PlaceIcon/>
                <span className="contact">{address}</span>
            </div>
        </div>
    </Container>)
}