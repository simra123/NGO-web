import React from 'react'
import '../../css/About.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'
import Unicare from '../../components/home/Unicare'
import UnicareCards from '../../components/home/UnicareCards'
import SupportUs from '../../components/home/SupportUs'
import Volunteers from '../../components/about/Volunteers'



const AboutUS = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Unicare/>
        <SupportUs/>
        <UnicareCards/>
        <Volunteers/>
        <Footer/>
        </>
    )
}
export default AboutUS