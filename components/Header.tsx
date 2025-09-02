"use client";

import { useScrollBehavior } from "@/hooks/useScrollBehaviour";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isScrolled = useScrollBehavior();

  const isActive = (path: string) => pathname === path;

  const isParentActive = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path));

  return (
    <header
      id="header"
      className={`header d-flex align-items-center header-background dark-background ${
        isScrolled ? "fixed-top shadow-sm scrolled" : "sticky-top"
      }`}
      style={{
        zIndex: 1030,
        transition: "all 0.3s ease",
      }}
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

        {/* Navigation */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>

            {/* Mobile Only Links */}
            <div className="d-block d-lg-none">
              <li>
                <Link href="">What We Do</Link>
              </li>
              <li>
                <Link href="/fiti-standard" target="_blank">
                  FiTi
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.macppa.com/en"
                  target="_blank"
                  className="text-body py-2 px-3 border-end"
                >
                  MACPPA
                </Link>
              </li>
              <li>
                <Link href="">Blue Economy</Link>
              </li>
            </div>

            {/* About Us Dropdown */}
            <li
              className={`dropdown ${
                isParentActive([
                  "/about-us",
                  "/about-us/board-members",
                  "/about-us/leadership",
                  "/about-us/divisions-and-units",
                ])
                  ? "active"
                  : ""
              }`}
            >
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

            {/* Collaborators Dropdown */}
            <li
              className={`dropdown ${
                isParentActive([
                  "/collaborators",
                  "/collaborators/formal-institutions",
                  "/collaborators/informal-institutions",
                  "/collaborators/development-partners",
                  "/collaborators/fisheries-association-civil-society-organization",
                ])
                  ? "active"
                  : ""
              }`}
            >
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

            {/* Resources Dropdown */}
            <li
              className={`dropdown ${
                isParentActive(["/laws-and-regulations", "/reports-and-plans"])
                  ? "active"
                  : ""
              }`}
            >
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

            {/* News & Events Dropdown */}
            <li
              className={`dropdown ${
                isParentActive(["/press-and-release", "/articles", "/gallery"])
                  ? "active"
                  : ""
              }`}
            >
              <Link href="#">
                <span>News and Events</span>{" "}
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

            {/* Projects Dropdown */}
            <li
              className={`dropdown ${
                isParentActive(["/projects/fish-for-development"])
                  ? "active"
                  : ""
              }`}
            >
              <Link href="#">
                <span>Projects</span>{" "}
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

            {/* Contact (Mobile only) */}
            <li>
              <Link
                className={`d-block d-lg-none ${
                  isActive("/contact") ? "active" : ""
                }`}
                href="/contact"
              >
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
