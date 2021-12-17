import React from 'react'
import '../../css/Activity.css'
//import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import Pagination from '../../components/news&story/Pagination'
import ActivityCard from '../../components/activities/ActivityCard'
import BannerBottom from '../../components/activities/BannerBottom'

const News = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <ActivityCard/>
        <Pagination align="center"/>
        <BannerBottom/>
        <Footer/>
        </>
    )
}
export default News