import React from 'react';
import {Row , Col  , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import  publicRequest  from '../../requestMethod';
import baseURL from '../common/BaseUrl';
// const recents = [
//     {img: '', text: ''},
//     {img: '', text: ''},
//     {img: '', text: ''}
// ]
const RecentNews = () =>{
    const [newsStory, setNewsStory] = useState([]);

    useEffect(()=>{
    const getNews = async () =>{
        try {
       const res = await publicRequest.get('frontend/news');
       setNewsStory(res.data.data);
        }
        catch(err){
            console.log(err);
        }
    };
    getNews();
    },[])
    return(
        <div className="recent-news">
            <h3>recent news</h3>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Inventore, reiciendis</p>
            <Row className="all-news">
               {newsStory.map((news)=>{
                       return(
                        <Col xs="12" md="4" className="each-news">
                            <img src={baseURL+news.newsImageDetails[0].image} width="100%"  alt="" />
                            <div className="content">
                                <h6>{news.name}</h6>
                                <p>{news.description}</p>
                                <Link to="/news/details"><Button size="sm">read more</Button></Link>
                                <span className="float-end">{news.author} | {news.date}</span>
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