import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import Volunteer1 from '../../assets/volunteer1.jpg'
import Volunteer2 from '../../assets/volunteer2.jpg'
import Volunteer3 from '../../assets/volunteer3.jpg'
import Volunteer4 from '../../assets/volunteer4.jpeg'
import { FaPhone } from 'react-icons/fa'


const Volunteers = () => {
    return(
        <Container>
            <div className="become-volunteer">
                <small>we are wordwide non-profit charity</small>
                <h1>Give A Helping Hand For needy People</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem tempora eos, reiciendis aliquid in sed itaque, totam at earum doloremque fugit assumenda rem eaque nobis voluptas, harum temporibus qui. Perferendis voluptas qui iure nesciunt tempora soluta voluptates. Maiores, delectus doloribus!</p>
                <div className="btn">
                  <Button variant="light"size="lg">Become a Volunteer</Button>
                </div>
            </div>
            <Row className="justify-content-center mt-5">
                <Col md="1"></Col>
                <Col md="3" xs="12" className="each">
                    <small>we help thousands of people</small>
                    <h2>Our Volunteers</h2>
                </Col>
                <Col md="3" xs="12" className="each p-0">
                    <Row>
                        <Col xs="2"  className="mt-4">
                          <span><FaPhone size={27}/></span>
                        </Col>
                        <Col xs="9">
                            <small>have any questions</small>
                            <h2>888 9999 000 </h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <div className="volunteer-image">
               <Row  className="justify-content-center">
                   <Col className="each-img"  xs="6" md="4" lg="2">
                       <img src={Volunteer1}  height="200" width="200" alt="" />
                   </Col>
                   <Col className="each-img"  xs="6" md="4" lg="2">
                       <img src={Volunteer2} alt="" height="200" width="200"  />
                   </Col>
                   <Col className="each-img"  xs="6" md="4" lg="2">
                       <img src={Volunteer1} alt="" height="200" width="200"  />
                   </Col>
                   <Col className="each-img"  xs="6" md="4" lg="2">
                       <img src={Volunteer4} alt="" height="200" width="200"  />
                   </Col>
                   <Col className="each-img"  xs="6" md="4" lg="2">
                       <img src={Volunteer3} alt="" height="200" width="200"  />
                   </Col>
               </Row>
            </div>
        </Container>
                       
                        
    )
}
export default Volunteers