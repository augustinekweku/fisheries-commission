"use client";

import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section>
      <div id="contact" className="contact section container-fluid">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t("sectionTitle")}</h2>
          <p>{t("sectionSubtitle")}</p>
        </div>

        <div className="container" data-aos="fade" data-aos-delay="100">
          <div className="row gy-4">
            {/* Contact Info */}
            <div className="col-lg-4">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{t("mailingAddress.title")}</h3>
                  <p>{t("mailingAddress.text")}</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{t("physicalAddress.title")}</h3>
                  <p>{t("physicalAddress.text")}</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>{t("emailAddress.title")}</h3>
                  <p>{t("emailAddress.text")}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={t("form.name")}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={t("form.email")}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder={t("form.subject")}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows={6}
                      placeholder={t("form.message")}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">{t("form.loading")}</div>
                    <div className="error-message">{t("form.error")}</div>
                    <div className="sent-message">{t("form.success")}</div>

                    <button type="submit">{t("form.button")}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
