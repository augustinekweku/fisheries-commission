import React from "react";

const InformalInstitutions = () => {
  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-4 mb-1">
          <p>Informal Institutions</p>
        </div>

        <div className="container">
          <ul>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>
                National Fish Processors and Traders Association (NAFPTA)
              </span>
            </li>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>Ghana National Canoe Fishermen Council (GNCFC)</span>
            </li>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>
                Ghana National Association of Farmers and Fishermen (GNAFF)
              </span>
            </li>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>National Fisheries Association of Ghana (NAFAG)</span>
            </li>
            <li>
              <i className="bi bi-check2-circle me-1"></i>
              <span>National Inland Canoe Fishermen Council (NICFC)</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InformalInstitutions;
