import { useDispatch } from "react-redux"
import { AboutSection } from "../components/AboutSection/AboutSection"
import { ContactUsHome } from "../components/ContactUsHome/ContactUsHome"
import { HomeSlider } from "../components/CustomCarousel/CustomCarousel"
import { ProjectSection } from "../components/ProjectSection/ProjectSection"
import { setCurPage, setCurProject } from "../store/pageSlice"
import { useEffect } from "react"

export const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurPage('home'))
        dispatch(setCurProject(''))
    },[])
    return(
        <>
        <HomeSlider/>
        <AboutSection/>
        <ProjectSection/>
        <ContactUsHome/>
        </>
    )
}