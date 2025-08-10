import { client } from "@/sanity/client";
import Link from "next/link";

async function getRecentPressAndReleases() {
  const query = `
    *[_type == "post" && category == "press-and-releases"] 
    | order(publishedAt desc)[0...6]{
      title,
      slug,
      publishedAt,
      "imageUrl": image.asset->url
    }
  `;
  return await client.fetch(query);
}

export default async function PressAndReleaseSidebar() {
  const recentPosts = await getRecentPressAndReleases();

  return (
    <div className="col-lg-4 mt-5 mt-lg-0">
      <h5 className="mb-4 border-bottom pb-2 accent-color fw-bold">
        Recent Press and Releases
      </h5>

      {recentPosts.map((post: any, index: number) => (
        <div className="d-flex mb-4" key={index}>
          <img
            src={post.imageUrl}
            alt={post.title}
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
              href={`/press-and-release/${post.slug.current}`}
              className="fw-semibold d-block text-dark text-decoration-none border-bottom pb-1 mb-1"
            >
              {post.title.length > 60
                ? post.title.slice(0, 57) + "..."
                : post.title}
            </Link>
            <small className="text-muted">
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
