import React from 'react'
import Banner from "../assets/video/banner.mp4"
import "./videoComponent.css"

function videoComponent() {
    return (
        <div className="header-style" >
            <video className="video-style" playsinline="playsinline " autoplay="autoplay" muted="muted" loop="loop" >
                    <source src={Banner} type="video/mp4"></source>
                </video>
        </div>
    )
}

export default videoComponent
