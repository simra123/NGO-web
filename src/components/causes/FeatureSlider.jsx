import React , {useState} from 'react';
import {Row , Col , Carousel  , Tabs , Tab , Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import image from '../../assets/causesbg.jpg'
import image2 from '../../assets/causes.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const causes = [
    {
        image : image
    },
    {
        image : image2
    },
    {
        image : image
    },
    {
        image : image2
    }
] 
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    arrows : true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  };
const FeatureSlider = (props) =>{
    return(
     <div className="causes-slider">
        <h4> Featured Cause </h4>
        <Slider {...settings}>
         {
             causes.map((val) => {
                 return(
                    //  <Link to='/shop/product'>
                     <div  className="each-slide">
                         <img src={val.image} width="100%" height="300" alt="" className="p-1" />
                         <p> {val.title} </p>
                         <span> {val.price} </span>
                     </div>
                    //  </Link>
                 )
             })
         }
        </Slider>
        </div>
      
    )
}
export default FeatureSlider