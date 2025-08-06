"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import { articles } from "@/data/articles";
import useSWR from "swr";
import { fetcher } from "@/sanity/client";
import {
  allPostsPaginatedQuery,
  paginatedByCategoryquery,
} from "@/sanity/groq";
import { useEffect } from "react";

const POSTS_PER_PAGE = 6;

interface ArticleListProps {
  defaultCategory?: string;
}

export default function ArticleList({ defaultCategory }: ArticleListProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPosts = sortedArticles.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const paginatedPosts = sortedArticles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const page = searchParams.get("page");
  const category = searchParams.get("category") ?? defaultCategory ?? "all";

  const pageIndex = parseInt(page as string) || 1;
  const pageSize = parseInt(searchParams.get("pageSize") as string) || 12;

  const {
    data: postsData,
    error,
    isValidating,
    mutate,
  } = useSWR<{ posts: any[] }>(
    "batchedRequests",
    async () => {
      const posts = await fetchPosts();
      return { posts };
    },
    {
      revalidateOnFocus: false,
      fallbackData: {
        posts: [],
      },
    }
  );

  function getQueryToUse() {
    if (category !== "all") {
      return paginatedByCategoryquery;
    } else {
      return allPostsPaginatedQuery;
    }
  }

  function paramsForQuery() {
    return {
      pageIndex: (pageIndex - 1) * pageSize,
      limit: pageIndex * pageSize,
      category,
      publishStatus: "published",
    };
  }

  useEffect(() => {
    mutate();
    console.log("Fetching posts with params:", postsData);
  }, [page, category, postsData?.posts.length]);

  const fetchPosts = () => fetcher([getQueryToUse(), paramsForQuery()]);

  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>News</h2>
        <p>Our Recent Articles</p>
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
          basePath="/articles"
        />
      </div>
    </section>
  );
}
