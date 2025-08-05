import Link from "next/link";
import React from "react";

const VideoPost = () => {
  const videoData = {
    title:
      "2025 Closed Season: Industrial trawlers banned from July to August 2025",
    description:
      "The Ministry of Fisheries and Aquaculture Development has announced the dates for the 2025 Closed Fishing Season, a key government initiative aimed at restoring Ghana's dwindling marine fish stock. In a press release dated June 23, 2025, the Ministry revealed that industrial trawlers will be banned from fishing between July 1 and August 31, 2025 while semi-industrial inshore vessels will observe a one-month closure from July 1 to July 31.",
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
              href="/fishing-season-closure-2025-ghana"
              className="read-more mt-3 mb-4"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          {/* Right Side: YouTube Video */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="video-container">
              <img
                src="assets/img/blog/2025-closed-season.jpg"
                alt=""
                className="img-fluid rounded shadow"
              />
              {/* <iframe
                width="100%"
                height="315"
                src={videoData.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPost;
