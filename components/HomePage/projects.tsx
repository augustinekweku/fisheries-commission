"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

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
    <section id="projects" className="projects section">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2>{t("heading")}</h2>
        <p>{t("subtitle")}</p>
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
              <div>
                <img
                  src={project.image}
                  className="img-fluid"
                  alt={project.title || "project image"}
                  style={{
                    maxHeight: "180px",
                    objectFit: "contain",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
