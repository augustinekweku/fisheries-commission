import React from "react";

const AboutFiti = () => {
  return (
    <div>
      <h2 className="fw-bold mb-lg-5 mb-4 text-center">
        ABOUT THE FITI STANDARD
      </h2>
      <article className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <img
              src="assets/img/fiti.png"
              alt="fiti image"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-7">
            <p>
              At the heart of the initiative is the FiTI Standard, an
              internationally recognised framework on what information on
              fisheries should be published online by public authorities.
            </p>
            <p>
              The FiTI Standard provides governments, the fishing industry (both
              large-scale and small-scale), and civil society with a
              comprehensive and credible way to achieve and maintain high levels
              of transparency on the management of the marine fisheries sector
              and the activities of fishers and fishing companies.
            </p>
            <p>
              The FiTI Standard is the outcome of extensive discussions,
              spanning nearly two years, by members of the{" "}
              <strong>FiTI International Advisory Group</strong>, including
              representatives from governments, large-scale and small-scale
              fishing sector organisations, multinational and regional fisheries
              organisations and civil society groups working on fisheries and
              marine conservation.
            </p>
            <p>
              The intention has been to produce a comprehensive Standard that
              covers all facets of the FiTI and provides clear direction to
              countries that want to be part of this initiative. Yet all those
              involved in this process appreciate that the FiTI will evolve
              further over time, and it will be the role of the FiTI
              International Board to review the FiTI Standard with the option of
              enhancing it.
            </p>
            <p>
              Overall, the FITI Standard is divided in two main parts: Part I is
              intended for countries, Part II outlines the provisions for the
              international governance of the initiative.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutFiti;
