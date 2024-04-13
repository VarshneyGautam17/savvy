import React from 'react'
import logo from "../images/Savvy Logo final-01.jpg";
import { IoIosMailOpen } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Qrcode from "../images/TaxSavvy.png";
import { FaArrowRightLong } from "react-icons/fa6";
import "../Style/Footer.css";

function Footer() {
  return (
    <div
        className="footer container-fluid"
        style={{ backgroundColor: "#00b4eb", height: "auto" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="px-5 py-3 text-center">
              <img
                src={logo}
                className="img-fluid"
                style={{
                  borderRadius: "1rem 0rem 1rem 0rem",
                  width: "13rem",
                  height: "5rem",
                }}
                alt=""
              />
            </div>
            <div>
              <p className="px-3 text-center m-0">
                We provide professional support in the most convenient and user
                friendly way by assigning a dedicated savvy (expert) for tax
                return filing and financial services for individuals, SMEs and
                enterprises with Income Tax Returns, GST, and MORE.
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
                <a href="">About Us </a>
              </p>
              <p className=" footer-links">
                <FaArrowRightLong className='me-2' />
                <a href="">Contact Us </a>{" "}
              </p>
              <p className=" footer-links">
                <FaArrowRightLong className='me-2' /><a href="">Our Services</a>{" "}
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
                  style={{ width: "10rem", height: "11.5rem" }}
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
              <a href="" style={{ color: "#00b4eb", textDecoration: "none" }}>
                mytaxsavvy.com
              </a>
            </p>
          </div>
         
        </div>
      </div>
  )
}

export default Footer