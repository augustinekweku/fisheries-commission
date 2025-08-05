import { articles } from "@/data/articles";
import Link from "next/link";
import React from "react";

const NewsSidebar = () => {
  return (
    <div className="col-lg-4 mt-5 mt-lg-0">
      <h5 className="mb-4 border-bottom pb-2 accent-color fw-bold">
        Recent News
      </h5>
      {[...articles]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
                href={`/articles/${recent.slug}`}
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
  );
};

export default NewsSidebar;
