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
        <Container>
            <Row>
                <Col lg="9" md="8">
                    <NewsStory/>
                </Col>
                <Col lg="3" md="4">
                    <PopularPost/>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default News