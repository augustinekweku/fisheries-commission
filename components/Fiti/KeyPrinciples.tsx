"use client";

import React from "react";
import { useTranslations } from "next-intl";

const KeyPrinciples = () => {
  const t = useTranslations("principles");

  const principles = [
    {
      id: 1,
      title: t("items.multiStakeholder.title"),
      description: t("items.multiStakeholder.description"),
      icon: "assets/img/fiti/icon-1.png",
    },
    {
      id: 2,
      title: t("items.progressive.title"),
      description: t("items.progressive.description"),
      icon: "assets/img/fiti/icon-2.png",
    },
    {
      id: 3,
      title: t("items.transparency.title"),
      description: t("items.transparency.description"),
      icon: "assets/img/fiti/icon-3.png",
    },
    {
      id: 4,
      title: t("items.publicDebate.title"),
      description: t("items.publicDebate.description"),
      icon: "assets/img/fiti/icon-4.png",
    },
  ];

  return (
    <div
      className="pt-5 px-2 py-3 px-lg-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-5 px-lg-5">{t("title")}</h2>
        </div>

        <div className="row">
          <div className="col-12">
            {principles.map((principle) => (
              <div key={principle.id} className="mb-5">
                <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-3">
                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#e9ecef",
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      src={principle.icon}
                      alt={`Icon for ${principle.title}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center text-md-start">
                    <h3
                      className="fw-bold mb-3"
                      style={{ fontSize: "1.3rem", color: "#343a40" }}
                    >
                      {principle.title}
                    </h3>
                    <p className="text-muted">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPrinciples;
