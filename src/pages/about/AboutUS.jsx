import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import Unicare from '../../components/home/Unicare'
import UnicareCards from '../../components/home/UnicareCards'
import SupportUs from '../../components/home/SupportUs'



const AboutUS = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Unicare/>
        <SupportUs/>
        <UnicareCards/>
        <Footer/>
        </>
    )
}
export default AboutUS