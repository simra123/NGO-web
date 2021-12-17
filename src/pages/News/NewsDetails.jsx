import React from 'react'
import '../../css/News.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import NewsStory from '../../components/news&story/NewsStory'
import PopularPost from '../../components/news&story/PopularPost'
import Pagination from '../../components/news&story/Pagination'



const News = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        
            <Row>
                <Col md="9">
                    <NewsStory/>
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