import './ProjectHeader.scss'
import { Navbar,Nav,Container } from 'react-bootstrap'
import logo from '../../assets/akshayaLogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurProject } from '../../store/pageSlice'
export const ProjectHeader = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
    return(<div className="project-header">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='project-header-container'>
        <Navbar.Brand onClick={()=>{dispatch(setCurProject(''));navigate("/")}}>
            <div className="logo-section">
                <img src={logo}/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="project-nav-options">
            <Nav.Link className="project-nav-option"  onClick={() => scrollToSection("project-banner")}>Home</Nav.Link>
            <Nav.Link className="project-nav-option"  onClick={() => scrollToSection("about-project")}>About Project</Nav.Link>
            <Nav.Link className="project-nav-option" onClick={() => scrollToSection("gallery-project")}>Gallery</Nav.Link>
            <Nav.Link className="project-nav-option" onClick={() => scrollToSection("specification-project")}>Specification</Nav.Link>
            <Nav.Link className="project-nav-option" onClick={() => scrollToSection("layoutPlan-project")}>Layout Plan</Nav.Link>
            <Nav.Link className="project-nav-option" onClick={() => scrollToSection("location-project")}>Location Map</Nav.Link>
            <Nav.Link className="project-nav-option" onClick={() => scrollToSection("Contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>)
}