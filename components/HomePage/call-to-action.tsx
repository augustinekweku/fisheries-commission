"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>{t("heading")}</h3>
            <p className="text-capitalize">{t("text")}</p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" href="/about-us">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
