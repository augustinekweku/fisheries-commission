"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type SidebarPost = {
  _id: string;
  title: { en: string; fr: string };
  slug: { current: string };
  imageUrl?: string;
  publishedAt: string;
};

// Helper to get localized field
function getLocalizedField(
  field: { en: string; fr: string },
  locale: "en" | "fr"
) {
  return field[locale] || field.en || "";
}

export default function NewsSidebar() {
  const [recentPosts, setRecentPosts] = useState<SidebarPost[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations();

  useEffect(() => {
    async function fetchRecentArticles() {
      try {
        const query = `
          *[_type == "post" 
            && category == "articles" 
            && defined(publishedAt) 
            && !(_id in path("drafts.**"))
          ] 
          | order(publishedAt desc)[0...6]{
            _id,
            title,
            slug,
            publishedAt,
            "imageUrl": image.asset->url
          }
        `;
        const posts = await client.fetch(query);
        setRecentPosts(posts);
      } catch (error) {
        console.error("Error fetching recent articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecentArticles();
  }, []);

  if (loading) {
    return (
      <div className="col-lg-4 mt-5 mt-lg-0">
        <h5 className="mb-4 border-bottom pb-2 accent-color fw-bold">
          {t("recentNews")}
        </h5>
        <p className="text-muted">{t("loading")}</p>
      </div>
    );
  }

  return (
    <div className="col-lg-4 mt-5 mt-lg-0">
      <h5 className="mb-4 border-bottom pb-2 accent-color fw-bold">
        {t("recentNews")}
      </h5>

      {recentPosts.map((post) => {
        const title = getLocalizedField(post.title, locale);

        return (
          <div className="d-flex mb-4" key={post._id}>
            <img
              src={post.imageUrl || "/placeholder.jpg"}
              alt={title}
              className="rounded flex-shrink-0"
              style={{
                width: "80px",
                height: "60px",
                objectFit: "cover",
                marginRight: "15px",
                display: "block",
              }}
            />
            <div className="d-flex flex-column justify-content-between">
              <Link
                href={`/articles/${post.slug.current}`}
                className="fw-semibold d-block text-dark text-decoration-none border-bottom pb-1 mb-1"
              >
                {title.length > 60 ? title.slice(0, 57) + "..." : title}
              </Link>
              <small className="text-muted">
                {new Date(post.publishedAt).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
