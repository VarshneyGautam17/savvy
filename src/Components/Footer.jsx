import React from 'react'
import logo from "../images/Savvy Logo final-01.png";
import { IoIosMailOpen } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Qrcode from "../images/qr.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import "../Style/Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
        className="footer container-fluid"
        
      >
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="px-5 py-3 text-center mt-4">
              <img
                src={logo}
                className="img-fluid"
                style={{
                  borderRadius: "1rem 0rem 1rem 0rem",
                  width: "13rem",
                  height: "3.5rem",
                }}
                alt=""
              />
            </div>
            <div>
              <p className="px-3 text-center m-0">
              We're here to bridge the gap and revolutionize the way salaried
              individuals manage their Income Tax Return (ITR).
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="pt-5">
              <h2 className="pb-2">
                {" "}
                <span
                  className="pb-1"
                  style={{ borderBottom: "2px solid black" }}
                >
                  Quick Links
                </span>
              </h2>
              <p className=" footer-links ">
                {" "}
                <IoIosMailOpen className="fs-5" />{" "}
                <a href="mailto:team@mytaxsavvy.com">team@mytaxsavvy.com </a>{" "}
              </p>
              <p className=" footer-links">
                <IoIosCall className="fs-5" />{" "}
                <a href="tel:+917900799900">+91 7900799900</a>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="pt-5">
              <h2 className="pb-2">
                <span
                  className="pb-1"
                  style={{ borderBottom: "2px solid black" }}
                >
                  Popular Links
                </span>
              </h2>
              <p className=" footer-links ">
                <FaArrowRightLong className='me-2' />
                <Link to="/about-us">About Us </Link>
              </p>
              <p className=" footer-links">
                <FaArrowRightLong className='me-2' />
                <a href="https://wa.me/+917900799900" target="_blank">Contact Us </a>{" "}
              </p>
             
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="pt-5">
              <h2 className="text-center pb-2">
                <span
                  className="pb-1"
                  style={{ borderBottom: "2px solid black" }}
                >
                  Get In Touch
                </span>
              </h2>
              <div className="d-flex justify-content-center">
                <img
                  src={Qrcode}
                  className="img-fluid"
                  style={{ width: "10rem", height: "10rem" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center mt-2 align-items-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="text-white ps-2 pt-1">
              &copy;All Rights Reserved by{" "}
              <Link to="/" style={{ color: "#00b4eb", textDecoration: "none" }}>
                mytaxsavvy.com
              </Link>
            </p>
          </div>
         
        </div>
      </div>
  )
}

export default Footer