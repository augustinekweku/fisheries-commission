"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import useSWR from "swr";
import { fetcher } from "@/sanity/client";
import { paginatedByCategoryquery } from "@/sanity/groq";
import Loader from "../Loader";

const POSTS_PER_PAGE = 6;

export default function PressAndReleaseList() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const category = "press-and-releases";

  function paramsForQuery() {
    return {
      pageIndex: (currentPage - 1) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE,
      category,
      publishStatus: "published",
    };
  }

  const fetchPosts = async () => {
    const params = paramsForQuery();
    return await fetcher([paginatedByCategoryquery, params]);
  };

  const { data, isLoading } = useSWR<{ posts: any[]; totalCount: number }>(
    ["press-and-release", currentPage, category],
    fetchPosts,
    {
      revalidateOnFocus: false,
      fallbackData: { posts: [], totalCount: 0 },
    }
  );

  const posts = data?.posts || [];
  const totalPages = Math.ceil((data?.totalCount || 0) / POSTS_PER_PAGE);

  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>News</h2>
        <p>Our Recent Press And Releases</p>
      </div>

      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="row gy-4">
              {posts.map((post, index) => (
                <div
                  key={post._id}
                  className="col-xl-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <Link
                    href={`/press-and-release/${post.slug.current}`}
                    className="text-decoration-none text-dark"
                  >
                    <article>
                      <div className="post-img">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="img-fluid rounded"
                        />
                      </div>

                      <h2
                        className="title"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {post.title}
                      </h2>

                      <p className="post-excerpt">
                        {post.body[0]?.children[0]?.text.slice(0, 120)}...
                      </p>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="post-date text-muted d-flex align-items-center">
                          <i className="bi bi-calendar3 me-1"></i>
                          <time>
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </time>
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
          </>
        )}
      </div>
    </section>
  );
}
