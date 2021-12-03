import React from 'react';
import {Card, Carousel , Button } from 'react-bootstrap';
import BasicImage from '../../assets/image2.jpg';

const SliderData = [
    {
        img: BasicImage,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
    {
        img: BasicImage,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
    {
        img: BasicImage,
        heading1 : 'here in your neighborehood',
        heading2 : 'Connecteing families ',
        heading3 : 'Careing for the child'

    },
]

const Banner =()=>{
    return (
        <Carousel className="slider-banner" indicators={true} interval={2000} >
            {
                SliderData.map((val , index)=>{
                    return(
                        <Carousel.Item key={index}>

                            <img src={val.img} alt="First Slide" className="first-slide"  width="100%" height="590"  />
                            <Carousel.Caption>
                             <Card>
                                <Card.Body>
                                    <h1>Save a Child</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque nihil quo voluptatibus.</p>
                                    <Button  variant="light">Donate now</Button>
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