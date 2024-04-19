import React from "react";
import "../Style/Maincon1.css";
import man from "../images/mainlogo.png";
import profit from "../images/profit.png";

import tax from "../images/tax.png";
import contract from "../images/computer.png";
import visa from "../images/visa.png";
import network from "../images/network.png";
import government from "../images/government-scheme.png";
import insurance from "../images/insurance.png";
import loan from "../images/loan.png";
import health from "../images/health.png";
import financial from "../images/financial.png";
import frecord from "../images/frecord.png";

import { MdOutlineQuestionMark } from "react-icons/md";

import { MdUploadFile } from "react-icons/md";

import { FaRegMoneyBillAlt } from "react-icons/fa";

import discussion from "../images/diss.png";
import { MdCurrencyRupee } from "react-icons/md";
import retur from "../images/taxlogo.png";
import refund from "../images/track-it-refund (1).png";
import WhyUs from "./WhyUs";
import thinking from "../images/thinking.png";
import partenership from "../images/parternership.png";
import img2why from "../images/img2why.png";

import Work from "./Work";

function Maincon1() {
  return (
    <>
      

      <div id="grad">
        <div className="d-flex justify-content-evenly px-3 align-items-center flex-wrap">
          <div className="col-lg-5 col-sm-12 col-md-6 ">
            <h1 style={{ fontSize: "2rem" }}>
              Do you find yourself
            </h1>
            <h1>
             <span
                style={{
                  fontSize: "2.4rem",
                  color: "#00b4eb",
                  fontWeight: "bold",
                }}
              >
                Overwhelmed and Confused
              </span>
             </h1>
             <h1 style={{fontSize :"2rem"}}>
             Every tax season?
             </h1>
            <h5 style={{color:"gray"}}>
              We're here to bridge the gap and revolutionize the way salaried
              individuals manage their Income Tax Return (ITR).
            </h5>
            
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-6 p-3"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#00c8ff10",
              border: "5px solid rgba(0,100,200,0.07)",
            }}
          >
            <div className="text-center py-3">
              <img
                src={man}
                style={{ width: "12rem", borderRadius: "1rem" }}
                alt=""
              />
            </div>
            <h4 className="text-center">Get a Tax Savvy (Expert/CA)</h4>
            <p className="text-center">
              Get your Savvy (Expert/CA) to do tax filing for you. It is
              convenient &amp; fast with maximum refund calculated for you.
            </p>
            <div className="d-flex justify-content-center ">
              <a href="https://wa.me/+917900799900" target="_blank">
                <button className="btn btn-info btn-sm">Connect Now</button>
              </a>
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

      {/* why savvy */}

      <div className="container why-savvy">
        <h2 className="pb-4"><span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}>Why TaxSavvy...?</span></h2>
        <div className="row my-2">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <img src={thinking} style={{width:"10rem"}} alt="" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8  d-flex align-items-center">
            <h6 className="text-start" style={{ fontWeight: "bold" }}>
              We understand the struggles of the salaried class. We strive to build long-term relationships with our clients.
            </h6>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
            <img src={img2why} style={{width:"15rem"}} alt="" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8  d-flex align-items-center">
            <div className="ulwhy-savvy">
              <h6 className="text-start" style={{ fontWeight: "bold" }}>
                Just like businesses have their trusted financial consultants,
                TaxSavvy will be your permanent tax advisor. As a year-round partner, we will offer a comprehensive range of services beyond just filing ITR, such as:
              </h6>
              <ul>
                <li>
                  - Income tax declaration (HRA, 80C, Meal voucher, Insurances
                  etc.)
                </li>
                <li>- maximum income tax refund</li>
                <li>- PF related assistance</li>
                <li>
                  - Access to our network of affiliates such as loans, credit cards, insurance, etc.
                </li>
                <li>- Job change tax implications</li>
                <li>- Investment Advisory</li>
                <li>- Advance Tax Planning</li>
                <li>- Salary Structure Designing,</li>
                <li>- Personalized financial assistance.</li>
                <p className="mt-2">&nbsp;Feel free to reach out to us at any time during the year.
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <img src={partenership} style={{width:"10rem"}} alt="" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8  d-flex align-items-center">
            <h6 className="text-start" style={{ fontWeight: "bold" }}>
              Don't settle for impersonal tax services. Choose TaxSavvy for a personalized and proactive approach to manage your taxes. Let us be
              your financial companion on the journey to financial success.
            </h6>
          </div>
        </div>
      </div>

      {/* we enshure */}
      <div style={{ height: "auto" }} className="pb-4 mt-5">
        <div className="container">
          <h1 className="text-center"><span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}> We Ensure </span></h1>
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

      {/* how we work */}
      <Work />

      {/* step by step discussion */}
      <div className="container-fluid p-3">
        <h2 className="py-3 mb-4 text-center">
        <span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}>
          Step by Step Discusion with Savvy
          </span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 p-0">
            <img
              src={discussion}
              className="img-fluid image-class"
              alt="image not load"
              style={{
                borderRadius: "0rem 2rem 0rem 2rem",
                border: "3px solid #00b4eb",
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
                Savvy makes it easy for you to understand all the aspects of your income, taxes, savings, and investments.
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
                  using <span style={{color:"#00b4eb",fontWeight:"bold"}}>legal tax provisions</span>.
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
                  Future guidance, Investments and anything you want!
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
                  maximum refund calculation using <span style={{color:"#00b4eb",fontWeight:"bold"}}>legal tax provisions</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* prices and plans */}
      <div className="container-fluid my-4">
        <div className="mb-5">
          <h1 className="text-center"> <span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}>Prices</span></h1>
          <h4 className="text-center">
            We make sure it doesn't hit your pocket
          </h4>
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
              INR 10 Lacs
            </h5>
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
              <sup style={{ fontSize: "1rem" }}>₹</sup>
              699
            </h1>
            <p className="text-center" style={{ lineHeight: "1rem" }}>
              Discussion and Analysis
            </p>
            
            <p className="text-center" style={{ lineHeight: "1rem" }}>
              30 minutes post filling QA time credits
            </p>
            <a className="w-100" href="https://wa.me/+917900799900" target="_blank"> 
            <button className="btn btn-lg w-100 mt-3 button-class">
              Book Appointment
            </button>
            </a>
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
                having income more than 
              </h5>
              <h5 style={{ lineHeight: "1.2rem" }} className="text-center">
              INR 10 Lacs
              </h5>
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                <sup style={{ fontSize: "1rem" }}>₹</sup>
                899
              </h1>
              <p className="text-center" style={{ lineHeight: "1rem" }}>
                Discussion and Analysis
              </p>
             
              <p className="text-center" style={{ lineHeight: "1rem" }}>
                30 minutes post filling QA time credits
              </p>
              <a className="w-100" href="https://wa.me/+917900799900" target="_blank">
              <button className="btn btn-lg w-100 btn-light mt-3">
                Book Appointment
              </button>
              </a>
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
                  Not covered with these Plans ? Connect with us, we ensure to
                  offer the best prices depending upon YOUR CASE, we don't let
                  our prices turn you away.
                </p>
                <p>We follow, serve first and pay later</p>
                <a className="w-100" href="https://wa.me/+917900799900" target="_blank">
                <button className="btn btn-lg w-100 mt-3 button-class">
                  Contact Us
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why us */}
      <div className="why-us container-fluid">
        <WhyUs />
      </div>

      {/* benifits of filing itr */}
      <div className="container">
        <div
          className="d-flex justify-content-around"
          style={{
            borderTop: "1px solid gray",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3 className="text-start" style={{ fontWeight: "bold" }}>
            <span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}>
              Benefits of Filing ITR
              </span>
            </h3>
            <p className="text-start" style={{ color: "gray" }}>
            Filing your Income Tax Return (ITR) offers a multitude of benefits that extend far beyond mere compliance with tax regulations. By filing your ITR, you not only fulfill your civic duty but also unlock numerous financial advantages. Firstly, filing your ITR ensures compliance with tax laws, helping you avoid penalties and legal complications.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 text-end">
            <img src={retur} alt="" style={{ width: "12rem" }} />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Refund of Excess TDS
                </h5>

                <img src={refund} style={{ width: "2.5rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Through TaxSavvy, enjoy hassle-free processing and quick refunds for any excess TDS deducted, ensuring maximum returns and convenience.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Proof of Income for Visa Sponsorship
                </h5>

                <img src={visa} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              ITR provides certified income documentation crucial for visa sponsorship, ensuring smooth processing and approval for your international endeavors
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Professional Networking Opportunities
                </h5>

                <img src={network} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Connect with industry experts, attend exclusive events, and expand your network through TaxSavvy for unparalleled professional growth opportunities.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Access to Government Schemes
                </h5>

                <img src={government} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Unlock access to diverse government schemes tailored to your needs, facilitated by government for optimized financial benefits and support
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Insurance Premium Discounts
                </h5>

                <img src={insurance} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Benefit from exclusive insurance premium discounts available through various insurance company, ensuring comprehensive coverage at competitive rates for your peace of mind.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Loan Approval
                </h5>

                <img src={loan} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Ensure swift loan approvals by furnishing past years' Income Tax Returns, demonstrating financial stability and reliability for expedited processing and favorable outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Health Insurance Claims
                </h5>

                <img src={health} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Easily navigate health insurance claims with ITR, ensuring prompt processing and maximum reimbursement for your medical expenses.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Securing Financial Future
                </h5>
                <img src={financial} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
Secure your financial future by maintaining a reliable record of Income Tax Returns, ensuring stability and peace of mind for the long term.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              style={{
                borderTop: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="d-flex justify-content-between">
                <h5 className="text-start" style={{ fontWeight: "bold" }}>
                  Record of Income
                </h5>
                <img src={frecord} style={{ width: "3rem" }} alt="" />
              </div>
              <p className="text-start" style={{ color: "gray" }}>
              Maintain a comprehensive record of your income effortlessly, ensuring accuracy and compliance for financial management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div
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
      </div> */}

      {/* <div className="parallax">
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
      </div> */}
    </>
  );
}

export default Maincon1;
