import React from 'react'
import '../../css/Login.css'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Image from '../../assets/activitybg.jpg'

const Login = () => {
    return(
        <div className="login-wrapper">
            <div className="login-card">
                <Row>
                    <Col md="6" className="login-fields">
                        <h3>Login</h3>
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
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="custom-input" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="custom-input" type="password" placeholder="Password" />
                            </Form.Group>
                            <span className='float-end'>
                            <Link to="/forget-password">
                                Forget Password
                            </Link>
                            </span>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            
                       </Form>
                    </Col>
                   
                    <Col md="6" >
                      <img src={Image} alt="" width="100%" height="100%" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Login