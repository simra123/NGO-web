import React from 'react'
import '../../css/Login.css'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Image from '../../assets/volunteerbg.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return(
        <div className="volunteer-wrapper">
            <div className="upper-sec">
                <Row className='justify-content-center'>
                    <Col md="3">
                        <img src={Image} alt="" height={200}  width={300}/>
                    </Col>
                    <Col md="4" className='content text-center'>
                        <h3>Become a Volunteer</h3>
                        <h5 className='text-warning'>Join the Winning Team</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, itaque incidunt! Aspernatur necessitatibus fugit, culpa quis totam obcaecati perspiciatis animi autem? Sit deserunt consectetu</p>
                    </Col>
                </Row>
            </div>
            <div className="volunteer-card">
                <h2 className='text-center my-4'>Become a <span className='text-danger'>Volunteer Now</span></h2>
                <div className="signup-fields">
                    <Form>

                        <Row>
                            <Col md="6" className="login-fields">
                            
                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">First Name</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Address*</Form.Label>
                                    <Form.Control className="custom-input" type="address" placeholder="Enter Address*" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">State / Province</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter State / Province" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Email</Form.Label>
                                    <Form.Control className="custom-input" type="email" placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Birth Date</Form.Label>
                                    <Form.Control className="custom-input" type="date" placeholder="Enter Birth date" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Why do you want to be a volunteer in this Organization?</Form.Label>
                                    <Form.Control as="textarea" rows={3}   />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">What are your interests?</Form.Label>
                                    <Form.Control as="textarea" rows={3}   />
                                </Form.Group>
                               
                            </Col>
                            <Col md="6" className="login-fields">
                            
                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Last Name</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">City</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter City" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Postal / Zip Code</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter Postal / Zip Code" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="mx-2">Phone Number</Form.Label>
                                    <Form.Control className="custom-input" type="number" placeholder="Enter Phone Number" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Availability Information</Form.Label>
                                    <Form.Control className="custom-input" type="text" placeholder="Enter Availability Information" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">Please tell us your other volunteering experiences</Form.Label>
                                    <Form.Control as="textarea" rows={3}   />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="mx-2">What are your skills?</Form.Label>
                                    <Form.Control as="textarea" rows={3}   />
                                </Form.Group>
                               
                            </Col>
                      
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default SignUp