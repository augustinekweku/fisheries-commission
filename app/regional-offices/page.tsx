"use client";

import { useTranslations } from "next-intl";

const RegionalOfficesPage = () => {
  const t = useTranslations("regionalOffices");
  const officesList = t.raw("officesList") as { name: string }[];

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="container mt-4">
          <div className="row gy-4">
            {officesList.map((office, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="office-card h-100 p-4 rounded shadow-sm border">
                  <div className="d-flex align-items-center">
                    <div className="icon-box me-3">
                      <i
                        className="bi bi-geo-alt-fill fs-3"
                        style={{ color: "#e64e4e" }}
                      ></i>
                    </div>
                    <div className="office-info">
                      <h5 className="mb-0">{office.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .office-card {
          background: #fff;
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0 !important;
        }

        .office-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
          border-color: #e64e4e !important;
        }

        .icon-box {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(230, 78, 78, 0.1);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .office-info h5 {
          font-size: 15px;
          font-weight: 400;
          color: #333;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .office-card {
            padding: 1rem !important;
          }

          .icon-box {
            width: 40px;
            height: 40px;
          }

          .icon-box i {
            font-size: 1.25rem !important;
          }

          .office-info h5 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegionalOfficesPage;
