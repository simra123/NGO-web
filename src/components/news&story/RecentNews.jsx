import React from 'react';
import {Row , Col  , Button} from 'react-bootstrap';
import BasicImage from '../../assets/image2.jpg';

const RecentNews = () =>{
    return(
        <div className="recent-news">
            <h3>recent news</h3>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Inventore, reiciendis</p>
            <Row className="all-news">
                <Col xs="12" md="4" className="each-news">
                    <img src={BasicImage} width="100%"  alt="" />
                    <div className="content">
                        <h6>sponser a child</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                        <Button size="sm">read more</Button>
                        <span className="float-end">Admin | nov 13 2015</span>
                    </div>
                </Col>
                <Col xs="12" md="4" className="each-news">
                    <img src={BasicImage} width="100%"  alt="" />
                    <div className="content">
                        <h6>sponser a child</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                        <Button size="sm">read more</Button>
                        <span className="float-end">Admin | nov 13 2015</span>
                    </div>
                </Col>
                <Col xs="12" md="4" className="each-news">
                    <img src={BasicImage} width="100%"  alt="" />
                    <div className="content">
                        <h6>sponser a child</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                        <Button size="sm">read more</Button>
                        <span className="float-end">Admin | nov 13 2015</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default RecentNews;