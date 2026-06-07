
import ContactImage from '../assets/contactUs.jpg'
import { ContactPage } from '../components/ContactPage/ContactPage'
import { PageBanner } from '../components/PageBanner/PageBanner'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCurPage, setCurProject } from '../store/pageSlice'
export const ContactUs=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurPage('contact'))
        dispatch(setCurProject(''))
    },[])
    return (<div>
        <PageBanner image={ContactImage} title='Contact Us' currentPage='Contact Us'/>
        <ContactPage/>
    </div>)
}