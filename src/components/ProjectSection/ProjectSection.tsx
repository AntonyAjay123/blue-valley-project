import { Container } from "react-bootstrap";
import NorthTown from '../../assets/northtown.jpg'
import Madhuban from '../../assets/madhuban.png'
import { ProjectCard } from "./ProjectCard";
import './Project.scss'
import { useNavigate } from "react-router-dom";
export const ProjectSection = ()=>{
    const navigate = useNavigate()
    const projects = [
        {
            id:1,
            image:NorthTown,
            projectName:'North Town',
            text:'Villa Plots at the misty foot of Nandi Hills, Bengaluru',
            city:'DODDABALLAPURA ROAD, BANGALORE',
            action:()=>{
                navigate('/projects/northtown')
            }
        },
        {
            id:2,
            image:Madhuban,
            projectName:'Madhuban',
            text:'Premium gated community with villa plots near bangalore internal airport',
            city:'DEVANAHALLI TOWN, BANGALORE',
            action:()=>{
                navigate('/projects/madhuban')
            }
        }
    ]

    return (
        <Container className="projects-container">
            <h3 className="projects-header">Projects</h3>
            <div className="project-section">
            {projects.map((project)=>{
                return (<ProjectCard key={project.id} image={project.image}
                    title={project.projectName} text={project.text} city={project.city} buttonAction={()=>{}}/>)
            })}
        </div>
        </Container>
    )
}