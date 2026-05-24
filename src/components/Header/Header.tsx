import { Container,Dropdown } from "react-bootstrap";
import CallIcon from '@mui/icons-material/Call';
import './Header.scss';
import logo from '../../assets/logo_transparent.png';
import { ContactInfo } from "./ContactInfo/ContactInfo";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { email, phoneNumber } from "../../constants";
import { CustomNavbar } from "../navbar/Navbar";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";

export const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=>{console.log(menuOpen)},[menuOpen])
    return (
        <div className="app-topnavbar">
            <div className="top_parent_nav">
                <div className="top_nav">
                    <div className="logo-section">
                        <img src={logo}/>
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
        <Dropdown.Item className="menu-options">Home</Dropdown.Item>
        <Dropdown.Item className="menu-options">About</Dropdown.Item>
        <Dropdown.Item className="menu-options">Projects</Dropdown.Item>
        <Dropdown.Item className="menu-options">Contact Us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </div>
                </div>
            </div>
            <CustomNavbar/>
        </div>
    )
}