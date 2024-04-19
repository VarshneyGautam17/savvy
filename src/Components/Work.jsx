import React, { useEffect } from "react";
import "../Style/Work.css";
import approach from "../images/approach.png"
import manager from "../images/manager.png"
import docs from "../images/licensing.png"
import discus from "../images/discussion.png"
import laptop from "../images/laptop.png"

function Work() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <>
            <h1 className="pt-3 text-center"><span className="pb-2" style={{borderBottom:"2px solid #00b4eb"}}>How We Work </span></h1>
      <section className="timeline">
        <ul>
          <li>
            <div >
              <span className="d-block  text-center">
                <span
                  className="p-4 "
                  style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
                >
                 <img src={approach} style={{width:"8rem"}} alt="" />
                </span>
              </span>
              <h5 className="my-3 text-center">Approach</h5>
              <p className="text-center">
                We associate with you and your amazing journey of ITR filing
                starts.
              </p>
            </div>
          </li>
          <li>
            <div >
            <span className="d-block  text-center">
            <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <img src={manager} style={{width:"8rem"}} alt="" />
              </span>
              </span>
              <h5 className="my-3 text-center">Dedicated Tax Savvy (Expert)</h5>
            <p className="text-center">
              We assign a dedicated Professional Tax Savvy (Expert) for filing
              ITR and  related support.
            </p>
            </div>
          </li>
          <li>
            <div >
            <span className="d-block  text-center">
            <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <img src={docs} style={{width:"8rem"}} alt="" />
              </span>
              </span>
              <h5 className="my-3 text-center">Document</h5>
            <p className="text-center">
              Savvy will ask for some documents (PAN, Adhar, etc.)
            </p>
            </div>
          </li>
          <li>
            <div >
           
              <span className="d-block  text-center">
              <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
               <img src={discus} style={{width:"8rem"}} alt="" />
              </span>
              </span>
              <h5 className="my-3 text-center">Discussion</h5>
            <p className="text-center">
            Savvy will discuss and explain your income,
              taxes, savings, refunds, and investments.
            </p>
            </div>
          </li>
          <li>
            <div >
            <span className="d-block  text-center">
            <span
                className="p-4"
                style={{ borderRadius: "50%", backgroundColor: "#00b4eb" }}
              >
                <img src={laptop} style={{width:"8rem"}} alt="" />
              </span>
              </span>
              <h5 className="my-3 text-center">Yay! We are done!</h5>
            <p className="text-center">
              Savvy will file your Final ITR on the Income Tax Portal and
              share the final ITR file
            </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Work;
