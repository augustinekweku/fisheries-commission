"use client";

import React from "react";
import { useTranslations } from "next-intl";

const FishDevelopmentPage = () => {
  const t = useTranslations("fishDevelopment");

  return (
    <section className="container-fluid">
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fw-semibold mb-5 text-uppercase text-center">
              {t("title")}
            </h2>

            {/* Main Image */}
            <img
              src="/assets/img/fisheries.png"
              alt={t("imageAlt")}
              className="img-fluid mb-4 rounded"
              style={{
                objectFit: "contain",
                width: "100vw",
                maxHeight: "230px",
              }}
            />

            {/* Main Content */}
            <div className="mx-auto mb-5">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
              <ol>
                <li>{t("list.item1")}</li>
                <li>{t("list.item2")}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FishDevelopmentPage;
