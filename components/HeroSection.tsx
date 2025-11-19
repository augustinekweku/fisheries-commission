"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { client } from "@/sanity/client";

const query = `
*[_type == "post" && homeSliderFeatured == true && publishStatus == "published"]
| order(position asc) {
  _id,
  title,
  slug,
  position,
  "images": [
    image.asset->url,
    image2.asset->url,
    image3.asset->url,
    image4.asset->url,
    image5.asset->url
  ]
}
`;

const HeroSection = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [carouselItems, setCarouselItems] = useState<any[]>([]);

  // translated static fallback slides
  const fallbackItems = [
    {
      id: "fallback-1",
      backgroundImage: "/assets/img/blog/hero-1.jpg",
      title: t("item1.title"),
      buttonText: t("item1.buttonText"),
      buttonLink: "/about-us",
    },
    {
      id: "fallback-2",
      backgroundImage: "/assets/img/blog/article-post-1.jpg",
      title: t("item2.title"),
      buttonText: t("item2.buttonText"),
      buttonLink: "/laws-and-regulations",
    },
  ];

  useEffect(() => {
    async function loadFeatured() {
      try {
        const posts = await client.fetch(query);

        const formattedPosts = (posts || []).map((post: any) => ({
          id: post._id,
          backgroundImage:
            post.images.find((img: string) => img) || "/assets/img/default.jpg",
          title: post.title?.[locale] || post.title?.en || "Untitled",
          buttonText: t("readMore"),
          buttonLink: `/articles/${post.slug?.current}`,
        }));

        // static slides show first, then sanity posts
        setCarouselItems([...fallbackItems, ...formattedPosts]);
      } catch (err) {
        console.error("Slider Error:", err);

        // fallback to static slides on error
        setCarouselItems(fallbackItems);
      }
    }

    loadFeatured();
  }, [locale]); // Refresh on language change

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
            }}
          >
            <div
              className="carousel-container w-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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
          <span className="carousel-control-prev-icon bi bi-chevron-left"></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bi bi-chevron-right"></span>
        </a>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" />
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;
