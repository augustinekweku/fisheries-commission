"use client";

import { useTranslations } from "next-intl";

const FormalInstitutions = () => {
  const t = useTranslations("collaborators");
  const formalList = t.raw("formalList") as { name: string; note?: string }[];

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <h2>{t("title")}</h2>
          <p>{t("formalTitle")}</p>
        </div>

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
    </div>
  );
};

export default FormalInstitutions;
