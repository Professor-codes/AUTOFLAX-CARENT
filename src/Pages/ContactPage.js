import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
    return (
        <div>
            <Hero title="Contact" />
            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-phone"></i>
                                <h4>Contact</h4>
                                <p>For partnership opportunities, collaborations, and other business related inquiries, please contact our business development team</p>
                                <Link to="/" className="grow-on-hover">+1 176 2078 5948&nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#8c00ff", }} /></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-envelope"></i>
                                <h4>Email</h4>
                                <p>Thank you for your interest in AutoFlax. We value your feedback and inquiries. Feel free to reach out to us through the following channels</p>
                                <Link to="/" className="grow-on-hover">contact@autoflax.com&nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#8c00ff", }} /></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-item">
                                <i className="fa fa-map-marker"></i>
                                <h4>Location</h4>
                                <p>AutoFlax company MR. Roberts John street 1019 Houston Texas 77054 31.023009, -98.974156<br /> USA</p>
                                <Link to="/" className="grow-on-hover">View on Google Maps&nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#8c00ff", }} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default ContactPage