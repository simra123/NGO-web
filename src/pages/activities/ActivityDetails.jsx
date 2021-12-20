import React from 'react'
import '../../css/Activity.css'
//import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import Details from '../../components/activities/ActivityDetails'

const ActivityDetails = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Details/>
        <Footer/>
        </>
    )
}
export default ActivityDetails