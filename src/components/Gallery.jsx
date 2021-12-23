import React, { useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import image1 from '../assets/about bg.jpg'
import image2 from '../assets/activity.jpg'
import image3 from '../assets/activitybg.jpg'
import image4 from '../assets/causes.jpg'
import image5 from '../assets/causesbg.jpg'
import image6 from '../assets/page-banner.jpg'
import Video from '../assets/video.mp4'

const images2 = [
  image1, 
  image2, 
  image3, 
  image4, 
  image5, 
  image6, 
  Video
]

const Gallery = ({isOpen, setIsOpen, images, setPhotoIndex, photoIndex}) => {

 return(
    <div>
        {/* <button type="button" onClick={() => setIsOpen(true)}>
            Open Lightbox
        </button> */}

        {isOpen ?  (
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex( (photoIndex + 1) % images.length)
            }
            />
        ) : null}
    </div>
  
 )
 }
 export default Gallery