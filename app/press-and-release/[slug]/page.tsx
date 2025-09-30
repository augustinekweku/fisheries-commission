import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import PressAndReleaseSidebar from "@/components/NewsAndEvents/PressAndReleaseSidebar";
import { client } from "@/sanity/client";
import { cookies } from "next/headers";

type Post = {
  _id: string;
  title: { en: string; fr: string };
  body: { en: any[]; fr: any[] };
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
  publishedAt?: string;
  slug?: { current: string };
};

async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      "imageUrl": image.asset->url,
      "imageUrl2": image2.asset->url,
      "imageUrl3": image3.asset->url,
      "imageUrl4": image4.asset->url,
      slug,
      title,
      category,
      _id,
      body,
      publishedAt
    }
  `;
  return await client.fetch(query, { slug });
}

// Get locale from cookie
async function getLocale(): Promise<"en" | "fr"> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value as "en" | "fr" | undefined;
  return locale || "en";
}

// Get localized field
function getLocalizedField(field: any, locale: "en" | "fr"): any {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[locale] || field.en || "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const locale = await getLocale();

  if (!post) {
    return { title: "Press and Release Not Found" };
  }

  const title = getLocalizedField(post.title, locale);
  const body = getLocalizedField(post.body, locale);

  const excerpt = Array.isArray(body)
    ? body
        ?.map((block: any) =>
          (block.children || []).map((c: any) => c.text).join("")
        )
        .join(" ")
        .slice(0, 160)
    : "";

  return {
    title: title || "Press and Release",
    description: excerpt || "",
  };
}

export default async function PressAndReleaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const locale = await getLocale();

  if (!post) return notFound();

  const title = getLocalizedField(post.title, locale);
  const body = getLocalizedField(post.body, locale);
  const bodyArray = Array.isArray(body) ? body : [];

  const plainText =
    bodyArray
      ?.map((block: any) =>
        (block.children || []).map((c: any) => c.text).join("")
      )
      .join("\n") ?? "";
  const minutes = Math.max(1, Math.round(plainText.length / 1000));

  const gallery = [
    post.imageUrl,
    post.imageUrl2,
    post.imageUrl3,
    post.imageUrl4,
  ].filter(Boolean);

  return (
    <section className="container-fluid">
      <div className="container mt-1">
        <div className="row">
          {/* Main Post */}
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-uppercase">{title}</h2>

            <div className="d-flex justify-content-between align-items-center mt-5 border-bottom pb-2 mb-4 text-muted small flex-wrap">
              <span className="mb-2 mb-md-0">
                <i className="bi bi-calendar3 me-2"></i>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : ""}
              </span>

              <span className="mb-2 mb-md-0">
                <i className="bi bi-watch me-1"></i>
                {minutes} min{minutes > 1 ? "s" : ""}
              </span>
            </div>

            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={title}
                className="img-fluid mb-4 rounded shadow"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            )}

            <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
              <PortableText value={bodyArray} />
            </div>

            {gallery.length > 0 && (
              <div className="row g-4">
                {gallery.map((src, idx) => (
                  <div className="col-md-6" key={idx}>
                    <img
                      src={src}
                      alt={`${title} - image ${idx + 2}`}
                      className="img-fluid rounded shadow"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <PressAndReleaseSidebar />
        </div>
      </div>
    </section>
  );
}
