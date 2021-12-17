import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import BasicImage from '../../assets/activity.jpg'
import {Link} from 'react-router-dom'

const activities = [
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    },
    {
        img: '', date: '', text: ''
    }
]

const ActivityCard = () => {
    return(
        <div className='activities'>
            <Container>
                <Row>
                   {
                       activities.map((activity)=>{
                           return(
                            <Col xs="12" md="4" className="each-activity">
                                <img src={BasicImage} alt=""  height='200' width='100%' />
                                <h6 className='date'>25 Octobar 2018</h6>
                                <div className="detail">
                                    <h6>Medical Camp for poor Children</h6>
                                    <small>town hall, california. 10am</small>
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