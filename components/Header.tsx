"use client";

import { useScrollBehavior } from "@/hooks/useScrollBehaviour";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SearchModal from "./Search/SearchModal";

const Header = () => {
  const pathname = usePathname();
  const isScrolled = useScrollBehavior();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const t = useTranslations("header");

  const isActive = (path: string) => pathname === path;
  const isParentActive = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path));

  return (
    <>
      <header
        id="header"
        className={`header d-flex align-items-center header-background dark-background ${
          isScrolled ? "fixed-top shadow-sm scrolled" : "sticky-top"
        }`}
        style={{ zIndex: 1030, transition: "all 0.3s ease" }}
      >
        <div className="container-xl position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href="/" className="logo d-flex align-items-center">
            <img
              src="/assets/img/logo-white.png"
              alt="Fisheries Commission Logo"
              className="logo-image img-fluid"
            />
          </Link>

          <div className="d-flex align-items-center">
            {/* Navigation */}
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link href="/" className={isActive("/") ? "active" : ""}>
                    {t("home")}
                  </Link>
                </li>

                {/* Mobile Only Links */}
                <div className="d-block d-lg-none">
                  <li>
                    <Link href="">{t("whatWeDo")}</Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.ghana.gov.gh/mdas/c8d398322e"
                      target="_blank"
                    >
                      {t("started")}
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.macppa.com/en" target="_blank">
                      {t("macppa")}
                    </Link>
                  </li>
                  <li>
                    <Link href="">{t("blueEconomy")}</Link>
                  </li>
                </div>

                {/* About Us Dropdown */}
                <li
                  className={`dropdown ${isParentActive(["/about-us"]) ? "active" : ""}`}
                >
                  <Link href="/about-us">
                    <span>{t("aboutUs")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/about-us/goals-and-objectives">
                        {t("goalsObjectives")}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">{t("boardMembers")}</Link>
                    </li>
                    <li>
                      <Link href="/about-us/leadership">{t("leadership")}</Link>
                    </li>
                    <li>
                      <Link href="/about-us/divisions-and-units">
                        {t("divisionsUnits")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/regional-offices">
                        {t("regionalOffices")}
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Collaborators Dropdown */}
                <li
                  className={`dropdown ${isParentActive(["/collaborators"]) ? "active" : ""}`}
                >
                  <Link href="/collaborators">
                    <span>{t("collaborators")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/collaborators/formal-institutions">
                        {t("formalInstitutions")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/collaborators/informal-institutions">
                        {t("informalInstitutions")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/collaborators/development-partners">
                        {t("developmentPartners")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/collaborators/fisheries-association-civil-society-organization">
                        {t("fisheriesAssociations")}
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Resources Dropdown */}
                <li
                  className={`dropdown ${
                    isParentActive([
                      "/laws-and-regulations",
                      "/reports-and-plans",
                      "/research",
                      "/policy",
                    ])
                      ? "active"
                      : ""
                  }`}
                >
                  <Link href="#">
                    <span>{t("resources")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/laws-and-regulations">
                        {t("lawsRegulations")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/reports-and-plans">{t("reportsPlans")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("research")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("policy")}</Link>
                    </li>
                  </ul>
                </li>

                {/* News & Events Dropdown */}
                <li
                  className={`dropdown ${isParentActive(["/press-and-release", "/articles", "/gallery"]) ? "active" : ""}`}
                >
                  <Link href="#">
                    <span>{t("newsEvents")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/press-and-release">{t("pressRelease")}</Link>
                    </li>
                    <li>
                      <Link href="/articles">{t("articles")}</Link>
                    </li>
                    <li>
                      <Link href="/gallery">{t("gallery")}</Link>
                    </li>
                  </ul>
                </li>

                {/* Projects Dropdown */}
                <li
                  className={`dropdown ${isParentActive(["/projects/fish-for-development"]) ? "active" : ""}`}
                >
                  <Link href="#">
                    <span>{t("projects")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">{t("ffd")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("sfmp")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("warfp")}</Link>
                    </li>
                  </ul>
                </li>

                {/* Permits & Licences Dropdown */}
                <li
                  className={`dropdown ${isParentActive(["/permits-and-licenses"]) ? "active" : ""}`}
                >
                  <Link href="#">
                    <span>{t("permitsLicences")}</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li className="dropdown">
                      <Link href="#">
                        <span>{t("fishing")}</span>{" "}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href="/permits-and-licenses/fishing/industrial">
                            {t("industrial")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/permits-and-licenses/fishing/semi-industrial">
                            {t("semiIndustrial")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/permits-and-licenses/fishing/artisanal">
                            {t("artisanal")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/permits-and-licenses/fishing/authorization">
                            {t("authorization")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/permits-and-licenses/fishing/recreational-fishing">
                            {t("recreationalFishing")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/permits-and-licenses/import-and-export">
                        {t("importExport")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/permits-and-licenses/aquaculture">
                        {t("aquaculture")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/permits-and-licenses/cold-storage-facility">
                        {t("coldStorageFacility")}
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Contact (Mobile Only) */}
                <li>
                  <Link
                    href="/contact"
                    className={`d-block d-lg-none ${isActive("/contact") ? "active" : ""}`}
                  >
                    {t("contactUs")}
                  </Link>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="search-btn btn p-0 border-0 bg-transparent me-1"
              aria-label="Open search"
              style={{
                color: "white",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal Component */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;
