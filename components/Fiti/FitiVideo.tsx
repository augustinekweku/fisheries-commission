import React from "react";

const FitiVideo = () => {
  return (
    <section id="video-post" className="video-post section">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="video-container">
              <iframe
                className="w-100 video-responsive"
                src="https://www.youtube.com/embed/arvdShhQTJU?si=_2474T30kFG9Hal6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitiVideo;
