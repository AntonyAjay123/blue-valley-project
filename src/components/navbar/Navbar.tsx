import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import './Navbar.scss'
import { useNavigate } from "react-router-dom";

export const CustomNavbar=()=>{
    const navigate = useNavigate()
    return (
            <Container className="nav_items_parent desktop-only">
                <Container className="nav-items">
                    <span className="nav-option" onClick={()=>navigate('/')}>Home</span>
                    <span className="nav-option" onClick={()=>navigate('/about')}>About</span>
                    <span className="nav-option" onClick={()=>navigate('/projects')}>Projects</span>
                    <span className="nav-option" onClick={()=>{navigate('contact')}}>Contact</span>
                </Container>
            </Container>
    )
}