import { useState } from 'react'
import './ContactUsHome.scss'
import { Container,Form,Row,Col } from 'react-bootstrap'
import { CustomButton } from '../CustomButton/CustomButton'

export const ContactUsHome = ()=>{
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
            <CustomButton text='Search' action={()=>{}}/>
          </Col>
        </Row>
      </Form>
        </Container>
    </div>)
}