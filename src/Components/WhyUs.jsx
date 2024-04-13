import React from 'react';
import "../Style/WhyUs.css";
import { GrDocumentTxt } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import save from "../images/money_1175239.png";
import support from "../images/call-center_1436988.png";
import { IoPerson } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";

function WhyUs() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-head col-sm-12">
        <h4>
          <span>Why Choose</span> Us?
        </h4>
        <p>
        Corporate employees and taxpayers trust us because we embody integrity, transparency, and reliability, fostering a culture of accountability and respect while consistently delivering exceptional service and value.
        </p>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">

          <span className="icon feature_box_col_one">
          
            <GrDocumentTxt />
          </span>
          <h6>Super Convenient and Easy</h6>
          <p>
          Our Savvy connects with you ask for some documents and rest lies with us.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          <span className="icon feature_box_col_two">
            <img src={save} alt="" style={{marginTop:"-5px",width:"4rem"}} />
          </span>
          <h6>Maximum Savings and Refunds</h6>
          <p>
          Our savvy are well versed with the Tax laws and they know how to save your maximum tax legally and help you getting maximum refund.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
         
          <span className="icon feature_box_col_three">
           <IoPerson style={{fontSize:"4.3rem",marginTop:"-10px"}}/>
          </span>
          <h6>Professional Savvy (Experts)</h6>
          <p>
          This is which makes us unique and best in the industry, we assign a dedicated expert (we call them savvy) for all, who stays till finalization of services, Our Savvy can be contacted for any of your related questions or Queries.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
         
          <span className="icon feature_box_col_four">
           <img src={support} alt="" style={{width:"4rem",marginTop:"-15px"}} />
          </span>
          <h6>24 x 7 Support over Call, Messages and Email</h6>
          <p>
          This is again for which we are loved more, the instant support and availability, because we understand your world better!
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">

          <span className="icon feature_box_col_five">
            <AiFillSafetyCertificate style={{fontSize:"4rem"}}/> 
          </span>
          <h6>Stress free and Safe</h6>
          <p>
          Once you partner with us, your priority becomes your core business. We handle all your tax, savings, and investment requirements, ensuring comprehensive support and guidance throughout.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
         
          <span className="icon feature_box_col_six">
           <GiMoneyStack style={{fontSize:"4rem"}}/>
          </span>
          <h6>Know everything about your Income</h6>
          <p>
          We make you understand each and everything about your Income, Taxes and Investments. We advise even if you are not our customer to understand about your income/salary and other benefits. If any confusion, we are just a click away.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default WhyUs