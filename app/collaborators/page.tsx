"use client";

import { useTranslations } from "next-intl";

const CollaboratorsPage = () => {
  const t = useTranslations("collaborators");

  const formalList = t.raw("formalList") as {
    name: string;
    note?: string;
  }[];
  const informalList = t.raw("informalList") as string[];
  const developmentList = t.raw("developmentList") as string[];
  const associationsList = t.raw("associationsList") as string[];

  return (
    <div className="container-fluid mb-0 pb-0">
      {/* Title */}
      <section className="about section mb-0 pb-0">
        <div className="container section-title pb-3">
          <h2>{t("title")}</h2>
          <p>{t("formalTitle")}</p>
        </div>

        {/* Formal Institutions */}
        <div className="container">
          <ul>
            {formalList.map((item, index) => (
              <li key={index} className="mb-md-0 mb-2">
                <div className="d-flex align-items-start align-items-md-center">
                  <i className="bi bi-check2-circle me-2"></i>
                  {item.note ? (
                    <div className="d-flex flex-column flex-md-row">
                      <div>{item.name}</div>
                      <div className="ms-0 ms-md-4 text-muted mt-1 mt-md-0">
                        {item.note}
                      </div>
                    </div>
                  ) : (
                    <div>{item.name}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Informal Institutions */}
      <section className="about section pt-4 mb-0 pb-0">
        <div className="container section-title pb-3">
          <p>{t("informalTitle")}</p>
        </div>
        <div className="container">
          <ul>
            {informalList.map((name, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle me-1"></i>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Development Partners */}
      <section className="about section mt-0 pt-4 mb-0 pb-0">
        <div className="container section-title pb-3">
          <p>{t("developmentTitle")}</p>
        </div>
        <div className="container mb-0 pb-0">
          <ul>
            {developmentList.map((name, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle me-1"></i>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Associations & Civil Society */}
      <section className="about section mt-0 pt-4">
        <div className="container section-title pb-3 mt-0 pt-0">
          <p>{t("associationsTitle")}</p>
        </div>
        <div className="container">
          <ul>
            {associationsList.map((name, index) => (
              <li key={index}>
                <i className="bi bi-check2-circle me-1"></i>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CollaboratorsPage;
