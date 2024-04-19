import React from 'react'
import logo from "../images/Savvy Logo final-01.jpg";
import { Outlet, Link } from "react-router-dom";
import "../Style/Header.css";
import insta from "../images/instagram.png";
import linked from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top bg-white">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/" >
      <img
        src={logo}
        alt="Logo not Load"
        style={{ width: "10rem", height: "4rem" }}
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about-us">
            About Us
          </Link>
        </li>
        
      </ul>
      
      <a href="https://wa.me/+917900799900" target="_blank">
        <button className="btn btn-info">
          Contact Us
        </button>
        </a>
   
    </div>
  </div>
</nav>
<div className="social-icons-class">
        <div className="m-1">
          <a
            href="https://www.facebook.com/profile.php?id=100094092183646&mibextid=kFxxJD"
            target="_blank"
          >
            <img src={facebook} className="social-icons" alt="image not load" />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.instagram.com/taxsavvy.in?igsh=ZXF5dHRkN3pyeGlw&utm_source=qr"
            target="_blank"
          >
            <img
              src={insta}
              className="social-icons"
              alt="image not load"
              style={{ width: "2.7rem", height: "2.2rem" }}
            />
          </a>
        </div>
        <div className="m-1">
          <a href="https://www.linkedin.com/company/taxsavvy/" target="_blank">
            <img src={linked} className="social-icons" alt="image not load" />
          </a>
        </div>
        <div className="m-1">
          <a
            href="https://x.com/mytaxsavvy?s=11&t=GEEFJAg7LB8D0Tgsk2vF5w"
            target="_blank"
          >
            <img src={twitter} className="social-icons" alt="image not load" />
          </a>
        </div>
        <div className="m-1">
          <a href="https://wa.me/+917900799900" target="_blank">
            <img src={whatsapp} className="social-icons" alt="image not load" />
          </a>
        </div>
      </div>

<Outlet />

</>

  )
}

export default Header