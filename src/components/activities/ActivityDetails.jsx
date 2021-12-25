import React, { useState } from 'react'
import Gallery from '../Gallery'
import { Row, Col, Container } from 'react-bootstrap'
import BasicImage from '../../assets/activity.jpg'
import { AiOutlineFlag, AiOutlineFieldTime, AiOutlineCamera, AiOutlineVideoCamera } from 'react-icons/ai'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import PopularPosts from '../news&story/PopularPost'
import image1 from '../../assets/about bg.jpg'
import image2 from '../../assets/activity.jpg'
import image3 from '../../assets/activitybg.jpg'
import image4 from '../../assets/causes.jpg'
import image5 from '../../assets/causesbg.jpg'
import image6 from '../../assets/page-banner.jpg'
import Video from '../../assets/video.mp4'

const images2 = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    Video
]


const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <div className="activity-details">
            <Container>
                <Gallery images={ images2 } isOpen={ isOpen } setIsOpen={ setIsOpen } setPhotoIndex={ setPhotoIndex } photoIndex={ photoIndex } />
                <Row>
                    <Col md="9" className="image activity-gallery" >
                        <div className="activity-gallery-icons">
                            <span onClick={ () => setIsOpen(true) }> <AiOutlineCamera size={ 30 } /> </span>
                            <span> <AiOutlineVideoCamera size={ 30 } /> </span>
                        </div>
                        <img src={ BasicImage } alt="" width="100%" height="500" />
                        <Row className="m-0 text-center">
                            <Col xs="7" className="location">
                                <b>Vanue:</b> <span><AiOutlineFlag size={ 20 } /> sec-10, Lorem, ipsum dolor. </span>
                            </Col>
                            <Col xs="5" className="date">
                                <b>Date:</b> <span><FaRegCalendarAlt />20 SEP, 2022</span>
                            </Col>
                        </Row>
                        <div className="content">
                            <h5>Medical camp for poor childeren</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor obcaecati eos fugit quasi fugiat, tempora sunt adipisci possimus ipsam, magnam quibusdam? Dolorem quisquam numquam autem adipisci est cupiditate iusto iure animi repellat voluptate recusandae tempore quod necessitatibus, qui nihil.</p>
                            <Row className="details-section">
                                <Col xs="4" className="time">
                                    <Row>
                                        <Col xs="3">
                                            <AiOutlineFieldTime size={ 35 } />
                                        </Col>
                                        <Col xs="9">
                                            <p>Start Time</p>
                                            <b>2019-03-08 00:00</b>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4" className="date2">
                                    <Row>
                                        <Col xs="3">
                                            <FaRegCalendarAlt size={ 35 } />
                                        </Col>
                                        <Col xs="9">
                                            <p>Start Time</p>
                                            <b>2019-03-08 00:00</b>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4" className="address">
                                    <Row>
                                        <Col xs="3">
                                            <MdLocationPin size={ 35 } />
                                        </Col>
                                        <Col xs="9">
                                            <p>Address</p>
                                            <b>Warren street, New york</b>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <h5>Event Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto esse expedita, maxime, autem aspernatur totam velit eaque incidunt beatae culpa error optio eius! Neque dolor eligendi accusamus itaque illum soluta, adipisci rem, iusto optio fugit repellat eos et placeat eius!</p>
                            <h5>Event Content</h5>
                            <p className='content-check'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem at esse accusantium molestiae mollitia quisquam vel dolorum necessitatibus velit.</p>
                            <p className='content-check'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem at esse accusantium molestiae mollitia quisquam vel dolorum necessitatibus velit.</p>
                        </div>
                    </Col>

                    <Col md="3" >
                        <PopularPosts />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Details