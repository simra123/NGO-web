import React, { useState } from "react";
import Slider from "react-slick";
import Mic from '../../assets/micro.jpg'
import Gallery from '../Gallery'
import "slick-carousel/slick/slick.css";
import { AiOutlineCamera, AiOutlineVideoCamera } from 'react-icons/ai'
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const causesGallery = [
  Mic,
  Mic,
  Mic,
  Mic,
  Mic,
  Mic,
]
const causesMap = [
  {
    image: Mic
  },
  {
    image: Mic
  },
  {
    image: Mic
  },
  {
    image: Mic
  }
]

const CauseSlider = (props) => {
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

    <div className="causes-slider">
      <Container>
        <Gallery images={ causesGallery } isOpen={ isOpen } setIsOpen={ setIsOpen } setPhotoIndex={ setPhotoIndex } photoIndex={ photoIndex } />
        <h2 className="text-center">Causes We Are Serving</h2>
        <Slider className="react-slider" { ...settings }>
          { causesMap.map((val) => {
            return (
              <div className="each-cause">
                <div className="causes-gallery-icons">
                  <span onClick={ () => setIsOpen(true) }> <AiOutlineCamera size={ 25 } /> </span>
                  <span> <AiOutlineVideoCamera size={ 25 } /> </span>
                </div>
                <img src={ val.image } width="100%" height={ 300 } alt="" />
                <div className="content">
                  <h5>sponser a child</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod Lorem ipsum dolor sit.</p>
                  <Link to="/causes/details"><Button size="md">Donate</Button></Link>
                  <div className="float-end d-flex">
                    <div className="mx-2">
                      <b className="m-0 p-0">$5566</b><br />
                      <small>Goal</small>
                    </div>
                    <div className="mx-2">
                      <b className="m-0 p-0">$555</b><br />
                      <small>Raised</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) }
        </Slider>
      </Container>
    </div>
  );
};
export default CauseSlider;
