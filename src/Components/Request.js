import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Request = () => {
  return (
    <div className="request-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Need a car for a day?</h4>
            <span>Book your holiday car rental now at the lowest prices guaranteed!</span>
          </div>
          <div className="col-md-4">
            <Link to="/" className="border-button"><FontAwesomeIcon icon={faPhone} style={{ color: "#fff" }} />&nbsp;&nbsp;&nbsp;&nbsp;Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request