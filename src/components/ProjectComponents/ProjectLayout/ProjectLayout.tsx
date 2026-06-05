import { Container } from "react-bootstrap"
import './ProjectLayout.scss'
export const ProjectLayout = ({image}:{image:any})=>{
    return(<Container className="project-layout-container">
        <h1 className="project-section-title layout-title">Layout Plan</h1>
        <img src={image}/>
    </Container>)
}