import React from 'react';
import {Row , Col  , Button} from 'react-bootstrap';
import News from '../../assets/news.jpg';
import {Link} from 'react-router-dom'
const recents = [
    {img: '', text: ''},
    {img: '', text: ''},
    {img: '', text: ''}
]
const RecentNews = () =>{
    return(
        <div className="recent-news">
            <h3>recent news</h3>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Inventore, reiciendis</p>
            <Row className="all-news">
               {
                   recents.map((news)=>{
                       return(
                        <Col xs="12" md="4" className="each-news">
                            <img src={News} width="100%"  alt="" />
                            <div className="content">
                                <h6>sponser a child</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                                <Link to="/news/details"><Button size="sm">read more</Button></Link>
                                <span className="float-end">Admin | nov 13 2015</span>
                            </div>
                        </Col>
                       )
                   })
               }
              
            </Row>
        </div>
    )
}
export default RecentNews;