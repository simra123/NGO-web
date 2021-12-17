import React from 'react';
import {Row , Col  , Button} from 'react-bootstrap';
import Image1 from '../../assets/slider1.jpg';
import Image2 from '../../assets/activity.jpg';
import Image3 from '../../assets/about bg.jpg';
import Image4 from '../../assets/causes.jpg';
import Image5 from '../../assets/page-banner.jpg';

const allPosts = [
    {
        image : Image5,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'


    },
    {
        image : Image1,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : Image2,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : Image3,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : Image4,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
]

const PopularPost = () =>{
    return(
        <div className="popular-post">
            <h6>Popular Posts</h6>
            {
                allPosts.map((value , index)=>{
                    return(
                        <>
                            <Row>
                                <Col xs="2">
                                    <img src={value.image} width="50" height="50" alt="" />
                                </Col>
                                <Col xs="10">
                                    <p>{value.text}</p>
                                    <small>{value.date}</small>
                                </Col>
                            </Row>
                            <hr/>
                        </>
                    )
                })
            }
            
        </div>
    )
}
export default PopularPost;