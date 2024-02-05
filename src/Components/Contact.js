import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarRear, faCalendarDay, faCalendarCheck, faMagnifyingGlass, faUser, faClock, faEnvelope, faBicycle, faCarSide, faTaxi, faVanShuttle, faTruck, faLocationCrosshairs, faFilter, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div class="callback-form">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Request a <em>call back</em></h2>
              <span>Rent easy.&nbsp; Fast 10 min.&nbsp; From 20$.&nbsp; Full tank.</span>
            </div>
          </div>

          <div class="col-md-12">
            <div class="contact-form">
              <form id="contact" action="" method="post">
                <div class="row">

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} /> &nbsp;Current Location</div>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Mumbai, Maharashtra, India" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faCalendarDay} style={{ color: "#ffffff", }} /> &nbsp;Pickup Date</div>
                      <input name="date" type="date" class="form-control" id="date-slt" pattern="[^ @]*@[^ @]*" placeholder="Select Date" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#ffffff", }} /> &nbsp;Return Date</div>
                      <input name="date" type="date" class="form-control" id="date-ret" placeholder="Return Date" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} /> &nbsp;Select Person</div>
                      <input name="number" type="number" class="form-control" id="number" placeholder="1 car, 4 person" min="1" max="12" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faClock} style={{ color: "#ffffff", }} /> &nbsp;Pickup Time</div>
                      <input name="time" type="time" class="form-control" id="time-slt" placeholder="Select Pickup Time" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", }} /> &nbsp;Receive our newsletter</div>
                      <input name="email" type="email" class="form-control" id="email" placeholder="Enter your email address" required="" />
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label del-ad-label"><FontAwesomeIcon icon={faLocationCrosshairs} style={{ color: "#ffffff", }} /> &nbsp;Delivery Address</div>
                      <select name="cars" id="cars">
                        <option value="Mumbai">Select location</option>
                        <option value="Mumbai">Mumbai, Maharashtra</option>
                        <option value="Delhi">New Delhi</option>
                        <option value="Gandhinagar">Gandhinagar, Gujarat</option>
                        <option value="Pune">Pune, Maharashtra</option>
                        <option value="Bengaluru">Bengaluru, Karnataka</option>
                      </select>
                    </fieldset>
                  </div>

                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <div class="location-label"><FontAwesomeIcon icon={faFilter} style={{ color: "#ffffff", }} /> &nbsp;What type of vehicle?</div>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn-car-cl btn-Bicycle btn"><FontAwesomeIcon icon={faBicycle} style={{ color: "#000000", }} /> &nbsp;Bicycle</button>
                        <button type="button" class="btn-car-cl btn-City-Car btn"><FontAwesomeIcon icon={faCarSide} style={{ color: "#000000", }} /> &nbsp;Car</button>
                        <button type="button" class="btn-car-cl btn-Taxi btn"><FontAwesomeIcon icon={faTaxi} style={{ color: "#000000", }} /> &nbsp;Taxi</button>
                        <button type="button" class="btn-car-cl btn-Vans btn"><FontAwesomeIcon icon={faVanShuttle} style={{ color: "#000000", }} /> &nbsp;Vans</button>
                        <button type="button" class="btn-car-cl btn-Luxury btn"><FontAwesomeIcon icon={faCarRear} style={{ color: "#000000", }} /> &nbsp;Luxury</button>
                        <button type="button" class="btn-car-cl btn-Trucks btn"><FontAwesomeIcon icon={faTruck} style={{ color: "#000000", }} /> &nbsp;Trucks</button>
                      </div>
                    </fieldset>
                  </div>

                  <div>
                    <fieldset>
                      <button type="submit" id="form-submit" class="border-btn"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} /> &nbsp;Airport, City or Address</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Contact