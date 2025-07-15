"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { pressReleases } from "@/data/posts";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 6;

export default function PressAndReleaseList() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const totalPosts = pressReleases.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const paginatedPosts = pressReleases.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>News</h2>
        <p>Our Recent Press And Releases</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {paginatedPosts.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <Link
                href={`/press-and-release/${post.slug}`}
                className="text-decoration-none text-dark"
              >
                <article className="h-100 p-2 border rounded shadow-sm transition hover-shadow-sm">
                  <div className="post-img">
                    <img
                      src={`/${post.image}`}
                      alt={post.title}
                      className="img-fluid rounded"
                    />
                  </div>

                  <h2 className="title text-uppercase">{post.title}</h2>

                  <p className="post-excerpt">{post.excerpt}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="post-date text-muted">
                      <time>{post.date}</time>
                    </small>

                    <span className="btn btn-outline-danger btn-sm rounded-pill px-3">
                      Read More <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/press-and-release"
        />
      </div>
    </section>
  );
}
