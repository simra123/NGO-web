import React from 'react'
import {Row, Col, Button } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaRegCalendarAlt } from 'react-icons/fa'
import News from '../../assets/news.jpg'
import User from '../../assets/user.jpg'

const NewsStory = () => {
    return(
        <div className="story">
            <Row>
                <Col xs='12' >
                    <img  className="image" src={News} alt="" width="100%" height={400} />
                    <div className="userby">
                        <img src={User} height={55} width={55} alt="" />
                        <span>By Genelia</span>
                        <span><FaRegCalendarAlt/> 23 March 2020</span>
                    </div>
                    <hr/>
                </Col>
                <Col xs='12' className="content">
                    <h4>Education for Underprivillage Children</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam alias corrupti, accusamus fugit aliquid quis possimus laudantium repellendus veritatis.
                    <br/> At et commodi omnis ad quidem hic, sapiente modi quae cumque excepturi neque totam qui eveniet animi blanditiis? Earum perspiciatis itaque pariatur placeat dolores aut, ea reprehenderit. Eaque doloremque consequatur illo earum, ipsam quae nisi ut rem iure non dolor a recusandae. Voluptatem, facilis et libero praesentium dolor voluptas ullam.</p>
                </Col>
                <Col xs='12'className="social-icons" >
                    <h4>Share it on</h4>
                    <div className="d-flex ">
                        <span className='fb' ><FaFacebookF size={25} /></span>
                        <span className='twitter'><FaTwitter size={25} /></span>
                        <span className='google'><FaGooglePlusG size={28} /></span>
                        <span className='linkedin'><FaLinkedinIn size={25} /></span>
                    </div>
                    <hr style={{width:"30%"}}/>
                </Col>

            </Row>
        </div>
    )
}
export default NewsStory