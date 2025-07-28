import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background px-3">
      <div className="container">
        <div className="row d-flex text-start pt-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">Locate us</h4>
            <h4 className="h6 fw-semibold">Mailing Address</h4>
            <p>
              Fisheries Commission, HQ, Ridge, P.O. Box GP 630 Ministries, Accra
            </p>
            <h4 className="h6 fw-semibold">Physical Address</h4>
            <p>Adjacent the Ridge Church School</p>

            <h4 className="h6 fw-semibold">Email Address</h4>
            <p>info@fishcom.gov.gh</p>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">Quick links</h4>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/laws-and-regulations"
                  className="btn btn-link p-0 text-white"
                >
                  Laws and Regulations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/press-and-release"
                  className="btn btn-link p-0 text-white"
                >
                  Press and Releases
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/reports-and-plans"
                  className="btn btn-link p-0 text-white"
                >
                  Reports and Plans
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/collaborators"
                  className="btn btn-link p-0 text-white"
                >
                  Collaborators
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="fw-semibold mb-4">Connect with us</h4>

            <p>
              Follow us on our social media channels to stay updated with the
              latest news and activities of the Fisheries Commission
            </p>
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
          <div className="copyright"></div>
          <div className="credits">
            © 2025 Fisheries Commission. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
