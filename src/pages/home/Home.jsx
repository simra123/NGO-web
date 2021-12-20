import React from 'react';
import Navbar from '../../components/Navbar'
import Banner from '../../components/home/Banner'
import Unicare from '../../components/home/Unicare';
import UnicareCards from '../../components/home/UnicareCards';
import SupportUs from '../../components/home/SupportUs';
import Footer from '../../components/Footer'
import '../../css/Home.css'


const Home = () =>{
    return(
        <>
        <Navbar/>
        <Banner/>
        <Unicare/>
        <UnicareCards/>
        <SupportUs/>
        <Footer/>
        </>
    )
}
export default Home;