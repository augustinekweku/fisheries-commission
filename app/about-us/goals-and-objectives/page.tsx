"use client";

import { useTranslations } from "next-intl";

const GoalsAndObjectivesPage = () => {
  const t = useTranslations("goalsAndObjectives");
  const objectives = t.raw("objectives") as string[];

  return (
    <div className="container-fluid fisheries-page">
      {/* Main Content */}
      <div className="container my-5">
        {/* Objectives Section */}
        <div className="objectives-section">
          <div className="container section-title mb-3">
            <h2>{t("objectivesTitle")}</h2>
            <p>{t("objectivesSubtitle")}</p>
          </div>

          <div className="row g-4">
            {objectives.map((objective, index) => (
              <div key={index} className="col-lg-6">
                <div className="objective-card">
                  <div className="objective-number">{index + 1}</div>
                  <div className="objective-content">
                    <p className="objective-text">{objective}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goal, Mission & Vision Cards */}
        <div className="row g-4 mb-5 mt-2">
          <div className="col-lg-4">
            <div className="info-card vision-card h-100">
              <div className="card-icon-header">
                <div className="icon-circle">
                  <i className="bi bi-flag-fill fs-2"></i>
                </div>
                <h3 className="card-heading">{t("goalTitle")}</h3>
              </div>
              <p className="card-description">{t("goal")}</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-card mission-card h-100">
              <div className="card-icon-header">
                <div className="icon-circle">
                  <i className="bi bi-bullseye fs-2"></i>
                </div>
                <h3 className="card-heading">{t("missionTitle")}</h3>
              </div>
              <p className="card-description">{t("mission")}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-card vision-card h-100">
              <div className="card-icon-header">
                <div className="icon-circle">
                  <i className="bi bi-eye fs-2"></i>
                </div>
                <h3 className="card-heading">{t("visionTitle")}</h3>
              </div>
              <p className="card-description">{t("vision")}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Info Cards */
        .info-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .card-icon-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #c73e3e 0%, #e64e4e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .card-heading {
          color: #e64e4e;
          font-weight: 700;
          font-size: 1.5rem;
          margin: 0;
        }

        .card-description {
          color: #2c3e50;
          line-height: 1.8;
          margin: 0;
          font-size: 1.05rem;
        }

        /* Goal Section */
        .goal-section {
          background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 5px 20px rgba(230, 78, 78, 0.1);
        }

        .goal-icon-wrapper {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #e64e4e 0%, #ff6b6b 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 8px 25px rgba(230, 78, 78, 0.3);
        }

        .goal-icon-wrapper i {
          font-size: 3rem;
          color: white;
        }

        .goal-title {
          color: #e64e4e;
          font-weight: 700;
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .goal-text {
          color: #2c3e50;
          line-height: 1.8;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Objectives Section */
        .objectives-section {
          padding: 15px 0;
        }

        .section-header {
          position: relative;
        }

        .objective-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-left: 4px solid #e64e4e;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          height: 100%;
        }

        .objective-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #e64e4e 0%, #ff6b6b 100%);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .objective-content {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          flex: 1;
        }

        .objective-icon {
          color: #e64e4e;
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .objective-text {
          color: #2c3e50;
          line-height: 1.7;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .info-card,
          .goal-section {
            padding: 25px;
          }

          .card-icon-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .icon-circle {
            margin: 0 auto;
          }

          .objective-card {
            flex-direction: column;
            gap: 15px;
          }

          .objective-number {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default GoalsAndObjectivesPage;
