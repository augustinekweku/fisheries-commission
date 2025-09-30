"use client";

import React from "react";
import { useTranslations } from "next-intl";

const InformalInstitutions = () => {
  const t = useTranslations("collaborators");

  const informalList: string[] = t.raw("informalList");

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <p>{t("informalTitle")}</p>
        </div>

        <div className="container">
          <ul>
            {informalList.map((item, index) => (
              <li key={index} className="">
                <i className="bi bi-check2-circle me-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InformalInstitutions;
