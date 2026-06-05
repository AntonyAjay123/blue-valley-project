import { Card } from "react-bootstrap";

type CardProps = {
    image:any;
    title:string;
    text:string;
    city:string;
    buttonAction:()=>void
}
import './Project.scss'
import { CustomButton } from "../CustomButton/CustomButton";
export const ProjectCard = ({image,title,text,city,buttonAction}:CardProps)=>{
    return (
        <div className="project-card-container">
        <Card className="project-card">
            <Card.Img className="project-card-image" variant="top" src={image}/>
            <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{title}</Card.Title>
        <Card.Text className="project-card-text">
            <span className="project-card-city">
                {city}
            </span>
            <span className="project-card-description">
            <span>
                {text}
            </span>
            </span>
        </Card.Text>
      </Card.Body>
        </Card>
        <div className="project-button">
        <CustomButton text="View Project" action={buttonAction}/>
        </div>
        </div>
    )
}