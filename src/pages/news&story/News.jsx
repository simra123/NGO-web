import React from 'react'
import '../../css/News.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import RecentNews from '../../components/news&story/RecentNews'
import PopularPost from '../../components/news&story/PopularPost'



const News = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        
            <Row>
                <Col md="9">
                    <RecentNews/>
                </Col>
                <Col md="3">
                    <PopularPost/>
                </Col>
            </Row>
        <Footer/>
        </>
    )
}
export default News