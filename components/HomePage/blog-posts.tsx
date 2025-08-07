import { articles } from "@/data/articles";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <section id="blog-posts" className="blog-posts section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>News</h2>
        <p>
          Our Recent News and Articles
          <br />
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {[...articles]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, 9)
            .map((post, index) => (
              <div
                key={post.id}
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <Link
                  href={`/articles/${post.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <article>
                    <div className="post-img">
                      <img
                        src={`/${post.image}`}
                        alt={post.title}
                        className="img-fluid rounded"
                      />
                    </div>

                    <h2 className="title">{post.title}</h2>

                    <p className="post-excerpt">{post.excerpt}</p>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="post-date text-muted d-flex align-items-center">
                        <i className="bi bi-calendar3 me-1"></i>
                        <time>{post.date}</time>
                      </small>

                      <span className="btn btn-outline-danger rounded-pill btn-sm px-3">
                        Read More <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
