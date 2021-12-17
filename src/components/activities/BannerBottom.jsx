import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import BasicImage from '../../assets/image2.jpg'

const BannerBottom = () => {
    return(
        <div className="activity-banner">
                <h4>save children from hunger</h4>
                <h3>Become a Part of the World Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos eum vel a enim, porro, in est aspernatur iusto unde possimus laudantium. Quibusdam repellendus beatae explicabo corrupti veritatis similique mollitia, error necessitatibus laudantium, atque quasi animi consequatur consequuntur accusantium inventore!</p>
                <div className="d-flex">
                    <Button className="read">read more</Button>
                    <Button className="donate">donate now</Button>
                </div>
        </div>
    )
}
export default BannerBottom