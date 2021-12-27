import React from "react"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

const ThankYou = () => {
    return (
        <div className="thankyou-page">
            <h1>THANK YOU!!</h1>
            <Link to="/"><Button>{ "<" } Back Home</Button></Link>
        </div>
    )
}
export default ThankYou