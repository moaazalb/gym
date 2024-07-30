import './Bannar.css'
import React, { useEffect, useRef } from "react";
import video from '../../assets/videos/gym-video.mp4'
const Bannar = () => {
    return (
        <div class="main-banner" id="top">
          <video  autoPlay={"autoplay"} loop muted  id="bg-video">
            <source src={video}   />
        </video>
        <div class="video-overlay header-text">
            <div class="caption">
                <h6>work harder, get stronger</h6>
                <h2>Easy with the right<em> exercise </em></h2>
                <div class="main-button scroll-to-section">
                  
                </div>
            </div>
        </div>
    </div>
    )
}

export default Bannar