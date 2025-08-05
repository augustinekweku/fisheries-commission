import React from "react";

const DevelopmentPartners = () => {
  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <p>Development Partners</p>
        </div>

        <div className="container">
          <ul>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>Ghana Fisheries Recovery Activities - USAID</span>
            </li>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>Coastal Development Authority (CODA)</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPartners;
