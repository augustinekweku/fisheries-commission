import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">Fisheries Commission</h3>
        <p>
          Follow us on our social media channels to stay updated with the latest
          news and activities of the Fisheries Commission
        </p>
        <div className="social-links d-flex justify-content-center">
          <a href="">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-skype"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
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
