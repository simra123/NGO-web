import React from 'react';
import {Row , Col  , Container} from 'react-bootstrap';
import {MdPeopleAlt , MdFastfood} from 'react-icons/md'
import {BsGraphUp , BsEmojiLaughing} from 'react-icons/bs'
import {GiArmorPunch} from 'react-icons/gi'
import BasicImage from '../../assets/image2.jpg';



const SupportUs = () =>{
    return(
        <div className="support-us">
         <Container>
                <Row>
                    <Col xs="12" md="12">
                        <h5>You can join Us</h5>
                        <h3>What We Are Doing</h3>
                        <Row className='content'>
                           
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <BsGraphUp size={25}/> </span> Education</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non nesciunt ad.</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <BsEmojiLaughing size={25}/> </span> Education</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non nesciunt ad.</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <MdFastfood size={25}/> </span> Education</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non nesciunt ad.</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <GiArmorPunch size={25}/> </span> Education</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non nesciunt ad.</p>
                            </Col>
                               
                        </Row>
                    </Col>
                    {/* <Col xs="12" md="6">
                        <img src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" width="100%" height="460" />
                    </Col> */}

                </Row>
         </Container>
        </div>
    )
}
export default SupportUs;