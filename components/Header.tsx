import React from "react";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex  align-items-center w-75">
          <img
            src="/assets/img/logo-white.png"
            alt="Selecao Logo"
            className="logo-image"
          />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li className="dropdown d-none">
              <a href="#">
                <span>About Us</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Goals and Objectives</a>
                </li>
                <li>
                  <a href="#">Board Members</a>
                </li>
                <li>
                  <a href="#">Executive Director</a>
                </li>
                <li>
                  <a href="#">Divisions and Units</a>
                </li>
                <li>
                  <a href="#">Regional Offices</a>
                </li>
              </ul>
            </li>
            <li className="dropdown d-none">
              <a href="#">
                <span>Collaborators</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Formal Institutions</a>
                </li>
                <li>
                  <a href="#">Informal Institutions</a>
                </li>
                <li>
                  <a href="#">Development Partners</a>
                </li>
                <li>
                  <a href="#">Fisheries Associations</a>
                </li>
                <li>
                  <a href="#">Civil Society Organizations</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Resources</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Laws and Regulations</a>
                </li>
                <li>
                  <a href="#">Reports and Plans</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>News and Events </span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Press and Release </a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Projects </span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Fish For Development (FFD) </a>
                </li>
                <li>
                  <a href="#">
                    Sustainable Fisheries Managemenent Programme (SFMP)
                  </a>
                </li>
                <li>
                  <a href="#">
                    West African Regional Fisheries Programme (WARFP)
                  </a>
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
              <a href="#portfolio">Contact Us</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
