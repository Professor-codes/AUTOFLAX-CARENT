import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faIdCard, faRoad } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faRoad} size="xl" style={{ color: "#000000", }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item" class="waviy-nav">
                <Link className="nav-link grow-on-hover" to="/">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link grow-on-hover" to="/fleet">Fleet<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link grow-on-hover" to="/about">About<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link grow-on-hover" to="/team">Team<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link grow-on-hover" to="/contact">Contact Us<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#000000", }} />
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faIdCard} size="lg" style={{ color: "#000000", }} />
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar