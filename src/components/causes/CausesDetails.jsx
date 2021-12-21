import React from 'react'
import { Row, Col, Container, ProgressBar} from 'react-bootstrap'
import CauseSlider from './CauseSlider'
import { FiFacebook , FiInstagram , FiTwitter} from "react-icons/fi";
import {  FaLinkedinIn , FaBookReader} from "react-icons/fa";
import {MdGroups} from 'react-icons/md'
import {BsNewspaper} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import FeatureSlider from './FeatureSlider'



const CausesDetails = () => {
    return(
        <div className="causes-details">
            <Container>
                <Row>
                    <Col sm='12' md="8">
                        <Row className="justify-content-center">
                            <Col xs='12' md='6' className="image-slider">
                               <CauseSlider/>
                            </Col>
                            <div className="content">
                                <h4>Education for Underprivillage Children</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam alias corrupti, accusamus fugit aliquid quis possimus laudantium repellendus veritatis.
                                <br/> At et commodi omnis ad quidem hic, sapiente modi quae cumque excepturi neque totam qui eveniet animi blanditiis? Earum perspiciatis itaque pariatur placeat dolores aut, ea reprehenderit. Eaque doloremque consequatur illo earum, ipsam quae nisi ut rem iure non dolor a recusandae. Voluptatem, facilis et libero praesentium dolor voluptas ullam.</p>
                            </div>
                        </Row>
                    </Col> 
                    <Col sm='12' md="4">
                        <div className="details">
                            <h5 className=''>Next Project</h5>
                            <Row className="each-detail">
                                <Col xs="2">
                                    <MdGroups size={35}/>
                                </Col>
                                <Col xs="10">
                                    <p>Volunteer</p>
                                    <b>2019-03-08 00:00</b>
                                </Col>
                            </Row>
                            <Row className="each-detail">
                                <Col xs="2">
                                    <FaBookReader size={35}/>
                                </Col>
                                <Col xs="10">
                                    <p>Date</p>
                                    <b>2019-03-08 00:00</b>
                                </Col>
                            </Row>
                            <Row className="each-detail">
                                <Col xs="2">
                                    <BsNewspaper size={35}/>
                                </Col>
                                <Col xs="10">
                                    <p>Category</p>
                                    <b>2019-03-08 00:00</b>
                                </Col>
                            </Row>
                            <Row className="each-detail">
                                <Col xs="2">
                                    <ImLocation2 size={35}/>
                                </Col>
                                <Col xs="10">
                                    <p>Location</p>
                                    <b>2019-03-08 00:00</b>
                                </Col>
                            </Row>
                                  
                        </div>
                        <h5 className='mt-4'>HELP US SHARE__</h5>
                        
                        <div className="d-flex social-icons">
                            <span ><FiFacebook size={20} />  </span>
                            <span ><FiInstagram size={20} />  </span>
                            <span ><FiTwitter size={20} />  </span>
                            <span ><FaLinkedinIn size={20} />  </span>
                        </div>
                        <hr/>
                        <div className="feature-cause">
                            <FeatureSlider/>
                            <h5>Poor Childrens Food</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                            <ProgressBar variant="info" now={70} />
                            <div className="d-flex mt-2">
                                <span>Raised: 6,500$</span>
                                <div className="ml-auto">
                                <span>Goal: 8,9999$</span>

                                </div>
                            </div>
                        </div>

                    </Col> 
                </Row>
            </Container>
        </div>
    )
}
export default CausesDetails