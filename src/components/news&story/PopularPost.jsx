import React from 'react';
import {Row , Col  , Button} from 'react-bootstrap';
import BasicImage from '../../assets/image2.jpg';

const allPosts = [
    {
        image : BasicImage,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'


    },
    {
        image : BasicImage,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : BasicImage,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : BasicImage,
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        date : '17 june 2020'
    },
    {
        image : BasicImage,
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