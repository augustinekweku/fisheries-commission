"use client";

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const VideoPost = () => {
  const t = useTranslations("VideoPost");

  const videoData = {
    title: t("title"),
    description: t("description"),
    videoUrl: "https://youtube.com/embed/O5WYEAJgig0",
  };

  return (
    <section id="video-post" className="video-post section px-2">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Title and Description */}
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-bold mb-4">{videoData.title}</h2>
            <p>{videoData.description}</p>
            <Link
              href="/press-and-release/2025-closed-season-industrial-trawlers-banned-from-july-to-august-2025"
              className="read-more mt-3 mb-4"
            >
              <span>{t("readMore")}</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          {/* Right Side: YouTube Video */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={videoData.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPost;
