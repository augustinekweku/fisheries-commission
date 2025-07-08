import React from "react";

const HeroSection = () => {
  const carouselItems = [
    {
      id: 1,
      backgroundImage: "/assets/img/hero/hero-1.jpg",
      title: "Welcome to the Fisheries Commission Official Website",
      buttonText: "Read More",
      buttonLink: "#about",
    },
    {
      id: 2,
      backgroundImage: "/assets/img/hero/hero-2.jpg",
      title: "Explore Our Services and Resources",
      buttonText: "Learn More",
      buttonLink: "#services",
    },
    {
      id: 3,
      backgroundImage: "/assets/img/hero/hero-3.jpeg",
      title: "Join Us in Sustainable Fisheries Management",
      buttonText: "Get Started",
      buttonLink: "#contact",
    },
    {
      id: 4,
      backgroundImage: "/assets/img/hero/hero-4.jpeg",
      title: "Join Us in Sustainable Fisheries Management",
      buttonText: "Get Started",
      buttonLink: "#contact",
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
              <div className="w-75">
                <h3 className="animate__animated animate__fadeInDown">
                  {item.title}
                </h3>
                <a
                  href={item.buttonLink}
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  {item.buttonText}
                </a>
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
        viewBox="0 24 150 28 "
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
