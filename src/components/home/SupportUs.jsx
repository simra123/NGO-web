import React from 'react';
import {Row , Col  , Container} from 'react-bootstrap';
import {MdPeopleAlt , MdFastfood} from 'react-icons/md'
import {BsGraphUp , BsEmojiLaughing} from 'react-icons/bs'
import {GiArmorPunch} from 'react-icons/gi'
import BasicImage from '../../assets/image2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import publicRequest from '../../requestMethod';



const SupportUs = () =>{
 const [secondSection, setSecondSection] = useState([]);

    useEffect(()=>{
    const getSecondSection = async () =>{
        try {
        const res = await publicRequest.get('frontend/secondsection');
        const [resSection] = res.data.data;
        setSecondSection(resSection);
         }catch(err){
            console.log(err);
        }
    };
    getSecondSection();
    },[])
    return(
        <div className="support-us">
         <Container>
                <Row>
                    <Col xs="12" md="12">
                        <h3>{secondSection.mainHeading}</h3>
                        <Row className='content'>
                           
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <BsGraphUp size={25}/> </span> {secondSection.heading1}</h6>
                                <p>{secondSection.text1}</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <BsEmojiLaughing size={25}/> </span> {secondSection.heading2}</h6>
                                <p>{secondSection.text3}</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <MdFastfood size={25}/> </span> {secondSection.heading3}</h6>
                                <p>{secondSection.text3}</p>
                            </Col>
                            <Col xs="12" md="6" className="each-content">
                                <h6> <span> <GiArmorPunch size={25}/> </span> {secondSection.heading4}</h6>
                                <p>{secondSection.text4}</p>
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