import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaRegCalendarAlt } from 'react-icons/fa'
import News from '../../assets/news.jpg'
import User from '../../assets/user.jpg'
import { AiOutlineCamera, AiOutlineVideoCamera } from 'react-icons/ai'
import Gallery from '../Gallery'
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

const NewsStory = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <div className="story">
            <Gallery images={ images2 } isOpen={ isOpen } setIsOpen={ setIsOpen } setPhotoIndex={ setPhotoIndex } photoIndex={ photoIndex } />
            <Row>
                <Col xs='12' className="gallery" >
                    <div className="gallery-icons">
                        <span onClick={ () => setIsOpen(true) }> <AiOutlineCamera size={ 25 } /> </span>
                        <span> <AiOutlineVideoCamera size={ 25 } /> </span>
                    </div>
                    <img className="image" src={ News } alt="" width="100%" height={ 500 } />
                    <div className="userby">
                        <img src={ User } height={ 55 } width={ 55 } alt="" />
                        <span>By Genelia</span>
                        <span><FaRegCalendarAlt /> 23 March 2020</span>
                    </div>
                    <hr />
                </Col>
                <Col xs='12' className="content">
                    <h4>Education for Underprivillage Children</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam alias corrupti, accusamus fugit aliquid quis possimus laudantium repellendus veritatis.
                        <br /> At et commodi omnis ad quidem hic, sapiente modi quae cumque excepturi neque totam qui eveniet animi blanditiis? Earum perspiciatis itaque pariatur placeat dolores aut, ea reprehenderit. Eaque doloremque consequatur illo earum, ipsam quae nisi ut rem iure non dolor a recusandae. Voluptatem, facilis et libero praesentium dolor voluptas ullam.</p>
                </Col>
                <Col xs='12' className="social-icons" >
                    <h4>Share it on</h4>
                    <div className="d-flex ">
                        <span className='fb' ><FaFacebookF size={ 25 } /></span>
                        <span className='twitter'><FaTwitter size={ 25 } /></span>
                        <span className='google'><FaGooglePlusG size={ 28 } /></span>
                        <span className='linkedin'><FaLinkedinIn size={ 25 } /></span>
                    </div>
                    <hr style={ { width: "30%" } } />
                </Col>

            </Row>
        </div>
    )
}
export default NewsStory