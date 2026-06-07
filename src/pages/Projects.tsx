import { PageBanner } from "../components/PageBanner/PageBanner"
import ProjectImage from "../assets/projects.jpg"
import { ProjectSection } from "../components/ProjectSection/ProjectSection"
import type { RootState } from "../store/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCurPage, setCurProject } from "../store/pageSlice"

export const Projects = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurPage('projects'))
        dispatch(setCurProject(''))
    },[])
    console.log("here")
    return (<div>
    <PageBanner title="Projects" image={ProjectImage} currentPage="Projects"/>
    <ProjectSection/>
    </div>)
}