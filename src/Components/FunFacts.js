import React from 'react'
import { Link } from 'react-router-dom'

const FunFacts = () => {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="more-info-content">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                {/* <img src={require("../images/about-1-570x350.jpg")} className="img-fluid" alt=""/> */}
                <img src={require("../images/image100.jpg")} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="right-content section-heading">
                <span>Who we are</span>
                <h2>AutoFlax <em>About</em></h2>
                <p>Offers a diverse fleet of well-maintained vehicles, ranging from luxury cars to economical options, ensuring a tailored solution for every customer. Commitment to customer satisfaction is reflected in its proactive approach to resolving issues and ensuring a positive overall rental experience.</p>
                <Link to="about" className="filled-button">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunFacts