import React from 'react'
import '../../css/Activity.css'
import { Container } from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import '../../css/Sponser.css'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import Pagination from '../../components/news&story/Pagination'
import SponserCards from '../../components/sponser-child/SponserCards'
const Activity = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <SponserCards />
            <Container><Pagination align="end" /></Container>
            <Footer />
        </>
    )
}
export default Activity