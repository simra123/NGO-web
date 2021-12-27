import React from 'react';
import {Row , Col } from 'react-bootstrap';
import {FaPiggyBank , FaGift , FaPrayingHands } from 'react-icons/fa';
import {MdPeopleAlt} from 'react-icons/md'
import Image2 from '../../assets/activity.jpg';
import Image3 from '../../assets/about bg.jpg';
import Image4 from '../../assets/causes.jpg';
import Image5 from '../../assets/page-banner.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import  publicRequest  from '../../requestMethod';
import baseURL from '../common/BaseUrl';
const UnicareCards = () => {
const [section, setSection] = useState([]);

    useEffect(()=>{
    const getSection = async () =>{
        try {
        const res = await publicRequest.get('frontend/thirdsection');
        const [resdata] = res.data.data;
        setSection(resdata);
         }catch(err){
            console.log(err);
        }
    };
    getSection();
    },[])
return(
    <div className="unicard mb-5">
            <Row>
                <Col lg="3" md="3" xs="12" className="each-card p-0 m-0">
                    <div className="content bg-danger ">
                        <h3>{section.heading1}</h3>
                        <p>{section.text1}</p>
                        <span className="border text-danger border-danger">
                            <MdPeopleAlt size={40}/>
                        </span>
                    </div>
                    <img src={baseURL+section.image1} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content bg-info">
                        <h3>{section.heading2}</h3>
                        <p>{section.text2}</p>
                        <span className="border text-info border-info">
                            <FaPiggyBank size={40}/>
                        </span>
                    </div>
                    <img src={baseURL+section.image2} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className="each-card p-0 m-0">
                    <div className="content  bg-warning ">
                        <h3>{section.heading3}</h3>
                        <p> {section.text3}</p>
                        <span className="border text-warning border-warning">
                            <FaGift size={40}/>
                        </span>
                    </div>
                    <img src={baseURL+section.image3} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content  bg-success">
                        <h3>{section.heading4}</h3>
                        <p> {section.text4} </p>
                        <span className="border text-success border-success">
                            <FaPrayingHands size={40}/>
                        </span>
                    </div>
                    <img src={baseURL+section.image4} className="" alt=""  width="100%" height="200"/>
                </Col>
            </Row>
        </div>
    )
}
export default UnicareCards;