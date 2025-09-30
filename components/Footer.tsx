"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer id="footer" className="footer dark-background px-3">
      <div className="container">
        <div className="row d-flex text-start pt-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">{t("locate_us")}</h4>

            <h4 className="h6 fw-semibold">{t("mailing_address")}</h4>
            <p className="mb-0 pb-0">{t("mailing_address_text_1")}</p>
            <p className="mt-0 pt-1">{t("mailing_address_text_2")}</p>

            <h4 className="h6 fw-semibold">{t("physical_address")}</h4>
            <p>{t("physical_address_text")}</p>

            <h4 className="h6 fw-semibold">{t("email_address")}</h4>
            <p>{t("email_address_text")}</p>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">{t("quick_links")}</h4>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/laws-and-regulations"
                  className="btn btn-link p-0 text-white"
                >
                  {t("laws_and_regulations")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/press-and-release"
                  className="btn btn-link p-0 text-white"
                >
                  {t("press_and_releases")}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white">
                  {t("contact_us")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/reports-and-plans"
                  className="btn btn-link p-0 text-white"
                >
                  {t("reports_and_plans")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/collaborators"
                  className="btn btn-link p-0 text-white"
                >
                  {t("collaborators")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">{t("connect_with_us")}</h4>
            <p>{t("social_text")}</p>
            <div className="social-links d-flex">
              <a href="https://x.com/fisheriescommhq?s=21" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1BrvStesR1/?mibextid=wwXIfr"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/fisheries_commission?igsh=YmRtMDJpZ3BoZzht"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">{t("copyright")}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
