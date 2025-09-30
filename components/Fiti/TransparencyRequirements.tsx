"use client";

import React from "react";
import { useTranslations } from "next-intl";

const TransparencyRequirements = () => {
  const t = useTranslations("transparency");

  const transparencyItems = [
    {
      id: 1,
      title: t("items.publicRegistry"),
      icon: "assets/img/fiti/public-registry.png",
    },
    { id: 2, title: t("items.postHarvest"), icon: "assets/img/fiti/post.png" },
    {
      id: 3,
      title: t("items.tenureArrangements"),
      icon: "assets/img/fiti/tenure.png",
    },
    {
      id: 4,
      title: t("items.lawEnforcement"),
      icon: "assets/img/fiti/law.png",
    },
    {
      id: 5,
      title: t("items.foreignAccess"),
      icon: "assets/img/fiti/foreign.png",
    },
    {
      id: 6,
      title: t("items.labourStandards"),
      icon: "assets/img/fiti/labour.png",
    },
    {
      id: 7,
      title: t("items.stateResources"),
      icon: "assets/img/fiti/state.png",
    },
    { id: 8, title: t("items.subsidies"), icon: "assets/img/fiti/subsidy.png" },
    { id: 9, title: t("items.largeScale"), icon: "assets/img/fiti/scale.png" },
    { id: 10, title: t("items.oda"), icon: "assets/img/fiti/official.png" },
    {
      id: 11,
      title: t("items.smallScale"),
      icon: "assets/img/fiti/small-scale.png",
    },
    {
      id: 12,
      title: t("items.beneficialOwnership"),
      icon: "assets/img/fiti/beneficial.png",
    },
  ];

  return (
    <div
      className="py-4 p-lg-5"
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-4">{t("title")}</h3>
          <p className="text-muted px-1 px-lg-3">{t("description")}</p>
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
