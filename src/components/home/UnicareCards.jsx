import React from 'react';
import {Row , Col } from 'react-bootstrap';
import BasicImage from '../../assets/image2.jpg';
import {FaPiggyBank , FaGift , FaPrayingHands } from 'react-icons/fa';
import {MdPeopleAlt} from 'react-icons/md'


const UnicareCards = () => {
    return(
        <div className="unicard">
            <Row>
                <Col lg="3" md="3" xs="12" className="each-card p-0 m-0">
                    <div className="content bg-danger ">
                        <h3>Become a Volunteer</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-danger border-danger">
                            <MdPeopleAlt size={40}/>
                        </span>
                    </div>
                    <img src={BasicImage} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content bg-info">
                        <h3>Quick Fundraising</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-info border-info">
                            <FaPiggyBank size={40}/>
                        </span>
                    </div>
                    <img src={BasicImage} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className="each-card p-0 m-0">
                    <div className="content  bg-warning ">
                        <h3>Start Donating</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-warning border-warning">
                            <FaGift size={40}/>
                        </span>
                    </div>
                    <img src={BasicImage} className="" alt=""  width="100%" height="200"/>
                </Col>
                <Col lg="3" md="3" xs="12" className=" each-card p-0 m-0">
                    <div className="content  bg-success">
                        <h3>Get Involved</h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magnam repellat earum amet, distinctio totam deserunt quis explicabo fugit tenetur, recusandae suscipit corrupti cupiditate eligendi.  </p>
                        <span className="border text-success border-success">
                            <FaPrayingHands size={40}/>
                        </span>
                    </div>
                    <img src={BasicImage} className="" alt=""  width="100%" height="200"/>
                </Col>
            </Row>
        </div>
    )
}
export default UnicareCards;