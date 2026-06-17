import { ProjectAbout } from "../components/ProjectComponents/ProjectAbout/ProjectAbout"
import { ProjectBanner } from "../components/ProjectComponents/ProjectBanner/ProjectBanner"
import { ProjectGallery } from "../components/ProjectComponents/ProjectGallery/ProjectGallery"
import { ProjectLayout } from "../components/ProjectComponents/ProjectLayout/ProjectLayout"
import { ProjectSpecification } from "../components/ProjectComponents/ProjectSpecification/ProjectSpecification"
import MadhubanImage from '../assets/madhuban_image.jpg'
import MadhubanLayout from '../assets/MadhubanImages/layout/Madhuban Layout plan.png'
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import WaterIcon from "@mui/icons-material/Water";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import WifiIcon from "@mui/icons-material/Wifi";
import FactoryIcon from "@mui/icons-material/Factory";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import ParkIcon from "@mui/icons-material/Park";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import { ProjectLocation } from "../components/ProjectComponents/ProjectLocation/ProjectLocation"
import { address, email, madhubanAddress, madhubanPhoneNumber, madhubhanAbout, phoneNumber } from "../constants"
import { ProjectDetails } from "../components/ProjectComponents/ProjectDetails/ProjectDetails"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCurPage, setCurProject } from "../store/pageSlice"
import { ProjectContact } from "../components/ProjectComponents/ProjectContact/ProjectContact"


export const Madhuban = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setCurPage('projects'))
    dispatch(setCurProject('madhuban'))
  },[])
    const facilities = [
  {
    icon: TempleBuddhistIcon,
    subtitle: "Grand entrance arch with gate",
  },
  {
    icon: AddRoadIcon,
    subtitle: "Wide Tar Roads (40 & 30 ft roads)",
  },
  {
    icon: WaterDropIcon,
    subtitle: "Multiple Borewells",
  },
  {
    icon: SolarPowerIcon,
    subtitle: "Solar Streetlights",
  },
  {
    icon: ElectricBoltIcon,
    subtitle: "Underground Electricity Connection (UEC)",
  },
  {
    icon: PlumbingIcon,
    subtitle: "Underground Sewage Drains (USD)",
  },
  {
    icon: WaterIcon,
    subtitle: "Underground Rainwater Drains (URD)",
  },
  {
    icon: WaterDamageIcon,
    subtitle: "Underground Water Tank (UWT)",
  },
  {
    icon: PropaneTankIcon,
    subtitle: "Underground Gas Pipeline (UGP)",
  },
  {
    icon: WifiIcon,
    subtitle: "Underground Internet cables (UIC)",
  },
  {
    icon: FactoryIcon,
    subtitle: "Storage Treatment Plant (STP)",
  },
  {
    icon: WaterDamageIcon,
    subtitle: "Overhead Water Tank",
  },
  {
    icon: WaterDropIcon,
    subtitle: "Individual Water Connection",
  },
  {
    icon: ParkIcon,
    subtitle: "Roadside Tree Plantation",
  },
  {
    icon: SecurityIcon,
    subtitle: "24-Hour Security",
  },
  {
    icon: ShieldIcon,
    subtitle: "All round secured Compound wall",
  },
];
    const images = Object.values(
        import.meta.glob('../assets/MadhubanImages/*.{png,jpg,jpeg,svg}', {
            eager: true,
  })).map((module: any) => module.default)
    return (<div>
        <section>
        <ProjectBanner image = {MadhubanImage}/>
        </section>
        <section id="about-project">
    <ProjectAbout title='PREMIUM VILLA PLOTS' about={madhubhanAbout} subtext="Near International Airport, Bengaluru"/>
    <ProjectDetails/>
    </section>
    <section id="gallery-project">
    <ProjectGallery images = {images}/>
    </section>
    <section id="specification-project">
    <ProjectSpecification icons={facilities}/>
    </section>
    <section id="layoutPlan-project">
    <ProjectLayout image={MadhubanLayout}/>
    </section>
    <section id="location-project">
    <ProjectLocation image={""}/>
    </section>
    <section id="contact-project">
    <ProjectContact email={email} phoneNo={phoneNumber} address={address}/>
    </section>
    </div>)
}