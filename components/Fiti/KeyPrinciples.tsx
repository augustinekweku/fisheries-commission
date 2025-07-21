"use client";

import React from "react";

const KeyPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "Multi-Stakeholder participation",
      description:
        "The FiTI is implemented in countries through National Multi-Stakeholder Groups, consisting of representatives from government, business and organised civil society. These groups work collectively to assess the information in the public domain, make recommendations on how to improve information published by national authorities and jointly approve the publication of FiTI Reports.",
      icon: "assets/img/fiti/icon-1.png",
    },
    {
      id: 2,
      title: "Progressive improvement",
      description:
        "Countries are not expected to have complete data for every transparency requirement from the beginning. Instead, public authorities must disclose the information they have, and where important gaps exist, improvements over time must be demonstrated. As such, engaging with the FiTI is not intended to be a burdensome and costly research activity.",
      icon: "assets/img/fiti/icon-2.png",
    },
    {
      id: 3,
      title: "Transparency in the public domain",
      description:
        "The FiTI emphasises the need for national authorities to develop and strengthen their own systems for collecting and publishing information online in a complete and accessible manner. The FiTI Report is therefore not intended to replace or duplicate existing government information systems.",
      icon: "assets/img/fiti/icon-3.png",
    },
    {
      id: 4,
      title: "Public debate",
      description:
        "The FiTI offers an important means to raise levels of openness and public access to information which can support countries in maintaining or achieving robust democratic governance and accountability in their fisheries sector.",
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
          <h2 className="fw-bold mb-5 px-lg-5">
            Key principles for increasing transparency and participation under
            the FiTI
          </h2>
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
