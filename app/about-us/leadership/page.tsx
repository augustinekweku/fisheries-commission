"use client";

import React from "react";
import { useTranslations } from "next-intl";

const LeadershipPage = () => {
  const t = useTranslations("leadership_page");

  return (
    <div className="container-fluid">
      <div className="about section">
        <div className="container section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 content">
              <img
                src="/assets/img/executive-director.jpg"
                className="img-fluid"
                alt={t("campion.name")}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="col-lg-8 mt-lg-4">
              <h3 className="h5 mb-3 text-uppercase">
                <strong className="fw-bold">{t("campion.name")}</strong>,{" "}
                {t("campion.position")}
              </h3>

              <p>{t("campion.paragraph1")}</p>

              <p>{t("campion.paragraph2")}</p>

              <p>{t("campion.paragraph3")}</p>

              <p>{t("campion.paragraph4")}</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 content">
              <img
                src="/assets/img/team/asiedu.jpg"
                className="img-fluid"
                alt={t("asiedu.name")}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="col-lg-8 mt-lg-4">
              <h3 className="h5 mb-3 text-uppercase">
                <strong className="fw-bold">{t("asiedu.name")}</strong>,{" "}
                {t("asiedu.position")}
              </h3>
              <p>{t("asiedu.paragraph1")}</p>
              <p>{t("asiedu.paragraph2")}</p>
              <p>{t("asiedu.paragraph3")}</p>
              <p>{t("asiedu.paragraph4")}</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 content">
              <img
                src="/assets/img/team/cobinah.jpg"
                className="img-fluid"
                alt={t("cobinah.name")}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="col-lg-8 mt-lg-4">
              <h3 className="h5 mb-3 text-uppercase">
                <strong className="fw-bold">{t("cobinah.name")}</strong>,{" "}
                {t("cobinah.position")}
              </h3>
              <p>{t("cobinah.paragraph1")}</p>
              <p>{t("cobinah.paragraph2")}</p>
              <p>{t("cobinah.paragraph3")}</p>
              <p>{t("cobinah.paragraph4")}</p>
              <p>{t("cobinah.paragraph5")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
