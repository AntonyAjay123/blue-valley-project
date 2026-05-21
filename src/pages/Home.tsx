import { AboutSection } from "../components/AboutSection/AboutSection"
import { HomeSlider } from "../components/CustomCarousel/CustomCarousel"
import { ProjectSection } from "../components/ProjectSection/ProjectSection"

export const Home = ()=>{
    return(
        <>
        <HomeSlider/>
        <AboutSection/>
        <ProjectSection/>
        </>
    )
}