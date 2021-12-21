import React from 'react'
import '../../css/News.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import DonationBanner from '../../components/causes/DonationBanner'
import Pagination from '../../components/news&story/Pagination'
import CauseCards from '../../components/causes/CausesCards'

const Causes = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
         <CauseCards/>
         <Container><Pagination  align="end"/></Container>
         <DonationBanner/>
            {/* <Row>
                <Col md="9">
                    <RecentNews/>
                    <Pagination/>
                </Col>
                <Col md="3">
                    <PopularPost/>
                </Col>
            </Row> */}
        <Footer/>
        </>
    )
}
export default Causes