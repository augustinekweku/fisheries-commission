import React from "react";

const AboutUsPage = () => {
  return (
    <div className="container-fluid">
      <section id="about" className="about section">
        <div className="container section-title">
          <h2>About US</h2>
          <p>THE FISHERIES COMMISSION</p>
        </div>

        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 content">
              <img
                src="/assets/img/fisheries-logo.jpg"
                className="img-fluid px-5 px-lg-0 mb-3"
                alt="About Us"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="col-lg-8 mt-lg-4">
              <p>
                The Fisheries Commission is the implementing agency of the
                Ministry of Fisheries and Aquaculture Development (MoFAD). We
                are constituted to be the actualizing force behind policies and
                regulations established by MoFAD.
              </p>

              <p>
                We are therefore responsible for all monitoring, control,
                surveillance, evaluation, and compliance functions in all areas
                of Fisheries development and management in Ghana, including Fish
                Health, Post-Harvest activities, and Safety and Quality
                assurance.
              </p>

              <p>
                Our work at the Fisheries Commission is guided by MoFAD’s
                policies and regulations, and we also provide valuable feedback
                to MoFAD to inform future policies.
              </p>

              <p>
                The Fisheries Commission was established under the Fisheries
                Act, 2002 (Act 625) to regulate and manage fisheries, the
                development of the fishing industry, and related matters.
              </p>

              <p>
                The Fisheries Commission under MoFAD is headed by the Executive
                Director, with the support of two Deputy Executive Directors
                (Deputy Executive Director, Technical and Deputy Executive
                Director, General Services).
              </p>

              <p>
                Other line Directors, head regional offices across the various
                Aquaculture and Marine sector regions.
              </p>

              <h5 className="mt-4 fw-bold">Mandate</h5>
              <p>
                To regulate and manage fisheries and see to the development of
                the fishing industry and related matters.
              </p>

              <h5 className="mt-4 fw-bold">Vision</h5>
              <p>
                To be a viable and dynamic agency for accelerated development of
                Fisheries and Aquaculture.
              </p>

              <h5 className="mt-4 fw-bold">Mission</h5>
              <p>
                To promote the development and sustainability of Fisheries and
                Aquaculture through:
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i> <span>Research</span>
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i>{" "}
                  <span>Technical Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
