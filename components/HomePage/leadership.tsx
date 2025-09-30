"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Leadership = () => {
  const t = useTranslations("LeadershipSection");
  const members = t.raw("members"); // <- retrieves array from JSON

  return (
    <section id="team" className="team section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {members.map((member: any, index: number) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <Link href="/about-us/leadership">
                <div className="team-member w-100">
                  <div className="member-img position-relative">
                    <img
                      src={`/${member.image}`}
                      className="img-fluid"
                      alt={member.name}
                    />
                  </div>
                  <div className="member-info text-center mt-3">
                    <h4 className="text-uppercase">{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/about-us/leadership"
          data-aos="fade-up"
          className="read-more px-3 px-md-4 mt-4 d-flex align-items-center justify-content-center"
          style={{ width: "fit-content" }}
        >
          <span>{t("cta")}</span>
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default Leadership;
