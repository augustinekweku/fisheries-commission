import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import NewsSidebar from "@/components/NewsAndEvents/NewsSidebar";
import { client } from "@/sanity/client";

type Post = {
  _id: string;
  title: string;
  body: any[];
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const excerpt =
    post?.body
      ?.map((block: any) =>
        (block.children || []).map((c: any) => c.text).join("")
      )
      .join(" ")
      .slice(0, 160) ?? "";
  return {
    title: post?.title ?? "Article",
    description: excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  // compute plain text length from portable text for reading time
  const plainText =
    post.body
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
            <h2 className="fw-bold mb-3 text-uppercase">{post.title}</h2>

            <div className="d-flex justify-content-between align-items-center mt-5 border-bottom pb-2 mb-4 text-muted small flex-wrap">
              <span className="mb-2 mb-md-0">
                <i className="bi bi-calendar3 me-2"></i>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : ""}
              </span>

              <span className="mb-2 mb-md-0">
                <i className="bi bi-watch me-1"></i>
                {minutes} min{minutes > 1 ? "s" : ""} read
              </span>
            </div>

            {/* Main Image (imageUrl) */}
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="img-fluid mb-4 rounded shadow"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            )}

            {/* Body (Portable Text) */}
            <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
              <PortableText value={post.body} />
            </div>

            {/* Gallery Images */}
            {gallery.length > 0 && (
              <div className="row g-4">
                {gallery.map((src, idx) => (
                  <div className="col-md-6" key={idx}>
                    <img
                      src={src}
                      alt={`${post.title} - image ${idx + 2}`}
                      className="img-fluid rounded shadow"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <NewsSidebar />
        </div>
      </div>
    </section>
  );
}
