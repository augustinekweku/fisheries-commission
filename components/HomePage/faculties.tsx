import React from "react";

const Faculties = () => {
  const sections = [
    {
      id: 1,
      image: "assets/img/faculties/faculties-1.jpg",
      title: "Fisheries Leadership",
      description: "Information about Fisheries Leadership",
    },
    {
      id: 2,
      image: "assets/img/faculties/faculties-3.jpg",
      title: "Regional Offices",
      description:
        "Information on all our regional offices and their activities",
    },
    {
      id: 3,
      image: "assets/img/faculties/faculties-2.png",
      title: "MOFA",
      description: "Ministry Of Fisheries and Aquaculture",
    },

    {
      id: 4,
      image: "assets/img/faculties/faculties-4.jpg",
      title: "Vessel Registry",
      description: "Registration information about all fishing vessels",
    },
    {
      id: 5,
      image: "assets/img/faculties/faculties-5.jpg",
      title: "Reports",
      description: "General Reports of the Fisheries Commission",
    },
    {
      id: 6,
      image: "assets/img/faculties/faculties-6.jpg",
      title: "Statistics",
      description: "Statistical informtaion about fish production",
    },
    {
      id: 7,
      image: "assets/img/faculties/faculties-7.jpg",
      title: "Secretariat",
      description: "National Premix Fuel Secretariat",
    },
  ];

  return (
    <section id="team" className="team section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>SECTIONS</h2>
        <p>Our Various Sections</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={section.image}
                    className="img-fluid"
                    alt={section.title}
                  />
                </div>
                <div className="member-info">
                  <h4>{section.title}</h4>
                  <span>{section.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
