import './ProjectHeader.scss'
import { Navbar,Nav,Container } from 'react-bootstrap'
import logo from '../../assets/website_logo.jpeg'
export const ProjectHeader = ()=>{
    return(<div className="project-header">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='project-header-container'>
        <Navbar.Brand href="#home">
            <div className="logo-section">
                <img src={logo}/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="project-nav-options">
            <Nav.Link className="project-nav-option" href="#home">Home</Nav.Link>
            <Nav.Link className="project-nav-option" href="#about-project">About Project</Nav.Link>
            <Nav.Link className="project-nav-option" href="#gallery-project">Gallery</Nav.Link>
            <Nav.Link className="project-nav-option" href="#specification-project">Specification</Nav.Link>
            <Nav.Link className="project-nav-option" href="#layoutPlan-project">Layout Plan</Nav.Link>
            <Nav.Link className="project-nav-option" href="#location-project">Location Map</Nav.Link>
            <Nav.Link className="project-nav-option" href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>)
}