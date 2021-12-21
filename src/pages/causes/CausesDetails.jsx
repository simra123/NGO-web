import React from 'react'
import '../../css/News.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import CauseDetails from '../../components/causes/CausesDetails'

const Causes = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
         <CauseDetails/>
        <Footer/>
        </>
    )
}
export default Causes