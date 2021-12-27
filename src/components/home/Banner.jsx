import React from 'react';
import {Card, Carousel , Button } from 'react-bootstrap';
import Slider1 from '../../assets/slider1.jpg';
import Slider2 from '../../assets/slider2.jpg';
import Slider3 from '../../assets/slider3.jpg';
import baseURL from '../common/BaseUrl';
import { useState } from 'react';
import { useEffect } from 'react';
import  publicRequest  from '../../requestMethod';
import { Link } from 'react-router-dom';
// const SliderData = [
//     {
//         img: Slider1,
//         heading1 : 'here in your neighborehood',
//         heading2 : 'Connecteing families ',
//         heading3 : 'Careing for the child'

//     },
//     {
//         img: Slider2,
//         heading1 : 'here in your neighborehood',
//         heading2 : 'Connecteing families ',
//         heading3 : 'Careing for the child'

//     },
//     {
//         img: Slider3,
//         heading1 : 'here in your neighborehood',
//         heading2 : 'Connecteing families ',
//         heading3 : 'Careing for the child'

//     },
// ]

const Banner = () =>{
    const [banner, setBanner] = useState([]);
    
    useEffect(()=>{
        const getBanner = async () =>{
            try {
           const res = await publicRequest.get('frontend/banner');
           setBanner(res.data.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getBanner();
        },[]);
return (
        <Carousel  fade className="slider-banner" indicators={true} interval={2000} >
            {banner.map((item , index)=>{
                    return(
                        <Carousel.Item key={index}>
                            <img src={baseURL+"uploads/banner/"+item.sliderImage} alt="First Slide" className="first-slide"  width="100%" height="590"  />
                            <Carousel.Caption>
                             <Card>
                                <Card.Body>
                                    <h1>{item.sliderText}</h1>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque nihil quo voluptatibus.</p> */}
                                    <Link to={item.buttonLink}>
                                    <Button  variant="light">{item.buttonText}</Button>
                                    </Link>
                                </Card.Body>
                             </Card>

                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }

    </Carousel>
    )
}
export default Banner; 