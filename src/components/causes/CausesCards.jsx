import React from 'react';
import '../../css/Causes.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Causes from '../../assets/causes.jpg';
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { publicRequest } from '../../requestMethod';
import axios from 'axios';

// const causes = [
//     {
//         img : "",
//         heading : '',
//         para : ''
//     },
//     {
//         img : "",
//         heading : '',
//         para : ''
//     }
// ]

const CauseDetails = () => {
    const [causes, setCauses] = useState([{}]);

    useEffect(() => {
        const getCause = async () => {
            try {
                const res = await axios.get('frontend/cause');
                console.log(res);
                setCauses(res)
            }
            catch (err) {
                console.log(err);
            }
        };
        getCause();
    }, []);

    return (
        <Container>
            <div className="causes">

                {
                    causes.map((item) => {
                        return (
                            <Row className="each-cause">
                                <Col xs="12" md="5" className="image p-0 ">
                                    {/* <img src={Causes} width="100%" height="100%"  alt="" /> */ }
                                    <div className="range w-100">
                                        <input type="range" min="1" max="100" className="form-range" id="myRange" />
                                    </div>

                                </Col>
                                <Col md="7" className="content">
                                    <h3>{ item.causeName }</h3>
                                    <small>Raised: 73948$ <span className="mx-4 org"> Goal: 7827888246$</span> </small>
                                    <p className='org mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi fuga quod.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorum rerum laudantium! Repudiandae deleniti inventore accusantium delectus tempora totam aspernatur animi sunt neque pariatur, perferendis ipsam dolorem natus repellendus blanditiis! Iure rerum sunt sint ut deserunt, rem illo magnam in facilis nisi eius, officia repellat blanditiis?</p>

                                    <Link to="/causes/details"><Button size="md">Donate Now</Button></Link>
                                    <span className="float-end social-icons">
                                        help us by share
                                        <div className="d-flex">
                                            <span ><FiFacebook size={ 15 } />  </span>
                                            <span ><FiInstagram size={ 15 } />  </span>
                                            <span ><FiTwitter size={ 15 } />  </span>
                                            <span ><FaLinkedinIn size={ 15 } />  </span>
                                        </div>
                                    </span>
                                </Col>

                            </Row>
                        )
                    })
                }
            </div>
        </Container>
    )
}
export default CauseDetails;