import { Container,Form } from 'react-bootstrap';
import './ProjectBanner.scss'
import { useState } from 'react';
import { CustomButton } from '../../CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../store/toastSlice';
type ProjectBannerProps = {
    image:any;
}
export const ProjectBanner = ({image}:ProjectBannerProps)=>{
  const dispatch = useDispatch()
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

        
      
    return(<div className='project-banner' style={{backgroundImage:`url(${image})`}}>
        <Container>
            <div className='contact-form'>
                <span>Quick Enquiry</span>
                <Form >
        
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="project-contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="project-contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="project-contact-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="project-contact-input"
          />
        </Form.Group>
        <CustomButton text='Submit' action={handleSubmit} style = {{backgroundColor:'#581557d9'}}/>
        </Form>
            </div>
        </Container>
    </div>)
}