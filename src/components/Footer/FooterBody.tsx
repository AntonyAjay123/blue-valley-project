import { Container } from "react-bootstrap"
import './FooterHeader.scss'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCurPage, setCurProject } from "../../store/pageSlice"

export const FooterBody = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleProjectClick = (projectName)=>{
        dispatch(setCurPage('projects'))
        dispatch(setCurProject(projectName))
        navigate(`/projects/${projectName}`)
    }
    return <Container className="footer-body-container">
        <div className="footer-body-list">
            <h4 className="footer-body-title">Quick Links</h4>
            <div className="footer-body-content">
            <p onClick={()=>handleProjectClick("northtown")}><span className="content-links clickable">North Town </span></p>
            <p onClick={()=>handleProjectClick("madhuban")}><span className="content-links clickable">Madhuban</span></p>
            </div>
        </div>
        <div className="footer-body-list">
            <h4 className="footer-body-title">Useful Links</h4>
            <div className="footer-body-content">
            <p><span className="content-links clickable" onClick={()=>navigate('/')}>Home </span></p>
            <p><span className="content-links clickable" onClick={()=>navigate('/about')}>About</span></p>
            <p><span className="content-links clickable" onClick={()=>navigate('/projects')}>Projects</span></p>
            <p><span className="content-links clickable" onClick={()=>navigate('/contact')}>Contact Us</span></p>
            </div>
        </div>
        <div className="footer-body-list">
            <h4 className="footer-body-title">Opening Hours</h4>
            <div className="footer-body-content">
            <p><span className="content-links">Mon - Fri :9.30 am - 6.30 pm </span></p>
            <p><span className="content-links">Sat :9.30 am - 6.30 pm</span></p>
            <p><span className="content-links">Sun :9.30 am - 6.30 pm</span></p>
            <p><span className="content-links">Government Holiday :Occasionally</span></p>
            </div>
        </div>
    </Container>
}