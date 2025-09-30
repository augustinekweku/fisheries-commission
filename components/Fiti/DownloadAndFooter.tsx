"use client";

import { useTranslations } from "next-intl";

const DownloadAndFooter = () => {
  const t = useTranslations("downloadAndFooter");

  const downloadLinks = [
    {
      id: 1,
      title: t("links.english"),
      url: "assets/img/fiti/FiTI_Standard_2017_EN_1.1.pdf",
    },
    {
      id: 2,
      title: t("links.french"),
      url: "assets/img/fiti/FiTI_Standard_2017_FR_1.1.pdf",
    },
    {
      id: 3,
      title: t("links.spanish"),
      url: "assets/img/fiti/FiTI_Standard_2017_ES_1.1.pdf",
    },
    {
      id: 4,
      title: t("links.portuguese"),
      url: "assets/img/fiti/FiTI_Standard_2017_PO_1.1.pdf",
    },
  ];

  return (
    <div className="px-2 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="text-center mb-4">
            <h3 className="fw-bold mb-4">{t("title")}</h3>
          </div>

          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="d-grid gap-3">
              {downloadLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  download
                  className="btn btn-accent text-white bg-accent text-decoration-none px-2 px-lg-4 py-2 py-lg-3"
                  style={{
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(30, 136, 229, 0.3)",
                    width: "100%",
                  }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndFooter;
