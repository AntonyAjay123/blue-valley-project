import { PageBanner } from "../components/PageBanner/PageBanner"
import ProjectImage from "../assets/projects.jpg"
import { ProjectSection } from "../components/ProjectSection/ProjectSection"
import type { RootState } from "../store/store"

export const Projects = ()=>{
    console.log("here")
    return (<div>
    <PageBanner title="Projects" image={ProjectImage} currentPage="Projects"/>
    <ProjectSection/>
    </div>)
}