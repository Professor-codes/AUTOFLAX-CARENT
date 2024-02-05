import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
      <div className="Modern-Slider">

        <div className="item item-1">
          <div className="img-fill">
            <div className="text-content">
              <h4 class="waviy">Getting &nbsp; Around <br /> At &nbsp; Your &nbsp; <br /> Own &nbsp;Speed <br /> with <span>Auto</span><span>Flax</span>
              </h4>
              <Link to="contact" className="filled-button" class="banner-btn">Try AutoFlax &nbsp; &#129125;</Link>
            </div>
          </div>
        </div>

        <div class="slider-label-name">
          <marquee behavior="smooth" direction="left" class="scrollsecond-heading3">
            <h1 class="scrollsecond-heading3-marq">AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AUTOFLAX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h1>
          </marquee>
        </div>

      </div>
    </div>
  )
}

export default Banner