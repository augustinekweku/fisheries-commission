"use client";

import { useScrollBehavior } from "@/hooks/useScrollBehaviour";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const TopBar = () => {
  const isScrolled = useScrollBehavior();
  const t = useTranslations("topbar");

  return (
    <div
      className={`container-fluid bg-light pe-0 ps-0 ms-0 d-none d-lg-block py-1 transition-opacity ${
        isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1020,
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
    >
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-2 text-center text-lg-start mb-2 mb-lg-0">
            <div className="position-relative d-inline-flex align-items-center ps-3">
              <div className="social-top-links d-flex py-2">
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
          <div className="col-md-10 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <Link href="" className="text-body py-2 pe-3 border-end">
                <small>{t("whatWeDo")}</small>
              </Link>
              {/* <Link
                href="/fiti-standard"
                className="text-body py-2 px-3 border-end"
              >
                <small>{t("fiti")}</small>
              </Link> */}
              <Link
                href="https://www.macppa.com/en"
                target="_blank"
                className="text-body py-2 px-3 border-end"
              >
                <small>{t("macppa")}</small>
              </Link>
              <Link href="#" className="text-body py-2 px-3 border-end">
                <small>{t("blueEconomy")}</small>
              </Link>
              <Link
                href="https://fishcom.gov.gh/recruitment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body py-2 px-3 border-end"
              >
                <small>{t("recruitment")}</small>
              </Link>
              <Link href="/contact" className="text-body py-2 px-3 border-end">
                <small>{t("contact")}</small>
              </Link>
              <Link
                href="https://www.ghana.gov.gh/mdas/c8d398322e/ "
                target="_blank"
                className="text-body py-2 px-3 border-end me-3"
              >
                <small>{t("started")}</small>
              </Link>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
