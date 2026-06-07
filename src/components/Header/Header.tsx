import {Dropdown } from "react-bootstrap";
import CallIcon from '@mui/icons-material/Call';
import './Header.scss';
import logo from '../../assets/logo_transparent.png';
import { ContactInfo } from "./ContactInfo/ContactInfo";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

import { email, phoneNumber } from "../../constants";
import { CustomNavbar } from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()
    useEffect(()=>{console.log(menuOpen)},[menuOpen])
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90); // adjust height
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <div className={`app-topnavbar ${scrolled ? "scrolled" : ""}`}>
            <div className="top_parent_nav">
                <div className="top_nav">
                    <div className="logo-section">
                        <img src={logo} onClick={()=>navigate("/")}/>
                    </div>
                    <div className="info_section desktop-only">
                        {/* <div className="info_top">
                            <div>
                            <CallIcon fontSize="large"/>
                            </div>
                            <div className="top_info">
                                <h5>Phone Number</h5>
                            </div>
                        </div> */}
                        <div className="card-wrapper">
                        <ContactInfo icon={<CallIcon fontSize="large"/>} label="Phone Number" info={phoneNumber}/>
                        <ContactInfo icon={<EmailIcon fontSize="large"/>} label="Email Address" info={email}/>
                        </div>
                    </div>
                    <div className="hamburger-menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <Dropdown>
      <Dropdown.Toggle variant="success" className="hamburger-toggle" id="dropdown-basic">
        <MenuIcon fontSize="large"/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="menu-options" onClick={()=>navigate("/")}>Home</Dropdown.Item>
        <Dropdown.Item className="menu-options" onClick={()=>navigate("/about")}>About</Dropdown.Item>
        <Dropdown.Item className="menu-options" onClick={()=>navigate("/projects")}>Projects</Dropdown.Item>
        <Dropdown.Item className="menu-options" onClick={()=>navigate("/contact")}>Contact Us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </div>
                    {scrolled && (
            <div className="merged-nav desktop-only">
              <span className="nav-option" onClick={()=>navigate("/")} >Home</span>
              <span className="nav-option"  onClick={()=>navigate("/about")}>About</span>
              <span className="nav-option" onClick={()=>navigate("/projects")}>Projects</span>
              <span className="nav-option"  onClick={()=>navigate("/contact")}>Contact</span>
            </div>
          )}
                </div>
            </div>
            {!scrolled && <CustomNavbar/>}
        </div>
    )
}