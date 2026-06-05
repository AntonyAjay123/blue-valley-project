import { Container } from "react-bootstrap"
import './ProjectGallery.scss'
export const ProjectGallery = ({images}:{images:any})=>{
    return (<Container className="project-section-container">
        <h1 className="project-section-title">
            Gallery
        </h1>
        <div className="image-container">
        {images.map((image:any,index:any)=>{
            return <div className="project-image">
                <img  key={index} src={image}/>
                </div>
        })}
        </div>
        </Container>)
}