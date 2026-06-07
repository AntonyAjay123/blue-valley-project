import { Button, Container, Form } from "react-bootstrap"
import './ContactPage.scss'
import { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from "@mui/icons-material/Place";
import { address, email, phoneNumber } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../store/toastSlice";
import type { RootState } from "../../store/store";
export const ContactPage = ()=>{
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const dispatch = useDispatch();
  // // const message = useSelector((state:RootState)=>state.toast.message)
  // // useEffect(()=>{
  // //   console.log("message changed")
  // // },[message])
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
const handleSubmit = ()=>{
  console.log("here in submit")
  if(!validateForm())return
}
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}
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
        <CustomButton text="Submit" action={handleSubmit}/>
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