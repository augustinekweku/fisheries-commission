"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Faculties = () => {
  const t = useTranslations("FacultiesSection");
  const sections = t.raw("sections");

  return (
    <section id="team" className="team section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {sections.map((section: any, index: number) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              {section.isExternal ? (
                // External link
                <a
                  href={section.anchor}
                  className="team-member w-100 text-decoration-none"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                </a>
              ) : (
                // Internal link
                <Link
                  href={section.anchor}
                  className="team-member w-100 text-decoration-none"
                  style={{ display: "block" }}
                >
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
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
