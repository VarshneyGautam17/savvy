import React from "react";
import "../Style/Maincon1.css";
import man from "../images/man-suit-tie_3729.png";
import profit from "../images/profit_7314686.png";

import tax from "../images/taxes_6045320.png";
import contract from "../images/contract_8117562.png";

import { BiTask } from "react-icons/bi";
import correct from "../images/check-mark.png"
import { IoPerson } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineQuestionMark } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import { MdFileDownloadDone } from "react-icons/md";
import { MdUploadFile } from "react-icons/md";
import facebook from "../images/facebook.png";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import insta from "../images/instagram.png";
import linked from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import discussion from "../images/discussion.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import WhyUs from "./WhyUs";
import aisupport from "../images/aisupport.png";
import plan from "../images/Text page.jpg";

function Maincon1() {
  return (
    <>
      <div className="social-icons-class">
        <div className="m-1">
          <a href="https://www.facebook.com/profile.php?id=100094092183646&mibextid=kFxxJD" target="_blank">
          <img src={facebook} className="social-icons" alt="image not load" />
          </a>
        </div>
        <div className="">
          <a href="https://www.instagram.com/taxsavvy.in?igsh=ZXF5dHRkN3pyeGlw&utm_source=qr" target="_blank">
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
          <a href="https://x.com/mytaxsavvy?s=11&t=GEEFJAg7LB8D0Tgsk2vF5w" target="_blank">
          <img src={twitter} className="social-icons" alt="image not load" />
          </a>
        </div>
        <div className="m-1">
          <a href="https://wa.me/+917900799900" target="_blank">
          <img src={whatsapp} className="social-icons" alt="image not load" />
          </a>
        </div>
      </div>
      <div id="grad">
        <div className="d-flex justify-content-evenly px-3 align-items-center flex-wrap">
          <div className="col-lg-5 col-sm-12 col-md-6 ">
            <h1>Grow Savings, Save Money &amp; Time</h1>
            <h2>Professional Support for all</h2>
            <h2>Customized Investment Tips</h2>
            <p className="mt-3">
              We provide professional support in the most convenient and user
              friendly way by assigning a dedicated savvy (expert) for tax
              return filing and financial services for individuals, SMEs and
              enterprises with Income Tax Returns, GST, and MORE.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-6 p-5"
            style={{ borderRadius: "1rem", backgroundColor: "#fdfdfdec" }}
          >
            <div className="text-center py-3">
              <img src={man} style={{ width: "8rem" }} alt="" />
            </div>
            <h4 className="text-center">Get a Tax Savvy (Expert/CA)</h4>
            <p>
              Get your Savvy (Expert/CA) to do tax filing for you. It is
              convenient &amp; fast with maximum refund calculated for you.
            </p>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-info btn-sm">Conncet Us</button>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity={1}
            d="M0,0L48,42.7C96,85,192,171,288,197.3C384,224,480,192,576,165.3C672,139,768,117,864,101.3C960,85,1056,75,1152,112C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div style={{ height: "auto" }} className="pb-4">
        <div className="container">
          <h1 className="text-center">We Ensure</h1>
          <p className="text-center">
            We have special care and love for Salaried Individuals. Because we
            understand your world better! We love to associate with you!
          </p>
          <div className="row flex-wrap justify-content-center">
            <div
              className="col-lg-3 col-sm-12 col-md-6 shadow m-2 mx-3 p-2"
              style={{ borderRadius: "2rem" }}
            >
              <div className="text-center p-4">
                <span
                  className="p-5"
                  style={{ backgroundColor: "#00b4eb", borderRadius: "0.8rem" }}
                >
                  <img
                    src={contract}
                    style={{ width: "6rem", height: "6rem" }}
                    alt=""
                  />
                </span>
              </div>
              <h4 className="text-center">Smooth Filing of ITR</h4>
            </div>
            <div
              className="col-lg-3 col-sm-12 col-md-6 m-2 mx-3 shadow p-2"
              style={{ borderRadius: "2rem" }}
            >
              <div className="text-center p-4">
                <span
                  className="p-5"
                  style={{ backgroundColor: "#00b4eb", borderRadius: "0.8rem" }}
                >
                  <img
                    src={tax}
                    style={{ width: "6rem", height: "6rem" }}
                    alt="image not load"
                  />
                </span>
              </div>
              <h4 className="text-center">Maximum Tax Savings</h4>
            </div>
            <div
              className="col-lg-3 col-sm-12 col-md-6 m-2 shadow mx-3 p-2"
              style={{ borderRadius: "2rem" }}
            >
              <div className="text-center p-4">
                <span
                  className="p-5"
                  style={{ backgroundColor: "#00b4eb", borderRadius: "0.8rem" }}
                >
                  <img
                    src={profit}
                    style={{ width: "6rem", height: "6rem" }}
                    alt=""
                  />
                </span>
              </div>
              <h4 className="text-center">Best Investment Guidance</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" style={{ backgroundColor: "#00b4eb" }}>
        <h1 className="text-center mb-3">How we work?</h1>
        <div className="row justify-content-center">
          <div
            className="col-lg-2 col-md-3 col-sm-6 p-3 shadow m-1"
            style={{ borderRadius: "0.6rem", backgroundColor: "white" }}
          >
            <p style={{ color: "gray" }} className="text-end">
              1
            </p>
            <div className="text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <BiTask className="fs-1" />
              </span>
            </div>
            <h5 className="my-3 text-center">Approach</h5>
            <p className="text-center">
              We associate with you and your amazing experience of ITR filing
              starts.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-3 col-sm-6 p-3 shadow m-1"
            style={{ borderRadius: "0.6rem", backgroundColor: "white" }}
          >
            <p style={{ color: "gray" }} className="text-end">
              2
            </p>
            <div className="text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <IoPerson className="fs-1" />
              </span>
            </div>
            <h5 className="my-3 text-center">Dedicated Tax Savvy (Expert)</h5>
            <p className="text-center">
              We assign a dedicated Professional Tax Savvy (Expert) for filing
              ITR and every support.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-3 col-sm-6 p-3 shadow m-1"
            style={{ borderRadius: "0.6rem", backgroundColor: "white" }}
          >
            <p style={{ color: "gray" }} className="text-end">
              3
            </p>
            <div className="text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <TiDocumentText className="fs-1" />
              </span>
            </div>
            <h5 className="my-3 text-center">Document</h5>
            <p className="text-center">
              Savvy will ask for some documents (PAN, Adhar, etc.)
            </p>
          </div>
          <div
            className="col-lg-2 col-md-3 col-sm-6 p-3 shadow m-1"
            style={{ borderRadius: "0.6rem", backgroundColor: "white" }}
          >
            <p style={{ color: "gray" }} className="text-end">
              4
            </p>
            <div className="text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <GiDiscussion className="fs-1" />
              </span>
            </div>
            <h5 className="my-3 text-center">Discussion</h5>
            <p className="text-center">
              Savvy will arrange a convenient time to explain your income,
              taxes, savings, refunds, and investments.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-3 col-sm-6 p-3 shadow m-1"
            style={{ borderRadius: "0.6rem", backgroundColor: "white" }}
          >
            <p style={{ color: "gray" }} className="text-end">
              5
            </p>
            <div className="text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <MdFileDownloadDone className="fs-1" />
              </span>
            </div>
            <h5 className="my-3 text-center">Yay! We are done!</h5>
            <p className="text-center">
              Savvy will file your Final ITR through the Income Tax Portal and
              share the final ITR file
            </p>
          </div>
        </div>
        <div className="text-center py-3">
          <button className="btn btn-dark ">Connect Us for Better Exp.</button>
        </div>
      </div>
      <div className="container-fluid p-3">
        <h2 className="py-3 mb-4 text-center">
          Step by Step Discusion with Savvy
        </h2>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 p-0">
            <img
              src={discussion}
              className="img-fluid image-class"
              alt="image not load"
              style={{
                borderRadius: "0rem 2rem 0rem 2rem",
                border: "6px solid #00b4eb",
              }}
            />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 pt-3">
            <div className="d-flex">
              <div className="me-3">
                <span
                  className="px-2 pb-2"
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#00b4eb",
                    borderRadius: "50%",
                  }}
                >
                  <MdCurrencyRupee style={{ color: "white" }} />
                </span>
              </div>
              <div>
                <h4>Income Analysis and Discussion</h4>

                <p>
                  Savvy makes you understand each and everything about your
                  Income,Taxes, Savings and Investments.
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="me-3">
                <span
                  className=" px-2 pb-2"
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#00b4eb",
                    borderRadius: "50%",
                  }}
                >
                  <FaRegMoneyBillAlt style={{ color: "white" }} />
                </span>
              </div>
              <div>
                <h4>Deduction Analysis and Discussion</h4>
                <p className="">
                  Savvy calculates the maximum deduction to lower the taxes
                  using professional tax hacks.
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="me-3">
                <span
                  className=" px-2 pb-2"
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#00b4eb",
                    borderRadius: "50%",
                  }}
                >
                  <MdOutlineQuestionMark style={{ color: "white" }} />
                </span>
              </div>
              <div>
                <h4>Query and Discussion</h4>
                <p>
                  Discusion on all of your questions related to Income, Savings,
                  Future guidance, Inventment and anything you want!
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="me-3">
                <span
                  className=" px-2 pb-2"
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#00b4eb",
                    borderRadius: "50%",
                  }}
                >
                  <MdUploadFile style={{ color: "white" }} />
                </span>
              </div>
              <div>
                <h4>ITR filling with Maximum TDS Refund</h4>
                <p>
                  ITR filling will be done basis the discussion with you with
                  maximum refund calculation using professional tax saving
                  hacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-4">
        <div className="mb-5">
        <h1 className="text-center">Prices</h1>
        <h4 className="text-center">We make sure it doesn't hit your pocket</h4>
        </div>
        <div className="row justify-content-center ">
          <div
            className="col-lg-3 col-md-6 col-sm-12 shadow mt-5 mx-1 p-3 py-5"
            style={{ borderRadius: "1rem", height: "auto" }}
          >
            <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
              For Individual
            </h5>
            <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
              having income upto
            </h5>
            <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
              INR 7 Lacs
            </h5>
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
              <sup style={{ fontSize: "1rem" }}>₹</sup>
              499
            </h1>
            <p className="text-center" style={{ lineHeight: "1rem" }}>
              Discussion and Analysis
            </p>
            <p className="text-center" style={{ lineHeight: "1rem" }}>
              24/7 Support Available
            </p>
            <p className="text-center" style={{ lineHeight: "1rem" }}>
              30 minutes post filling QA time credits
            </p>

            <button className="btn btn-lg w-100 mt-3 button-class">
              Book Appointment
            </button>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 pb-3">
            <div
              className=" p-3 shadow m-0 py-5 "
              style={{
                backgroundColor: "#00b4eb",
                height: "98%",
                borderRadius: "1rem",
              }}
            >
              <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
                For Individual
              </h5>
              <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
                having income INR
              </h5>
              <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
                7-12 Lacs
              </h5>
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                <sup style={{ fontSize: "1rem" }}>₹</sup>
                799
              </h1>
              <p className="text-center" style={{ lineHeight: "1rem" }}>
                Discussion and Analysis
              </p>
              <p className="text-center" style={{ lineHeight: "1rem" }}>
                24/7 Support Available
              </p>
              <p className="text-center" style={{ lineHeight: "1rem" }}>
                30 minutes post filling QA time credits
              </p>

              <button className="btn btn-lg w-100 btn-light mt-3">
                Book Appointment
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 mx-1 pb-3 p-0"
            style={{ height: "auto" }}
          >
            <div
              className="d-flex justify-content-center align-items-center shadow mt-4 p-4"
              style={{ height: "98%", borderRadius: "1rem" }}
            >
              <div>
                <h2>
                  <span
                    className="pb-1 "
                    style={{ borderBottom: "3px solid #00b4eb" }}
                  >
                    Query on Prices..?
                  </span>
                </h2>
                <p className="pt-2">
                  Not covered with these Plans ? Connect with us , we ensure to
                  offer the best prices depending upon YOUR CASE , we don't let
                  your prices turn you away.
                </p>
                <p>We follow, serve first and pay later</p>
                <button className="btn btn-lg w-100 mt-3 button-class">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-us container-fluid">
        <WhyUs />
      </div>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#00b4eb" }}
      >
        <h2 className="text-center pb-3">
          MOST OF THE SALARIED PERSON FIND THEMSELVES CONFUSED EVERY TAX SEASON.{" "}
          <span style={{ color: "white" }}> DO YOU KNOW WHY ?</span>{" "}
        </h2>
        <div className="col-lg-12 col-md-12 col-sm-12 text-center container">
          <img src={plan} style={{}} className="img-fluid" alt="" />
        </div>
        {/* <h3 className="mt-4">WE ARE HERE TO BRIDGE THIS GAP AND BECOME PERMANET CA / EXPERT FOR SALARIED PERSON</h3> */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-5 col-sm-5 d-flex justify-content-center align-items-center">
            <div className="ps-3">
              <h3>
                We not only file your ITR but also assist in following through out
                the year...
              </h3>


              <div className="d-flex mt-4">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                IVESTMENT ADVISORY
              </h5>
              </div> <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                PF RELATED ASSITANCE
              </h5>
              </div> <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                MAXIMUM TAX SAVING PLANS
              </h5>
              </div> <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                MAXIMUM INCOME TAX REFUND
              </h5>
              </div>
              <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                JOB SWITHING TAX IMPLICATIONS
              </h5>
              </div>  
              <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                ACCESS TO NETWORK OF LOAN, CREDIT CARD AND OTHER SERVICES
              </h5>
              </div>
              <div className="d-flex">
                <div>
                <img src={correct} className="me-2" style={{width:"1.2rem"}} alt="" />
                </div>
                <h5>
                INCOME TAX DECLARATION ASSITANCE IN YOUR OFFICE (HRA,80C etc.){" "}
              </h5>
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-5 text-end">
            <img
              src={aisupport}
              className="img-fluid"
              style={{ height: "30rem" }}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="parallax">
        <div className="" style={{ height: "auto", margin: 0 }}>
          <div className="benifits p-4">
            <h1
              className="text-center mb-3"
              style={{ color: "white", textShadow: "2px 2px 4px black" }}
            >
              Benefits of Filing ITR
            </h1>
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
                <ul className="list">
                  <li>Refund of Excess Taxes</li>
                  <li>Creditworthiness</li>
                  <li>Claiming HRA (House Rent Allowance)</li>
                  <li>Retirement Benefits</li>
                  <li>Compliance for Financial Institutions</li>
                  <li>Eligibility for Subsidies and Grants</li>
                  <li>Proof of Income for Visa Sponsorship</li>
                  <li>Professional Networking Opportunities</li>
                  <li>Access to Government Schemes</li>
                  <li>Building Credit History</li>
                  <li>Immigration and Visa Applications</li>
                  <li>Insurance Premium Discounts</li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
                <ul className="list">
                  <li>Car Loan Approval</li>
                  <li>Home Loan Approval</li>
                  <li>Personal Loan Approval</li>
                  <li>Health Insurance Claims</li>
                  <li>Unlocking Tax Savings</li>
                  <li>Securing Financial Future</li>
                  <li>Ensuring Legal Compliance</li>
                  <li>Avail Tax Deductions and Exemptions</li>
                  <li>Financial Planning</li>
                  <li>Compliance for Employers</li>
                  <li>Record of Income</li>
                  <li>Track Financial Progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Maincon1;
