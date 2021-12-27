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
import baseURL from '../common/BaseUrl'

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
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        const getCause = async () => {
            try {
                const res = await publicRequest.get('frontend/cause');
                setCauses(res.data.data)
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

                { causes.map((item) => {
                        return (
                            <Row className="each-cause">
                                <Col xs="12" md="5" className="image p-0 ">
                                    <img src={baseURL+item.causeImageDetails[0].image} width="100%" height="100%"  alt="" /> 
                                    <div className="range w-100">
                                        <input type="range" min="1" max="100" className="form-range" id="myRange" />
                                    </div>

                                </Col>
                                <Col md="7" className="content">
                                    <h3>{ item.causeName }</h3>
                                    <small className='org'>Raised: {item.fundRaise} <span className="mx-4 org"> Goal: {item.requiredFund}</span> </small>
                                    <p>{item.description}</p>

                                    <Link to="/causes/details"><Button size="md">Donate Now</Button></Link>
                                    <span className="float-end social-icons">
                                        help us by share
                                        
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