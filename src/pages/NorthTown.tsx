import { ProjectBanner } from "../components/ProjectComponents/ProjectBanner/ProjectBanner"
import NorthTownImage from '../assets/northtown.jpg'
import LayoutPlan from '../assets/northtown_images/layout/layoutPlan.jpg'
import { ProjectAbout } from "../components/ProjectComponents/ProjectAbout/ProjectAbout"
import { ProjectGallery } from "../components/ProjectComponents/ProjectGallery/ProjectGallery"
import { ProjectSpecification } from "../components/ProjectComponents/ProjectSpecification/ProjectSpecification"
import AddRoadIcon from '@mui/icons-material/AddRoad';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import CableIcon from '@mui/icons-material/Cable';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ForestIcon from '@mui/icons-material/Forest';
import { ProjectLayout } from "../components/ProjectComponents/ProjectLayout/ProjectLayout"
import { northTownAbout } from "../constants"
import LocationMap from '../assets/northtown_images/layout/locationMap.jpg'
import { ProjectLocation } from "../components/ProjectComponents/ProjectLocation/ProjectLocation"

export const NorthTown = ()=>{
    const images = Object.values(
        import.meta.glob('../assets/northtown_images/*.{png,jpg,jpeg,svg}', {
            eager: true,
  })
).map((module: any) => module.default)
  const icons = [
    {
        icon:AddRoadIcon,
        subtitle:'Tar Road'
    },
    {
        icon:CableIcon,
        subtitle:'Underground Cabling'
    },
    {
        icon:LineStyleIcon,
        subtitle:'All-Round Compound Wall'
    },
    {
        icon:ThunderstormIcon,
        subtitle:'Rain Water Harvesting'
    },
    {
        icon:WaterDropIcon,
        subtitle:'Overhead Tank and Sumps'
    },
    {
        icon:ForestIcon,
        subtitle:'Tree Lined Avenues'
    },
    {
        icon:SsidChartIcon,
        subtitle:'Sewage Treatment Plant'
    }
  ]
console.log(images)
    return (<>
    <section>
    <ProjectBanner image = {NorthTownImage}/>
    </section>
    <section id="about-project">
    <ProjectAbout title='North Town' about={northTownAbout}/>
    </section>
    <section id="gallery-project">
    <ProjectGallery images = {images}/>
    </section>
    <section id="specification-project">
    <ProjectSpecification icons={icons}/>
    </section>
    <section id="layoutPlan-project">
    <ProjectLayout image={LayoutPlan}/>
    </section>
    <section id="location-project">
    <ProjectLocation image={LocationMap}/>
    </section>
    </>)
}