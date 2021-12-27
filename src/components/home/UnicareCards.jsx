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
import { publicRequest } from '../../requestMethod';
const UnicareCards = () => {
    const [section, setSection] = useState([]);

    useEffect(()=>{
    const getSection = async () =>{
        try {
       const res = await publicRequest.get('frontend/thirdsection');
    //    console.log(res);
       setSection(res.data.data);
    //    console.log(section);
        }
        catch(err){
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
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-danger border-danger">
                            <MdPeopleAlt size={40}/>
                        </span>
                    </div>
                    <img src={Image2} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content bg-info">
                        <h3>Quick Fundraising</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-info border-info">
                            <FaPiggyBank size={40}/>
                        </span>
                    </div>
                    <img src={Image3} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className="each-card p-0 m-0">
                    <div className="content  bg-warning ">
                        <h3>Start Donating</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-warning border-warning">
                            <FaGift size={40}/>
                        </span>
                    </div>
                    <img src={Image4} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content  bg-success">
                        <h3>Get Involved</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-success border-success">
                            <FaPrayingHands size={40}/>
                        </span>
                    </div>
                    <img src={Image5} className="" alt=""  width="100%" height="200"/>
                </Col>
            </Row>
        </div>
    )
}
export default UnicareCards;