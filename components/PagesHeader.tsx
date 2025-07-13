import Link from "next/link";
import React from "react";

const PagesHeader = () => {
  return (
    <header className="fixed-top header-background dark-background">
      <div
        id="header"
        className="header d-flex align-items-center header-background"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex  align-items-center w-75">
            <img
              src="/assets/img/logo-white.png"
              alt="Selecao Logo"
              className="logo-image"
            />
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="dropdown d-none">
                <Link href="#">
                  <span>About Us</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="#">Goals and Objectives</Link>
                  </li>
                  <li>
                    <Link href="#">Board Members</Link>
                  </li>
                  <li>
                    <Link href="#">Executive Director</Link>
                  </li>
                  <li>
                    <Link href="#">Divisions and Units</Link>
                  </li>
                  <li>
                    <Link href="#">Regional Offices</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown d-none">
                <Link href="#">
                  <span>Collaborators</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="#">Formal Institutions</Link>
                  </li>
                  <li>
                    <Link href="#">Informal Institutions</Link>
                  </li>
                  <li>
                    <Link href="#">Development Partners</Link>
                  </li>
                  <li>
                    <Link href="#">Fisheries Associations</Link>
                  </li>
                  <li>
                    <Link href="#">Civil Society Organizations</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">
                  <span>Resources</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/laws-and-regulations">
                      Laws and Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports-and-plans">Reports and Plans</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">
                  <span>News and Events </span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/press-and-release">Press and Release</Link>
                  </li>
                  <li>
                    <Link href="/articles">Articles</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">
                  <span>Projects </span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/projects/fish-for-development">
                      Fish For Development (FFD)
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Sustainable Fisheries Management Programme (SFMP)
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      West African Regional Fisheries Programme (WARFP)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  rel="noopener"
                  href="https://fishcom.gov.gh/recruitment/"
                  target="_blank"
                >
                  Recruitment Portal
                </a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
