import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About US</h2>
          <p>WELCOME TO THE FISHERIES COMMISSION</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                The Fisheries Commission is the implementing agency of the
                Ministry of Fisheries and Aquaculture Development (MoFAD). We
                are constituted to be the actualizing force behind policies and
                regulations established by MoFAD. We are therefore responsible
                for
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>All monitoring, control, surveillance, evaluation</span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    Compliance functions in all areas of fisheries development
                    and management in Ghana
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>
                    These areas include fish health, post-harvest activities,
                    safety, and quality assurance.{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p>
                Our work at the Fisheries Commission is guided by MoFAD's
                policies and regulations, and we also provide valuable feedback
                to MoFAD to inform future policies.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
