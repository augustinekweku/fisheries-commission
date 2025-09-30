"use client";

import React from "react";
import { useTranslations } from "next-intl";

const DevelopmentPartners = () => {
  const t = useTranslations("collaborators");

  const developmentList: string[] = t.raw("developmentList");

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <p>{t("developmentTitle")}</p>
        </div>

        <div className="container">
          <ul>
            {developmentList.map((partner, index) => (
              <li key={index} className="">
                <i className="bi bi-check2-circle me-1"></i>
                <span>{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPartners;
