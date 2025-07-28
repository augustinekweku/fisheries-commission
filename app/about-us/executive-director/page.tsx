import React from "react";

const ExecutiveDirectorPage = () => {
  return (
    <div className="container-fluid">
      <section id="about" className="about section">
        <div className="container section-title">
          <h2>Executive Director</h2>
          <p>Prof. Benjamin B. Campion</p>
        </div>
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 content">
              <img
                src="/assets/img/executive-director.jpg"
                className="img-fluid"
                alt="Prof. Benjamin B. Campion"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="col-lg-8 mt-lg-4">
              <p>
                <strong>Prof. Benjamin B. Campion</strong>, Executive Director,
                Fisheries Commission.
              </p>

              <p>
                Until his appointment, Benjamin Betey Campion (PhD.) was an
                associate professor at the Department of Fisheries and Watershed
                Management of the Kwame Nkrumah University of Science and
                Technology, Kumasi (KNUST).
              </p>

              <p>
                Prof. Campion has a very diverse academic upbringing, which has
                imbued him with varied and practical knowledge in his area of
                expertise: BSc. Botany (University of Cape Coast), MSc. Aquatic
                Tropical Ecology (University of Bremen), MSc. Sustainable
                Resource Management (Technical University of Munich) and a PhD.
                in Natural Sciences (University of Bremen). He is also a
                certified High Conservation Values (HCV) assessor.
              </p>

              <p>
                Prof. Campion has for over 20 years been teaching and conducting
                research in the University. His areas of academic interest are
                fisheries management, oceanography and coastal issues, aquatic
                resource ecology, wetlands, resource and conflict management,
                climate geography, adaptation and resilience.
              </p>

              <p>
                Prof. Campion brings to the Commission several years of research
                and working experience with fisheries stakeholders, and
                networks, both local and international. He is a member of the
                International Collective in Support of Fishworkers (ICSF) and
                the Association for the Sciences of Limnology and Oceanography
                (ASLO).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveDirectorPage;
