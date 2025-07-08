import React from "react";

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>LEARN MORE ABOUT US</h3>
            <p className="text-capitalize">
              WANT TO KNOW MORE ABOUT THE COMMISSION? CURIOUS WHAT ELSE WE DO?
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
