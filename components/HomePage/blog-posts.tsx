"use client";

import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/sanity/client";
import { paginatedByCategoryquery } from "@/sanity/groq";
import Loader from "../Loader";

const POSTS_PER_PAGE = 9;

type BlogPost = {
  _id: string;
  slug: { current: string };
  imageUrl: string;
  title: string;
  body: Array<{ children: Array<{ text: string }> }>;
  publishedAt: string;
};

export default function BlogPosts() {
  const params = {
    pageIndex: 0,
    limit: POSTS_PER_PAGE,
    category: "articles",
    publishStatus: "published",
  };

  const { data, isLoading, error } = useSWR(
    ["articles", 1, "articles"],
    async () => {
      return await fetcher([paginatedByCategoryquery, params]);
    },
    { revalidateOnFocus: false }
  );

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading articles.</p>;

  const posts: BlogPost[] = data?.posts || [];

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
          {posts.map((post, index) => (
            <div
              key={post._id}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <Link
                href={`/articles/${post.slug.current}`}
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
}
