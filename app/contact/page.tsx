"use client";

import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section>
      <div id="contact" className="contact section container-fluid">
        {/* Section Title */}
        <div className="container section-title">
          <h2>{t("sectionTitle")}</h2>
          <p>{t("sectionSubtitle")}</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{t("mailingAddress.title")}</h3>
                  <p>{t("mailingAddress.text")}</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{t("physicalAddress.title")}</h3>
                  <p>{t("physicalAddress.text")}</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-pin-map flex-shrink-0"></i>
                <div>
                  <h3>{t("digitalAddress.title")}</h3>
                  <p>{t("digitalAddress.text")}</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>{t("phoneNumber.title")}</h3>
                  <p>{t("phoneNumber.text")}</p>
                </div>
              </div>

              <div className="info-item d-flex">
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

          {/* Google Maps */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div
                className="map-container"
                style={{ height: "400px", width: "100%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0755352406977!2d-0.20037242644208791!3d5.555821619304847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084a3542773%3A0xc5334860d71b38a5!2sFisheries%20Commission%2C%20HQ%2C%20Ridge!5e0!3m2!1sen!2sgh!4v1763256660928!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map - GA-079-5564"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
