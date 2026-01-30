"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutUs");

  return (
    <section id="about" className="about section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/assets/img/about-us-image.jpeg"
              className="img-fluid"
              alt={t("imageAlt")}
              style={{
                maxHeight: "320px",
                objectFit: "cover",
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </div>

          <div
            className="col-lg-8 mt-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>{t("paragraph1")}</p>

            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>{t("list.item1")}</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>{t("list.item2")}</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>{t("list.item3")}</span>
              </li>
            </ul>

            <p>{t("paragraph2")}</p>

            <Link href="/about-us" className="read-more">
              <span>{t("readMore")}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
