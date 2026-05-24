import AboutImage from '../assets/aboutImage.jpg'
import { AboutSection } from '../components/AboutSection/AboutSection'
import { PageBanner } from '../components/PageBanner/PageBanner'
export const About = ()=>{
    return(<div>
        <PageBanner image={AboutImage} title='About Us'  currentPage='About Us'/>
        <AboutSection/>
    </div>)
}