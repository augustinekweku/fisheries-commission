"use client";

import React from "react";

const TransparencyRequirements = () => {
  const transparencyItems = [
    {
      id: 1,
      title:
        "Public Registry of National Fisheries Laws, Regulations and Official Policy Documents",
      icon: "assets/img/fiti/public-registry.png",
    },
    {
      id: 2,
      title: "Post-Harvest Sector and Fish Trade",
      icon: "assets/img/fiti/post.png",
    },
    {
      id: 3,
      title: "Fisheries Tenure Arrangements",
      icon: "assets/img/fiti/tenure.png",
    },
    {
      id: 4,
      title: "Fisheries Law Enforcement",
      icon: "assets/img/fiti/law.png",
    },
    {
      id: 5,
      title: "Foreign Fishing Access Agreements",
      icon: "assets/img/fiti/foreign.png",
    },
    {
      id: 6,
      title: "Labour Standards",
      icon: "assets/img/fiti/labour.png",
    },
    {
      id: 7,
      title: "The State of the Fisheries Resources",
      icon: "assets/img/fiti/state.png",
    },
    {
      id: 8,
      title: "Fisheries Subsidies",
      icon: "assets/img/fiti/subsidy.png",
    },
    {
      id: 9,
      title:
        "Large Scale Fisheries (Vessel Registry, Payments for fishing, Recorded catch data)",
      icon: "assets/img/fiti/scale.png",
    },
    {
      id: 10,
      title: "Official Development Assistance",
      icon: "assets/img/fiti/official.png",
    },
    {
      id: 11,
      title: "Small-Scale Fisheries",
      icon: "assets/img/fiti/small-scale.png",
    },
    {
      id: 12,
      title: "Beneficial Ownership",
      icon: "assets/img/fiti/beneficial.png",
    },
  ];

  return (
    <div
      className="px-2 py-4 p-lg-5"
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-4">The 12 transparency requirements</h3>
          <p className="text-muted px-3">
            At the heart of the FiTI Standard are 12 transparency requirements
            which are applicable for all countries (for more Information please
            refer to section B.1 of the FiTI Standard):
          </p>
        </div>

        {/* Grid of transparency requirements */}
        <div className="row g-4">
          {transparencyItems.map((item) => (
            <div key={item.id} className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.2s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <div className="card-body d-flex align-items-center p-4">
                  <div
                    className="me-4 flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#e9ecef",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={`Icon for ${item.title}`}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        display: "none",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#6c757d",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <div className="flex-grow-1">
                    <h5
                      className="card-title mb-0 fw-semibold"
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.4",
                        color: "#343a40",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparencyRequirements;
