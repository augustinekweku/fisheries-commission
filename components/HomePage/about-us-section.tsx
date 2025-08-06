import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="about section px-2">
        <div className="container section-title" data-aos="fade-up">
          <h2>About US</h2>
          <p>WELCOME TO THE FISHERIES COMMISSION</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/img/blog/navy-5.jpg"
                className="img-fluid"
                alt="About Us"
                style={{
                  maxHeight: "320px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div
              className="col-lg-8 mt-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
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
              <p>
                Our work at the Fisheries Commission is guided by MoFAD's
                policies and regulations, and we also provide valuable feedback
                to MoFAD to inform future policies.
              </p>
              <Link href="/about-us" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
