import React from 'react'
import '../../css/Auth.css'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsNewspaper } from 'react-icons/bs'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn, FaBookReader } from "react-icons/fa";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="contact-us-wrapper">
                <div className="contact-us-card">
                    <Row>
                        <Col md="12" className="contact-us-fields">
                            <Row>
                                <Col md="4" className="contact-details">
                                    <h4>Enternal hope foundation</h4>
                                    <h5>Contact Us</h5>
                                    <Row className="each-detail">
                                        <Col xs="1">
                                            <span><AiOutlineMail size={ 25 } /></span>
                                        </Col>
                                        <Col xs="11">
                                            <p>enternalhope@gmail.com</p>
                                        </Col>
                                    </Row>
                                    <Row className="each-detail">
                                        <Col xs="1">
                                            <span><AiOutlinePhone size={ 25 } /></span>
                                        </Col>
                                        <Col xs="11">
                                            <p>+97689343984</p>
                                        </Col>
                                    </Row>
                                    <div className="d-flex social-icons">
                                        <span ><FiFacebook size={ 25 } />  </span>
                                        <span ><FiInstagram size={ 25 } />  </span>
                                        <span ><FiTwitter size={ 25 } />  </span>
                                        <span ><FaLinkedinIn size={ 25 } />  </span>
                                    </div>
                                </Col>
                                <Col md="8" className='m-4'>
                                    <h3>GET IN TOUCH</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur?</p>

                                    <hr className='mb-4' />

                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='ml-3'>Email</Form.Label>
                                            <Form.Control className="custom-input" type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className='ml-3'>Phone</Form.Label>
                                            <Form.Control className="custom-input" type="number" placeholder="Enter Phone Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className='ml-3'>Your Message</Form.Label>
                                            <Form.Control className="custom-input" as="textarea" rows="4" />
                                        </Form.Group>
                                        <Link to="/dashboard">
                                            <Button variant="primary" type="submit">
                                                Send
                                            </Button>
                                        </Link>

                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ContactUs