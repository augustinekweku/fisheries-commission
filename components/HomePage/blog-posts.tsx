"use client";

import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/sanity/client";
import { paginatedByCategoryquery } from "@/sanity/groq";
import Loader from "../Loader";
import { useTranslations, useLocale } from "next-intl";

const POSTS_PER_PAGE = 9;

type BlogPost = {
  _id: string;
  slug: { current: string };
  imageUrl: string;
  title: { en: string; fr: string };
  body: Array<{ children: Array<{ text: string }> }> | { en: any; fr: any };
  publishedAt: string;
};

export default function BlogPosts() {
  const t = useTranslations("BlogPosts");
  const locale = useLocale() as "en" | "fr"; // "en" or "fr"

  const params = {
    pageIndex: 0,
    limit: POSTS_PER_PAGE,
    category: "articles",
    publishStatus: "published",
  };

  const { data, isLoading, error } = useSWR(
    ["articles", 1, "articles", locale],
    async () => await fetcher([paginatedByCategoryquery, params]),
    { revalidateOnFocus: false }
  );

  if (isLoading) return <Loader />;
  if (error) return <p>{t("errorLoadingArticles")}</p>;

  const posts: BlogPost[] = data?.posts || [];

  // Helper to get localized content
  const getLocalizedField = (field: any) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[locale] || field.en || "";
  };

  return (
    <section id="blog-posts" className="blog-posts section px-2">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("heading")}</h2>
        <p>{t("subheading")}</p>
      </div>

      <div className="container">
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
                        {t("readMore")} <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
