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

const newsGallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
]
const newsMap = [
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

const NewsSlider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        autoPlay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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

        <div className="recent-news news-slider">
            <Container>
                <Gallery images={ newsGallery } isOpen={ isOpen } setIsOpen={ setIsOpen } setPhotoIndex={ setPhotoIndex } photoIndex={ photoIndex } />
                <h3>recent news</h3>
                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Inventore, reiciendis</p>
                <Slider className="react-slider" { ...settings }>
                    { newsMap.map((val) => {
                        return (
                            <div className="each-news-slider">
                                <div className="news-gallery-icons">
                                    <span onClick={ () => setIsOpen(true) }> <AiOutlineCamera size={ 25 } /> </span>
                                    <span> <AiOutlineVideoCamera size={ 25 } /> </span>
                                </div>
                                <img src={ val.image } width="100%" alt="" height={ 300 } />
                                <div className="content">
                                    <h5>Sponser a Child Today</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, accusamus nostrum animi </p>
                                    <Link to="/news/details"><Button size="md">read more</Button></Link>
                                    <b className="float-end">Admin | nov 13 2015</b>
                                </div>
                            </div>
                        );
                    }) }
                </Slider>
            </Container>
        </div>
    );
};
export default NewsSlider;
