import { Carousel } from "react-bootstrap";

import "./CustomCarousel.scss";

import NorthTownImage from '../../assets/north_town_image.jpg'
import MadhubanImage from '../../assets/madhuban_image.jpg'
import { CustomButton } from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export const HomeSlider = () => {
    const navigate = useNavigate()
    const slides = [
        {
            image: NorthTownImage,
            title: "North Town",
            subtitle: "Gated community with Villa Plots near Bengaluru International Airport",
            city: "Devenahalli- Doddabalapur Road",
            action: ()=>{
                
                navigate("/projects/northtown")
            }
        },
        {
            image: MadhubanImage,
            title: "Madhuban",
            subtitle: "Premium gated community with villa plots near Bengaluru International Airport",
            city: "Devanahalli Town, Bengaluru",
            action: ()=>{
                navigate("/projects/madhuban")
            }
        }
    ];

    return (
        <Carousel
            fade
            controls
            indicators={false}
            interval={3000}
            className="home-slider"
        >

            {slides.map((slide, index) => (

                <Carousel.Item key={index}>

                    <div className="image-overlay"></div>

                    <img
                        className="slider-image"
                        src={slide.image}
                        alt={slide.title}
                    />

                    <Carousel.Caption>

                        <div className="slider-content">

                            <span className="title-wrapper">{slide.title}</span>

                            <p>
                                {slide.subtitle}
                                <br />
                                {slide.city}
                            </p>

                            <CustomButton text="EXPLORE" action={slide.action}/>

                        </div>

                    </Carousel.Caption>

                </Carousel.Item>

            ))}

        </Carousel>
    );
};