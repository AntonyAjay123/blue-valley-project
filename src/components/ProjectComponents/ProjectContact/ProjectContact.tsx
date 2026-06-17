import { Container, Row, Col, Form, Button } from "react-bootstrap";

import EmailImage from "../../../assets/message.png";
import MobileImage from "../../../assets/mobile.png";
import AddressImage from "../../../assets/location.png";

import "./ProjectContact.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../../store/toastSlice";

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
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
  }
  const validateForm = () => {
              const { name, email, mobile, message } = formData;
               if (!name.trim()) {
                console.log("checked name")
                dispatch(showToast({ message: "Name is required", variant: "danger" }));
                return false;
              }
            
              if (!email.trim()) {
                dispatch(showToast({ message: "Email is required", variant: "danger" }));
                return false;
              }
            
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                dispatch(showToast({ message: "Invalid email address", variant: "danger" }));
                return false;
              }
            
              if (!mobile.trim()) {
                dispatch(showToast({ message: "Mobile is required", variant: "danger" }));
                return false;
              }
            
              if (!message.trim()) {
                dispatch(showToast({ message: "Message cannot be empty", variant: "danger" }));
                return false;
              }
            
              return true;
            };
            const handleSubmit = async (e:any)=>{
              e.preventDefault();
              if(!validateForm())return
              try{
                const res = await fetch("/api/enquiry",{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json"
                  },
                  body: JSON.stringify({
                    name:formData.name,
                    email:formData.email,
                    mobile:formData.mobile,
                    message:formData.message
                  })
                })
                if(!res.ok){
                  throw new Error("Failed to send enquiry");
                }
                dispatch(
              showToast({
                message: "Enquiry sent successfully!",
                variant: "success",
              })
            );
            setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    }
    catch(error){
      dispatch(
        showToast({
          message: "Something went wrong. Please try again.",
          variant: "danger",
        })
      );
    }
  }
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
            <Form className="contact-form" onSubmit={handleSubmit}>
              <div className="name-phone">
                <Form.Control
                name="name"
                value={formData.name}
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />

                <Form.Control
                name="mobile"
                value={formData.mobile}
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>

              <Form.Control
              name="email"
              value={formData.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="mb-4"
              />

              <Form.Control
              name="message"
              value={formData.message}
                as="textarea"
                rows={4}
                placeholder="Enter a Message"
                onChange={handleChange}
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