import Link from "next/link";

const TopBar = () => {
  return (
    <div className="container-fluid bg-light pe-0 ps-0 ms-0 d-none d-lg-block sticky-top py-1">
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="position-relative d-inline-flex align-items-center px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0">
                  <i className="fa fa-envelope-open me-2"></i>
                  info@fishcom.gov.gh
                </p>
              </div>
              <div className="social-top-links d-flex">
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
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <Link href="" className="text-body py-2 pe-3 border-end">
                <small>What We Do</small>
              </Link>
              <Link href="" className="text-body py-2 px-3 border-end">
                <small>Collaborators</small>
              </Link>
              <Link
                href="fiti-standard"
                className="text-body py-2 px-3 border-end"
              >
                <small>FiTi</small>
              </Link>
              <Link
                href="https://fishcom.gov.gh/recruitment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body py-2 px-3 border-end"
              >
                <small>Recruitment Portal</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
