import { useNavigate } from 'react-router-dom';
import './PageBanner.scss'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type PageBannerProps = {
    image:any,
    title:string,
    currentPage:string
}



export const PageBanner = ({image,title,currentPage}:PageBannerProps)=>{
    const navigate = useNavigate()
    console.log(image,title,currentPage)
    return (<div className="banner-container" style={{backgroundImage:`url(${image})`}}>
        <div className='banner-inner-container'>
            <h1 className='banner-title'>{title}</h1>
            <div>
                <span className='banner-options' onClick={()=>{navigate('/')}}> Home</span><KeyboardDoubleArrowRightIcon/><span className='banner-options'>{currentPage}</span>
            </div>
        </div>
    </div>)
}