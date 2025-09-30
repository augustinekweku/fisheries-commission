"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import useSWR from "swr";
import { client, fetcher } from "@/sanity/client";
import { paginatedByCategoryquery } from "@/sanity/groq";
import Loader from "../Loader";
import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { getCookie } from "cookies-next";

const POSTS_PER_PAGE = 6;

export default function ArticleList() {
  const t = useTranslations("articles");
  const locale = useLocale(); // This should return "en" or "fr" based on your cookie

  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const category = "articles";

  function paramsForQuery() {
    return {
      pageIndex: (currentPage - 1) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE,
      category,
      publishStatus: "published",
    };
  }

  function getQueryToUse() {
    return paginatedByCategoryquery;
  }

  const fetchPosts = async () => {
    const query = getQueryToUse();
    const params = paramsForQuery();
    return await fetcher([query, params]);
  };

  const { data, isLoading, mutate } = useSWR<{
    posts: any[];
    totalCount: number;
  }>(["articles", currentPage, category, locale], fetchPosts, {
    revalidateOnFocus: false,
    fallbackData: { posts: [], totalCount: 0 },
  });

  const posts = data?.posts || [];
  const totalPages = Math.ceil((data?.totalCount || 0) / POSTS_PER_PAGE);

  useEffect(() => {
    console.log("Setting up real-time subscription for articles...");

    const subscription = client
      .listen('*[_type == "post" && publishStatus == "published"]')
      .subscribe((update) => {
        console.log(
          "Real-time update received:",
          update.transition,
          update.documentId
        );
        mutate();
      });

    return () => {
      console.log("Cleaning up real-time subscription");
      subscription.unsubscribe();
    };
  }, [mutate]);

  // Helper function to get localized content
  const getLocalizedField = (field: any) => {
    if (!field) return "";
    // If it's already a string (old format), return it
    if (typeof field === "string") return field;
    // If it's an object with language keys, return the correct one
    return field[locale] || field.en || "";
  };

  return (
    <section id="blog-posts" className="blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>

      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="row gy-4">
              {posts.map((post, index) => {
                const title = getLocalizedField(post.title);
                const body = Array.isArray(post.body)
                  ? post.body
                  : post.body?.[locale] || post.body?.en || [];

                return (
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
                            alt={title || "Article image"}
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
                          {title || t("untitled")}
                        </h2>

                        <p className="post-excerpt">
                          {body?.[0]?.children?.[0]?.text?.slice(0, 120) || ""}
                          {body?.[0]?.children?.[0]?.text && "..."}
                        </p>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <small className="post-date text-muted d-flex align-items-center">
                            <i className="bi bi-calendar3 me-1"></i>
                            <time>
                              {new Date(post.publishedAt).toLocaleDateString(
                                locale,
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </time>
                          </small>
                          <span className="btn btn-outline-danger btn-sm rounded-pill px-3">
                            {t("readMore")}{" "}
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/articles"
            />
          </>
        )}
      </div>
    </section>
  );
}
