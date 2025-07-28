import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="header d-flex align-items-center sticky-top header-background dark-background"
    >
      <div className="container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img
            src="/assets/img/logo-white.png"
            alt="Fisheries Commission Logo"
            className="logo-image img-fluid"
          />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <div className="d-block d-lg-none">
              <li>
                <Link href="">What We Do</Link>
              </li>

              <li>
                <Link href="/fiti-standard">FiTi</Link>
              </li>
            </div>
            <li className="dropdown">
              <Link href="/about-us">
                <span>About Us</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="#">Goals and Objectives</Link>
                </li>
                <li>
                  <Link href="/about-us/board-members">Board Members</Link>
                </li>
                <li>
                  <Link href="/about-us/leadership">Leadership</Link>
                </li>
                <li>
                  <Link href="/about-us/divisions-and-units">
                    Divisions and Units
                  </Link>
                </li>
                <li>
                  <Link href="#">Regional Offices</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/collaborators">
                <span>Collaborators</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="/collaborators/formal-institutions">
                    Formal Institutions
                  </Link>
                </li>
                <li>
                  <Link href="/collaborators/informal-institutions">
                    Informal Institutions
                  </Link>
                </li>
                <li>
                  <Link href="/collaborators/development-partners">
                    Development Partners
                  </Link>
                </li>
                <li>
                  <Link href="/collaborators/fisheries-association-civil-society-organization">
                    Fisheries Associations & Civil Society Organizations
                  </Link>
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
                  <Link href="/laws-and-regulations">Laws and Regulations</Link>
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
              <Link className="d-block d-lg-none" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
