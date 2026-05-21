import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import './Navbar.scss'

export const CustomNavbar=()=>{
    return (
            <Container className="nav_items_parent desktop-only">
                <Container className="nav-items">
                    <span className="nav-option">Home</span>
                    <span className="nav-option">About</span>
                    <span className="nav-option">Projects</span>
                    <span className="nav-option">Contact</span>
                </Container>
            </Container>
    )
}