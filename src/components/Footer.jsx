import React from 'react';
import {Row , Col  , Container , Form , Button} from 'react-bootstrap';
import Logo from '../assets/logo.png'
import {  FaLinkedinIn} from "react-icons/fa";
import Map from './Map'
import { FiFacebook , FiInstagram , FiTwitter} from "react-icons/fi";
const Footer = () => {
    return(
        <>
        <Map/>
        <footer>
            <Container>
                <Row className="footer">
                    <Col xs="12" lg="3" md="6">
                        <img src={Logo} alt="logo" height="150" width="230" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa amet recusandae incidunt voluptas hic? Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="social-icons d-flex">
                            <span ><FiFacebook size={18} />  </span>
                            <span ><FiInstagram size={18} />  </span>
                            <span ><FiTwitter size={18} />  </span>
                            <span ><FaLinkedinIn size={18} />  </span>
                        </div>
                    </Col>
                    <Col xs="12" lg="3" md="6" className=" text-light rounded">
                        <div className=" each-link">
                            <h6>Discover</h6>
                            <ul>
                                <li> <a href="/" > Mission </a> </li>
                                <li> <a href="/" > History </a> </li>
                                <li> <a href="/" > Board and Staff </a> </li>
                                <li> <a href="/" > Board and Staff </a> </li>
                                <li> <a href="/" > Join Our Team </a> </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" lg="3" md="6" className=" text-light rounded">
                        <div className=" each-link">
                            <h6>Discover</h6>
                            <ul>
                                <li> <a href="/" > Mission </a> </li>
                                <li> <a href="/" > History </a> </li>
                                <li> <a href="/" > Board and Staff </a> </li>
                                <li> <a href="/" > Board and Staff </a> </li>
                                <li> <a href="/" > Join Our Team </a> </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" lg="3" md="6">
                        <h5>Quick Contact</h5>
                        <div className="bg-light newsletter">
                            <Form >
                                <Row className="text-left">
                                    <Col xs="12" md="6" className="p-1">
                                        <Form.Group className="mb-3" >
                                            <Form.Control className="custom-input" type="text" placeholder="Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6" className="p-1">
                                        <Form.Group className="mb-3" >
                                            <Form.Control className="custom-input" type="text" placeholder="Company" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6" className="p-1">
                                        <Form.Group className="mb-3" >
                                            <Form.Control className="custom-input" type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6" className="p-1">
                                        <Form.Group className="mb-3" >
                                            <Form.Control className="custom-input" type="number" placeholder="Mobile" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12" className="p-1">
                                        <Form.Group className="mb-3" >
                                            <Form.Control className="custom-input" as="textarea" rows={3} />
                                        </Form.Group>
                                    </Col>
                                    <Button variant="light" width="100">Send</Button>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
               
            </Container>
         
        </footer>   
        <div className="footer-widget text-center ">
           <h6> Copyright © 2021 All rights reserved | Raxeon </h6>
        </div>
        </>
    )
}
export default Footer