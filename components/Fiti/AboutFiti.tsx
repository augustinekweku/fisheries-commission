"use client";

import React from "react";
import { useTranslations } from "next-intl";

const AboutFiti = () => {
  const t = useTranslations("aboutFiti");

  return (
    <div>
      <h2 className="fw-bold mb-lg-5 mb-4 text-center">{t("title")}</h2>
      <article className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <img
              src="assets/img/fiti.png"
              alt={t("imageAlt")}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-7">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>
              {t.rich("paragraph3", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("paragraph4")}</p>
            <p>{t("paragraph5")}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutFiti;
