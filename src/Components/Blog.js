import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('tabs-1');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="more-info">
      <div className="container">
        <div className="section-heading">
          <h2>AutoFlax <em>Blog</em></h2>
          <span>Every journey. Begins with Comfort. Convenience. Unrivaled Reliability.</span>
        </div>

        <div className="row" id="tabs">
          <div className="col-md-4">
            <ul>
              <li className="grow-on-hover">
                <Link to="#tabs-1" onClick={() => handleTabClick('tabs-1')}>
                  Explore the world on your terms, rent a car that suits your journey. <br />
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
              <li className="grow-on-hover">
                <Link to="#tabs-2" onClick={() => handleTabClick('tabs-2')}>
                  Drive the extra mile with our hassle-free car rental experience. <br />
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
              <li className="grow-on-hover">
                <Link to="#tabs-3" onClick={() => handleTabClick('tabs-3')}>
                  Hit the road in style with our fleet of meticulously rental cars. <br />
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
            </ul>

            <br />

            <div className="text-center">
              <Link to="/" className="filled-button">Read More</Link>
            </div>

            <br />
          </div>

          <div className="col-md-8">
            <section className="tabs-content">

              <article id="tabs-1" style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                <img src={require("../images/image200.jpg")} alt="" />
                <h4><Link to="blog-details.html">Lorem ipsum dolor sit amet, consectetur adipisicing.</Link></h4>
                <div className="wrapper">
                  <p className="typingss typing-demo-1">Discover the top 10 money-saving tips. For car that will transform your travel experience.</p>
                  <p className="typingss typing-demo-2">Stay updated on the latest industry trends Exclusive deals with AutoFlax.</p>
                  <p className="typingss typing-demo-3">Unlock the secrets to stress-free car rentals with AutoFlax. Offering unbeatable discounts.</p>
                  <p className="typingss typing-demo-4">Exploring the road. Your go to guide for car rental tips. tricks. and unforgettable journeys.</p>
                  <p className="typingss typing-demo-5">Explore the Best Car Rental Destination. Comprehensive Guide to Unforgettable Road Trips.</p>
                  <p className="typingss typing-demo-6">The Ultimate Comparison. Top 10 Car Rental Companies Ranked and Reviewed.</p>
                  <p className="typingss typing-demo-7">Unlocking the Secrets. A Behind-the-Scenes Look at the Car Rental Industry.</p>
                  <p className="typingss typing-demo-8">Roadside assistance and beyond. Your go-to resource for troubleshooting.</p>
                  <p className="typingss typing-demo-9">Stay informed and entertained on the go. Check out our blog for the latest trends.</p>
                  <p className="typingss typing-demo-10">Road Warriors Unite. 10 Essentials to Enhance Your Car Rental Journey.</p>
                  <p className="typingss typing-demo-11">Navigating the Rental Process. Step-by-Step Guide to Securing the Best Car Deals.</p>
                  <p className="typingss typing-demo-12">From Economy to Luxury. Must-Know Tips for Choosing the Perfect Rental Car.</p>
                  <p className="typingss typing-demo-13">Avoiding Pitfalls. Common Mistakes to Steer Clear of When Renting a Car.</p>
                  <p className="typingss typing-demo-14">The Green Drive. Eco-Friendly Car Rental Options and Sustainability Practices.</p>
                  <p className="typingss typing-demo-15">Ride in Style. A Glamorous Look at Exotic. Luxury Car Rentals Around the World.</p>
                  <p className="typingss typing-demo-16">Discover the top scenic road trips. With premium car and expert travel tips.</p>
                  <p className="typingss typing-demo-17">Navigating city adventures made easy. Your ultimate guide to urban exploration.</p>
                  <p className="typingss typing-demo-18">Fuel your wanderlust with budget-friendly. Car rental hacks and destination.</p>
                  <p className="typingss typing-demo-19">From luxury sedans to off-road adventures. Explore the world on wheels.</p>
                  <p className="typingss typing-demo-20">Maximize your road trip fun with family-friendly. For unforgettable vacations.</p>
                </div>
              </article>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

