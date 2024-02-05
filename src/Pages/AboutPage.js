import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import FunFacts from '../Components/FunFacts'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero title="About" />
      <FunFacts />
      <div class="fun-facts">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left-content">
                <h2>DON'T RENT A CAR. <em>RENT THE CAR.</em></h2>
                <p>Premium car rental at the best rates. Worldwide. Contact Us for Expert Assistance, 24/7 Customer Support.<br /><br />Embark on a seamless journey with our diverse fleet, competitive rates, and exceptional service, ensuring a hassle-free and memorable car rental experience.</p>
              </div>
            </div>

            <div class="col-md-6 align-self-center">
              <div class="row">
                <div class="col-md-6 grow-on-hover">
                  <div class="count-area-content">
                    <div class="count-digit">100000+</div>
                    <div class="count-title">Miles driven</div>
                  </div>
                </div>
                
                <div class="col-md-6 grow-on-hover">
                  <div class="count-area-content">
                    <div class="count-digit">2499+</div>
                    <div class="count-title">Happy clients</div>
                  </div>
                </div>

                <div class="col-md-6 grow-on-hover">
                  <div class="count-area-content">
                    <div class="count-digit">42+</div>
                    <div class="count-title">Cities</div>
                  </div>
                </div>

                <div class="col-md-6 grow-on-hover">
                  <div class="count-area-content">
                    <div class="count-digit">500+</div>
                    <div class="count-title">Cars</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutPage