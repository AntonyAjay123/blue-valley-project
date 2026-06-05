import { Container,Form } from 'react-bootstrap';
import './ProjectBanner.scss'
import { useState } from 'react';
import { CustomButton } from '../../CustomButton/CustomButton';
type ProjectBannerProps = {
    image:any;
}
export const ProjectBanner = ({image}:ProjectBannerProps)=>{
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
        <CustomButton text='Submit' action={()=>{}} style = {{backgroundColor:'#581557d9'}}/>
        </Form>
            </div>
        </Container>
    </div>)
}