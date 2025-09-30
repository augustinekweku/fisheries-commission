"use client";

import { useTranslations } from "next-intl";

const DivisionsAndUnits = () => {
  const t = useTranslations("divisionsPage");

  const sections = [
    "mfmd",
    "ifmd",
    "fssd",
    "mcsd",
    "fa",
    "pbmed",
    "phmtd",
    "special",
  ];

  return (
    <div className="container-fluid">
      <section id="about" className="about section">
        <div className="container section-title pb-4 mb-1">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="container">
          <div className="col-lg-12">
            <p>{t("intro")}</p>

            {sections.map((key) => (
              <div key={key}>
                <h5
                  className={`fw-bold mt-4 ${
                    key === "special" ? "text-decoration-underline" : ""
                  }`}
                >
                  {t(`${key}.title`)}
                </h5>
                <ul>
                  {t.raw(`${key}.items`).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivisionsAndUnits;
