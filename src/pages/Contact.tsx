import { Container } from 'react-bootstrap'
import ContactImage from '../assets/contactUs.jpg'
import { ContactPage } from '../components/ContactPage/ContactPage'
import { PageBanner } from '../components/PageBanner/PageBanner'
export const ContactUs=()=>{
    return (<div>
        <PageBanner image={ContactImage} title='Contact Us' currentPage='Contact Us'/>
        <ContactPage/>
    </div>)
}