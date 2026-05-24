import { Carousel } from "react-bootstrap";

import "./CustomCarousel.scss";

import NorthTownImage from '../../assets/northtown.jpg'
import MadhubanImage from '../../assets/madhuban.png'
import { CustomButton } from "../CustomButton/CustomButton";

export const HomeSlider = () => {

    const slides = [
        {
            image: NorthTownImage,
            title: "North Town",
            subtitle: "Villa Plots at the misty foot of Nandi Hills",
            city: "Bengaluru"
        },
        {
            image: MadhubanImage,
            title: "Madhuban",
            subtitle: "Premium gated community with villa plots near bangalore internal airport",
            city: "Devanahalli Town, Bengaluru"
        }
    ];

    return (
        <Carousel
            fade
            controls
            indicators={false}
            interval={4000}
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

                            <CustomButton text="EXPLORE" action={()=>{}}/>

                        </div>

                    </Carousel.Caption>

                </Carousel.Item>

            ))}

        </Carousel>
    );
};