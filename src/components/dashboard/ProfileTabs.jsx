import React from 'react'
import { Row, Col, Tab, Nav, Container } from 'react-bootstrap'
import Customer from '../../assets/user.jpg'
import { AiOutlineHome, AiOutlineFileProtect, AiOutlineHistory, AiOutlineHeart } from 'react-icons/ai'
import { BiSkipPreviousCircle } from 'react-icons/bi'
import { BsArrowRepeat } from 'react-icons/bs'
import DonationHistory from './DonationHistory'
import ProductsChart from './ProductsChart'

const userTabs = () => {
  return (
    <div className="user-tabs" >
      <Tab.Container defaultActiveKey="first">
        <Row >
          <Col sm={ 3 } className="sidebar">
            <div className="user-details">
              <img src={ Customer } className='' height={ 150 } width={ 150 } alt="" />
              <h4>Customer</h4>
              <p>+9832920892</p>
            </div>
            <div className="tabs-links">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span>< AiOutlineHome size={ 25 } /></span> Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span>< AiOutlineFileProtect size={ 25 } /></span> Make a Donation
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <span>< AiOutlineHistory size={ 25 } /></span> Donation History
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <span>< BiSkipPreviousCircle size={ 25 } /></span> Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <span>< BsArrowRepeat size={ 25 } /></span>Logout
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={ 9 } className="tab-content">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <Row>
                    <Col md="4">
                      <ProductsChart products="10" color="blue" />
                    </Col>
                    <Col md="4">
                      <ProductsChart products="10" color="purple" />
                    </Col>
                    <Col md="4">
                      <ProductsChart products="10" color="green" />
                    </Col>
                  </Row>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                ifjweoifiweopf
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <DonationHistory />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}
export default userTabs