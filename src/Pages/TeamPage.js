import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'

const TeamPage = () => {
  return (
    <div>
      <Hero title="Team" />
      <div className="team" style={{ margin: "0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our team <em>members</em></h2>
                <span>Journeys with a Dedicated Car Rental Team. Seamless Service. Exceptional Experiences.</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-100.jpg")} alt="" />
                <div className="down-content">
                  <h4>Christopher Byte</h4>
                  <span>Co-Founder</span>
                  <p>Christopher Byte is a seasoned tech enthusiast and software engineer known for his passion in decoding complex algorithms and his innovative approach to software development.</p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-200.jpg")} alt="" />
                <div className="down-content">
                  <h4>Sheryl Sandberg</h4>
                  <span>CEO</span>
                  <p>Sheryl Sandberg is an American business executive and President, born on August 28, 2000. She is best known for her role as the Chief Executive Officer CEO of AutoFlax.</p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-300.jpg")} alt="" />
                <div className="down-content">
                  <h4>Ethan Quantum</h4>
                  <span>Administrator</span>
                  <p>Ethan Quantum is a versatile and dynamic individual known for his intellect spirit. In professional or personal pursuits, Ethan exhibits a passion for innovation and a commitment to excellence.</p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-400.jpg")} alt="" />
                <div className="down-content">
                  <h4>Susan Wojcicki</h4>
                  <span>Chief Financial Officer</span>
                  <p>Susan Wojcicki is an American tech executive who has played a significant role in the development of major online platforms. Born on July 5, 2000, she is best known as the CFO of AutoFlax.</p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-500.jpg")} alt="" />
                <div className="down-content">
                  <h4>Harrison Techwise</h4>
                  <span>Chief Marketing Officer</span>
                  <p>Harrison, a marketing professional, serves as the CMO of our company. With a passion for innovative strategies and a wealth of experience in marketing, impactful presence in the business.</p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item">
                <img src={require("../images/image-user-600.jpg")} alt="" />
                <div className="down-content">
                  <h4>Safra Catz</h4>
                  <span>President</span>
                  <p>Safra Catz is a business executive known for her role as the President of AutoFlax. Catz has been a key figure in Oracle's leadership, contributing to the company's growth and success. </p>
                  <p>
                    <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage