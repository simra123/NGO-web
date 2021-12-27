import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import BasicImage from '../../assets/activity.jpg';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import  publicRequest  from '../../requestMethod';
import baseURL from '../common/BaseUrl';
// const activities = [
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     },
//     {
//         img: '', date: '', text: ''
//     }
// ]

const ActivityCard = () => {
    const [activities, setActivity] = useState([]);

    useEffect(()=>{
    const getActivity = async () =>{
        try {
       const res = await publicRequest.get('frontend/activity');
       console.log(res);
       setActivity(res.data.data);
        }
        catch(err){
            console.log(err);
        }
    };
    getActivity();
    },[])
    return(
        <div className='activities'>
            <Container>
                <Row>
                   {
                       activities.map((activity)=>{
                           return(
                            <Col xs="12" md="4" className="each-activity">
                                <img src={baseURL+activity.activityImageDetails[0].image} alt=""  height='200' width='100%' />
                                <h6 className='date'>{activity.date}</h6>
                                <div className="detail">
                                    <h6>{activity.activityName}</h6>
                                    <small>{activity.venue}</small>
                                </div>
                                <div className="read-more">
                                    <Link to="/activity/details"><Button size='md'>read more</Button></Link>
                                </div>
                            </Col>
                           )
                       })
                   }
                   
                </Row>
            </Container>
        </div>
    )
}
export default ActivityCard