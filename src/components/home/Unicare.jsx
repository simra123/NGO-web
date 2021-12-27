import React from 'react';
import {Button , Row , Col , Container  } from 'react-bootstrap';
import About from '../../assets/about bg.jpg';
import {FaPiggyBank} from 'react-icons/fa';
import {MdPeopleAlt} from 'react-icons/md';
import UnicareCards from './UnicareCards';
import baseURL from '../common/BaseUrl';
import { useState } from 'react';
import { useEffect } from 'react';
import publicRequest from '../../requestMethod';

const Unicare = () => {
const [aboutdata, setAboutData] = React.useState([]);

    useEffect(()=>{
    const getAbout = async () =>{
        try {
       const res = await publicRequest.get('frontend/about');
       const data = res.data.data;
        setAboutData([{
            aboutText: data.aboutText,
            number1: data.number1,
            number2:  data.number2,
            image:  data.image
    
        }]);
        }catch(err){
            console.log(err);
        }
    };
    getAbout();
    console.log(aboutdata)
},[]);

   return(
    <Container>
        <div className="unicare">
                <Row>
                    <Col xs="12" md="6" className="content">
                        <p>{aboutdata.aboutText}</p>
                        <Row>
                            <Col xs="5" className="counts">
                                <div className="d-flex">
                                    <MdPeopleAlt size={40}/>
                                    <span>
                                        <h3></h3>
                                        <p>Volunteer</p>
                                    </span>

                                </div>
                            </Col> <Col xs="5" className="counts">
                                <div className="d-flex">
                                    <FaPiggyBank size={40}/>
                                    
                                    <span>
                                        <h3></h3>
                                        <p>Trusted Funds</p>
                                    </span>

                                </div>
                            </Col>
                            <Col xs="12">
                                <Button variant="light-outline">
                                  Become a volunteer
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md="6">
                        <img src="" alt=""  height="500" width="500"/>
                    </Col>
                </Row>
        </div>
        </Container>
    )
}
export default Unicare;