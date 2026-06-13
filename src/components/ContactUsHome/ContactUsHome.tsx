import { useState } from 'react'
import './ContactUsHome.scss'
import { Container,Form,Row,Col } from 'react-bootstrap'
import { CustomButton } from '../CustomButton/CustomButton'
import { useDispatch } from 'react-redux'
import { showToast } from '../../store/toastSlice'
export const ContactUsHome = ()=>{
  const dispatch = useDispatch()
    const [formData,setFormData] = useState({
        'name':'',
        'email':'',
        'mobile':'',
        'message':''
    })
    const handleChange=(e:any)=>{
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
    const handleSubmit = async ()=>{
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

    // clear form after success
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
    return(<div className='contact-us-section'>
        <Container className='contact-us-section-container'>
            <div className='contact-us-title'>
                <h2>Quick <span>Enquiry</span></h2>
            </div>
            <Form onSubmit={()=>{}}>
        {/* First Row */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Label className='form-label'>Name</Form.Label>

              <Form.Control
              className='form-input'
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label className='form-label'>Email</Form.Label>

              <Form.Control
              className='form-input'
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label className='form-label'>Mobile</Form.Label>

              <Form.Control
              className='form-input'
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="align-items-end">
          <Col md={8}>
            <Form.Group>
              <Form.Label className='form-label'>Message</Form.Label>

              <Form.Control
              className='form-input'
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <CustomButton text='Search' action={handleSubmit}/>
          </Col>
        </Row>
      </Form>
        </Container>
    </div>)
}