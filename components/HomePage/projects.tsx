import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "assets/img/projects/project-1.png",
    },
    {
      id: 2,
      image: "assets/img/projects/project-2.jpg",
      title: "MoFAD",
    },
    {
      id: 3,
      image: "assets/img/projects/project-3.jpg",
    },
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Progress through action</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="">
                <div className="">
                  <img
                    src={project.image}
                    className="img-fluid"
                    alt="project image"
                    style={{
                      maxHeight: "180px",
                      objectFit: "contain",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
