import React, { useState, useRef } from 'react';
import { Button, Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { NavLink, Link } from 'react-router-dom';


const Menu = () => {
    const [showNav, setShowNav] = useState(false);
    const menuMobile = useRef()

    const NavLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Causes', link: '/causes' },
        { name: 'Activity', link: '/activity' },
        { name: 'News and Stories', link: '/news' },
        { name: 'Contact Us', link: '/contact-us' },
    ]
    return (
        <>
            <div className="header-top text-center" id="">
                <Container>

                    <Row className="justify-content-center py-2">
                        <Col md="6" lg="4" xs="12" className="p-0 " style={ { textAlign: 'right' } }>
                            <div className="social-icons d-flex">
                                <span ><FiFacebook size={ 20 } />  </span>
                                <span ><FiInstagram size={ 20 } />  </span>
                                <span ><FiTwitter size={ 20 } />  </span>
                                <span ><FaLinkedinIn size={ 20 } />  </span>
                            </div>

                        </Col>
                        <Col md="6" lg="4" xs="12" className="p-0">
                            <h3> Welcome to Charity Fund</h3>

                        </Col>
                        <Col md="6" lg="4" xs="12" className="p-0 smol">
                            <Link to="/volunteer"><Button variant="light" class="btn  mt-1" type="button" >Join Us</Button></Link>
                            <Button variant="light" class="btn  mt-1" type="button" >Donate now</Button>

                        </Col>
                    </Row>

                </Container>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={ Logo } width="140" height="100" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {
                                NavLinks.map((value, index) => {
                                    return (

                                        <NavLink exact className="nav-link" to={ value.link }> { value.name } </NavLink>

                                    )
                                })
                            }
                            <div className="mt-2">
                                <Link to="/sponser/child"> <Button className="btn  my-sm-0 " variant="light" >sponsar a child</Button></Link>
                                <Link to="/login"> <Button className="btn  my-sm-0 " variant="light" >login</Button></Link>
                                <Link to="/signup"><Button className="btn  my-sm-0 " variant="light" >sign up</Button></Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}
export default Menu;