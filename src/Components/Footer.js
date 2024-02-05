import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faPaperclip, faGlobe, faRegistered, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 footer-item">
            <h4>Company Profile</h4>
            <p>Press releases &nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#ffffff", }} /></p>
            <p>Investor relations &nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#ffffff", }} /></p>
            <p>AutoFlax team &nbsp;<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#ffffff", }} /></p>
            <ul class="social-icons">
              <li>
                <a rel="nofollow" href="#" target="_blank" className="fa-Pen-Nib">
                  <FontAwesomeIcon icon={faPenNib} style={{ color: "#ffffff", }} />
                </a>
              </li>
              <li>
                <a href="#" className="fa-Paper-Clip">
                  <FontAwesomeIcon icon={faPaperclip} style={{ color: "#ffffff", }} />
                </a>
              </li>
              <li>
                <a href="#" className="fa-Registered">
                  <FontAwesomeIcon icon={faRegistered} style={{ color: "#ffffff", }} />
                </a>
              </li>
              <li>
                <a href="#" className="fa-Globe">
                  <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", }} />
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 footer-item">
            <h4 class="menu-list-mr">Contact</h4>
            <ul class="menu-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Advertise with us</a></li>
            </ul>
          </div>

          <div class="col-md-3 footer-item">
            <h4 class="menu-list-mr">More</h4>
            <ul class="menu-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Coupon codes</a></li>
            </ul>
          </div>

          <div class="col-md-3 footer-item last-item">
            <h4 class="menu-list-mr">Help & Support</h4>
            <div class="contact-form">
              <form id="contact footer-contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="" />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email here" required="" />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="filled-button">submit</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer