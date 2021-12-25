import React from 'react';
import Navbar from '../../components/Navbar'
import Banner from '../../components/home/Banner'
import Unicare from '../../components/home/Unicare';
import UnicareCards from '../../components/home/UnicareCards';
import SupportUs from '../../components/home/SupportUs';
import Footer from '../../components/Footer'
import CauseSlider from '../../components/causes/CauseSlider';
import ActivitySlider from '../../components/activities/ActivitySlider';
import NewsSlider from '../../components/news&story/NewsSlider'
import '../../css/Home.css'


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <NewsSlider />
            <CauseSlider />
            <Unicare />
            <ActivitySlider />
            <UnicareCards />
            <SupportUs />
            <Footer />
        </>
    )
}
export default Home;