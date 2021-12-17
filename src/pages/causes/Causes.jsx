import React from 'react'
import '../../css/News.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import DonationBanner from '../../components/causes/DonationBanner'
import Pagination from '../../components/news&story/Pagination'
import CauseDetails from '../../components/causes/CauseDetails'

const Causes = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
         <CauseDetails/>
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