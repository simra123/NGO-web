import React from 'react'
import '../../css/Dashboard.css'
import ProfileTabs from '../../components/dashboard/ProfileTabs'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/TopBanner'

const Dashboard = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <ProfileTabs/>
        <Footer/>
        </>
    )
}
export default Dashboard