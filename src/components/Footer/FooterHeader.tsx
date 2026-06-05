import './FooterHeader.scss'
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from "@mui/icons-material/Place";
import { FooterBody } from './FooterBody';

type contactDetailType = {
    id:string;
    value:string;
    icon:any
}
export const FooterHeader = () =>{
    const contactDetails = [
        {
            id:'phone',
            value:'+91 9964766886',
            icon:<CallIcon fontSize='large'/>
        },
        {
            id:'address',
            value:'#135/5. Shankar Building, Bank of Baroda Backside, B.B. Road, Devanahalli Town, Bangalore Rural, 562110',
            icon:<PlaceIcon fontSize='large'/>
        },
        {
            id:'email',
            value:'AKSHAYAPROPERTIES.CO',
            icon:<EmailIcon/>
        }
    ]
    return (
        <div className='footer-container'>
        <div className="footer-header">
            {contactDetails.map((contactDetail)=>{
                return <div className='contact-detail'>
                    {contactDetail.icon}
                    <p>{contactDetail.value}</p>
                </div>
            })}
        </div>
        <FooterBody/>
        </div>
    )
}