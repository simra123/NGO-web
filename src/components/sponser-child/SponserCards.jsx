import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sponser from '../../assets/causes.jpg';
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'


const sponser = [
    {
        img: "",
        heading: '',
        para: ''
    },
    {
        img: "",
        heading: '',
        para: ''
    },
    {
        img: "",
        heading: '',
        para: ''
    },
    {
        img: "",
        heading: '',
        para: ''
    }
]

const SponserCards = () => {

    return (
        <Container>
            <div className="sponser">
                <h2 className='text-center'>SPONSER A CHILD</h2>
                <Row >
                    {
                        sponser.map((item) => {
                            return (
                                <Col md='6' >
                                    <Row className="each-sponser">
                                        <Col xs="12" md="5" className="image  ">
                                            <img src={ Sponser } width="100%" height="100%" alt="" />
                                            {/* <div className="range w-100">
                                                <input type="range" min="1" max="100" className="form-range" id="myRange" />
                                            </div> */}

                                        </Col>
                                        <Col md="7" className="content">
                                            <h5>Sponser A Child</h5>
                                            <small>Raised: 73948$ <span className="mx-4 org"> Goal: 7246$</span> </small>
                                            <p className='org mt-3'> sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorum rerum laudantium! </p>

                                            <Link to="/sponser/details"><Button size="md">Sponser a Child</Button></Link>
                                            {/* <span className="float-end social-icons">
                                                help us by share
                                                <div className="d-flex">
                                                    <span ><FiFacebook size={ 15 } />  </span>
                                                    <span ><FiInstagram size={ 15 } />  </span>
                                                    <span ><FiTwitter size={ 15 } />  </span>
                                                    <span ><FaLinkedinIn size={ 15 } />  </span>
                                                </div>
                                            </span> */}
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    )
}
export default SponserCards;