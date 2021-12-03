import React from 'react';
import {Button , Row , Col , Container  } from 'react-bootstrap';
import BasicImage from '../../assets/image2.jpg';
import {FaPiggyBank} from 'react-icons/fa';
import {MdPeopleAlt} from 'react-icons/md';
import UnicareCards from './UnicareCards';


const Unicare = () => {
    return(
        <>
        <div className="unicare">
            <Container>
                <Row>
                    <Col xs="12" md="6" className="content">
                        <h6>Welcome to unicare</h6>
                        <h1>we are here to help everyone in need</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tempore officiis quo! Quos ex nam nesciunt ipsa tempora recusandae! Iusto perspiciatis asperiores, omnis natus repellat quidem eligendi quam aliquam. Quam doloremque, velit ab officia iure dolorum earum non, dolorem ut amet expedita quo culpa, deleniti molestiae odio adipisci magnam vel.
                        </p>
                        <Row>
                            <Col xs="5" className="counts">
                                <div className="d-flex">
                                    <MdPeopleAlt size={40}/>
                                    <span>
                                        <h3>50</h3>
                                        <p>Volunteer</p>
                                    </span>

                                </div>
                            </Col> <Col xs="5" className="counts">
                                <div className="d-flex">
                                    <FaPiggyBank size={40}/>
                                    
                                    <span>
                                        <h3>24,400</h3>
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
                        <img src={BasicImage} alt=""  height="500" width="500"/>
                    </Col>
                </Row>
            </Container>
        </div>
        <UnicareCards/>
        </>
    )
}
export default Unicare;