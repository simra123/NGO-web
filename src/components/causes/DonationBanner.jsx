import React from 'react'
import {BiDiamond} from 'react-icons/bi'
import {Button} from 'react-bootstrap'
const DonationBanner = () => {
    return(
     <div className="d-banner">
         <span><BiDiamond size={50} fill="rgb(245 51 9)"/></span> 
         <h1>We cant help everyone but everyone can help someone</h1>
         <Button size="lg">Make A Donation</Button>
     </div>
    )
}
export default DonationBanner