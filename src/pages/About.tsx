import { useEffect } from 'react'
import AboutImage from '../assets/aboutImage.jpg'
import { AboutSection } from '../components/AboutSection/AboutSection'
import { PageBanner } from '../components/PageBanner/PageBanner'
import { useDispatch } from 'react-redux'
import { setCurPage, setCurProject } from '../store/pageSlice'
export const About = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurPage('about'))
        dispatch(setCurProject(''))
    },[])
    return(<div>
        <PageBanner image={AboutImage} title='About Us'  currentPage='About Us'/>
        <AboutSection/>
    </div>)
}