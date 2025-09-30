"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");

  const carouselItems = [
    {
      id: 1,
      backgroundImage: "/assets/img/blog/hero-1.jpg",
      title: t("item1.title"),
      buttonText: t("item1.buttonText"),
      buttonLink: "/about-us",
    },
    {
      id: 2,
      backgroundImage: "/assets/img/blog/article-post-1.jpg",
      title: t("item2.title"),
      buttonText: t("item2.buttonText"),
      buttonLink: "/laws-and-regulations",
    },
    {
      id: 3,
      backgroundImage: "/assets/img/blog/navy-5.jpg",
      title: t("item3.title"),
      buttonText: t("item3.buttonText"),
      buttonLink: "/contact",
    },
    {
      id: 4,
      backgroundImage: "/assets/img/blog/navy-3.jpg",
      title: t("item4.title"),
      buttonText: t("item4.buttonText"),
      buttonLink: "/articles",
    },
  ];

  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        data-bs-interval="5000"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{
              backgroundImage: `url('${item.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          >
            <div
              className="carousel-container w-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                className="carousel-content d-flex flex-column justify-content-center align-items-center"
                style={{ maxWidth: "900px" }}
              >
                <h1 className="animate__animated animate__fadeInDown display-5 hero-title fw-semibold">
                  {item.title}
                </h1>
                <Link
                  href={item.buttonLink}
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;
