import React, { useState } from "react";
import Slider from "react-slick";
import image1 from '../../assets/about bg.jpg'
import image2 from '../../assets/activity.jpg'
import image3 from '../../assets/activitybg.jpg'
import image4 from '../../assets/causes.jpg'
import image5 from '../../assets/causesbg.jpg'
import image6 from '../../assets/page-banner.jpg'
import Gallery from '../Gallery'
import "slick-carousel/slick/slick.css";
import { AiOutlineCamera, AiOutlineVideoCamera } from 'react-icons/ai'
import { FaRegCalendarAlt } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const activityGallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
]
const activityMap = [
    {
        image: image1
    },
    {
        image: image2
    },
    {
        image: image3
    },
    {
        image: image4
    },
    {
        image: image5
    },
    {
        image: image6
    }
]

const ActivitySlider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        autoPlay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (

        <div className="activity-slider">
            <Container>
                <Gallery images={ activityGallery } isOpen={ isOpen } setIsOpen={ setIsOpen } setPhotoIndex={ setPhotoIndex } photoIndex={ photoIndex } />
                <h6 className="text-center">our Activities</h6>
                <h1 className="text-center">Latest Activities from Our Organization</h1>
                <Slider className="react-slider" { ...settings }>
                    { activityMap.map((val) => {
                        return (
                            <div className="each-activity">
                                <div className="activity-gallery-icons">
                                    <span onClick={ () => setIsOpen(true) }> <AiOutlineCamera size={ 25 } /> </span>
                                    <span> <AiOutlineVideoCamera size={ 25 } /> </span>
                                </div>
                                <img src={ val.image } width="100%" height={ 300 } alt="" />
                                <div className="content">
                                    <div className="d-flex userby">
                                        <span>By Genelia</span>
                                        <span><FaRegCalendarAlt /> 23 March 2020</span>
                                    </div>
                                    <h5>Foods and Water needs in Africa</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod Lorem ipsum dolor sit.</p>
                                    <Link to="/activity/details"><Button size="lg">Donate</Button></Link>
                                </div>
                            </div>
                        );
                    }) }
                </Slider>
            </Container>
        </div>
    );
};
export default ActivitySlider;
