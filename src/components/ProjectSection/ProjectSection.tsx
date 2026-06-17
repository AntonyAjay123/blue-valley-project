import { Container } from "react-bootstrap";
import NorthTown from '../../assets/north_town_image.jpg'
import Madhuban from '../../assets/madhuban_image.jpg'
import { ProjectCard } from "./ProjectCard";
import './Project.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurPage, setCurProject } from "../../store/pageSlice";
export const ProjectSection = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const projects = [
        {
            id:1,
            image:NorthTown,
            projectName:'North Town',
            text:'Gated community with villa plots near Bengaluru International Airport',
            city:'Devenahalli- Doddabalapur Road',
            action:()=>{
                dispatch(setCurPage('projects'))
                dispatch(setCurProject('northtown'))
                navigate('/projects/northtown')
            }
        },
        {
            id:2,
            image:Madhuban,
            projectName:'Madhuban',
            text:'Premium gated community with villa plots near Bengaluru International Airport',
            city:'DEVANAHALLI TOWN, BANGALORE',
            action:()=>{
                dispatch(setCurPage('projects'))
                dispatch(setCurProject('madhuban'))
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
                    title={project.projectName} text={project.text} city={project.city} buttonAction={project.action}/>)
            })}
        </div>
        </Container>
    )
}