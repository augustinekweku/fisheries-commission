import Link from "next/link";
import { pressReleases } from "@/data/posts";

const Gallery = () => {
  return (
    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Our Recent Media Highlights</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pressReleases.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <article className="h-100 rounded shadow-sm">
                <div className="post-img">
                  <img
                    src={`/${post.image}`}
                    alt={post.title}
                    className="img-fluid rounded"
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
