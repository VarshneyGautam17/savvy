import React from 'react'
import logo from "../images/Savvy Logo final-01.jpg";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src={logo}
        alt="Logo not Load"
        style={{ width: "10rem", height: "4rem" }}
      />
    </a>
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
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our Services
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        <button className="btn btn-info">
          Contact Us
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header