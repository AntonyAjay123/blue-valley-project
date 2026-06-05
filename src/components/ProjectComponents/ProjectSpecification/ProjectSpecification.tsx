import { Container } from 'react-bootstrap';
import './ProjectSpecification.scss'
type iconprops = {
    icon:any;
    subtitle:string
}
type projectSpecificationProps={
    icons:iconprops[]
}

export const ProjectSpecification = ({icons}:projectSpecificationProps)=>{
    return (<div className="project-specification-container">
        <h1 className='project-section-title specification-title'> Specification</h1>
        <Container className='specification-icons-container'>
        {icons.map((item,index)=>{
            const Icon = item.icon
            return (<div className='icon-container'><Icon key={index} sx={{
          color: "#FFEA6C",
          fontSize: "120px",
        }}/>
        <p>{item.subtitle}</p>
        </div>)
        })}
        </Container>
    </div>)
}