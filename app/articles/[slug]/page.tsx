import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { articles } from "@/data/articles";

// Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = articles.find((p) => p.slug === slug);
  return {
    title: post?.title || "Articles",
    description: post?.excerpt || "",
  };
}

export default async function PressDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = articles.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <section className="container-fluid">
      <div className="container mt-1">
        <div className="row">
          {/* Main Post */}
          <div className="col-lg-8">
            {/* Title */}
            <h2 className="fw-semibold mb-3 text-uppercase">{post.title}</h2>

            {/* Meta Info */}
            <div className="d-flex justify-content-between align-items-center mt-5 border-bottom pb-2 mb-4 text-muted small flex-wrap">
              <span className="mb-2 mb-md-0">
                <i className="bi bi-calendar3 me-2"></i>
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              {/* <span className="btn btn-outline-secondary btn-sm text-uppercase rounded-pill px-3 me-2 mb-2 mb-md-0">
                BY {post.authorName}
              </span> */}

              <span className="mb-2 mb-md-0">
                <i className="bi bi-watch me-1"></i>
                {(() => {
                  const minutes = Math.max(
                    1,
                    Math.round(post.content.length / 1000)
                  );
                  return `${minutes} min${minutes > 1 ? "s" : ""} read`;
                })()}
              </span>
            </div>

            {/* Main Image */}
            <img
              src={`/${post.image}`}
              alt={post.title}
              className="img-fluid mb-4 rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
            />

            {/* Content */}
            <div
              className="mx-auto mb-5"
              style={{ maxWidth: "800px" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Additional Images */}
            {post.images && post.images.length > 0 && (
              <div className="row g-4">
                {post.images.map((img, index) => (
                  <div className="col-md-6" key={index}>
                    <img
                      src={`/${img}`}
                      alt={`Post image ${index + 1}`}
                      className="img-fluid rounded shadow"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            <h5 className="mb-4 border-bottom pb-2 accent-color">
              Recent News
            </h5>
            {[...articles]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 6)
              .map((recent, index) => (
                <div className="d-flex mb-4" key={index}>
                  <img
                    src={`/${recent.image}`}
                    alt={recent.title}
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
                      href={`/press-and-release/${recent.slug}`}
                      className="fw-semibold d-block text-dark text-decoration-none border-bottom pb-1 mb-1"
                    >
                      {recent.title.length > 60
                        ? recent.title.slice(0, 57) + "..."
                        : recent.title}
                    </Link>
                    <small className="text-muted">
                      {new Date(recent.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </small>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
