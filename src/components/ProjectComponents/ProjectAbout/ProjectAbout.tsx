import { Container } from "react-bootstrap"
import './ProjectAbout.scss'
import '../commonStyles.scss'

type projectAboutProps={
    title:string;
    about:string;
    subtext?:string;
}
export const ProjectAbout = ({title,about,subtext}:projectAboutProps)=>{
    return (<Container className="project-section-container">
        <h1 className="project-section-title">
            {title}
        </h1>
        <h3 className="project-subtext">{subtext}</h3>
        <div className="project-about-text">
        <p>
           {about}
           </p>
        </div>
    </Container>)
}