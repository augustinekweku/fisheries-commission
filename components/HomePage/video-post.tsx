import React from "react";

const VideoPost = () => {
  const videoData = {
    title: "Marine Fishing: Closed season starts in July to August, 2022",
    description:
      "The Ministry of Fisheries and Aquaculture Development in collaboration with the Fisheries Commission has announced that it will observe the 2022 closed season from July to August, this year.The term “closed season” also known as “biological rest period”, refers to the stopping of fishing activities during the spawning period of the stocks.",
    videoUrl: "https://youtube.com/embed/O5WYEAJgig0", // Replace with your YouTube video URL
  };

  return (
    <section id="video-post" className="video-post section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Title and Description */}
          <div className="col-lg-6" data-aos="fade-right">
            <h2>{videoData.title}</h2>
            <p>{videoData.description}</p>
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
