import React from 'react'
import '../../css/Auth.css'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Image from '../../assets/causesbg.jpg'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const SignUp = () => {
    return(
        <>
        <Navbar/>
        <div className="login-wrapper">
            <div className="login-card">
                <Row>
                    <Col md="6" className="login-fields">
                        <h3>Sign Up</h3>
                        <p>Lorem ipsum dolor sit amet consectetur?</p>
                        {/* <Button variant="light" className="social-btn">
                            <span> <FaFacebook size={20} color="blue" /> </span> login with facebook
                        </Button>
                        <Button variant="light" className="social-btn mb-3">
                            <span> <FaGoogle size={18}  color="red" /> </span> login with google
                        </Button> */}
                        <hr  className='mb-4'/>
                       
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control className="custom-input" type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="custom-input" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="custom-input" type="password" placeholder="Password" />
                            </Form.Group>
                            <span className='float-end'>
                            <Link to="/login">
                              {" < "}Back to Login
                            </Link>
                            </span>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                            
                       </Form>
                    </Col>
                   
                    <Col md="6" >
                      <img src={Image} alt="" width="100%" height="100%" />
                    </Col>
                </Row>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default SignUp