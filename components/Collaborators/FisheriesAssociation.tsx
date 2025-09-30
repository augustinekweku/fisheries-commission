"use client";

import React from "react";
import { useTranslations } from "next-intl";

const FisheriesAssociation = () => {
  const t = useTranslations("collaborators");

  const associationsList: string[] = t.raw("associationsList");

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <p>{t("associationsTitle")}</p>
        </div>

        <div className="container">
          <ul>
            {associationsList.map((association, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle me-1"></i>
                <span>{association}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FisheriesAssociation;
