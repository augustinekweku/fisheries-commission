"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/client";

// Enhanced search queries
const searchPostsQuery = `
*[_type == "post" && (title match $q || body match $q) && publishStatus == "published"] 
| order(publishedAt desc) 
[0...$limit] {
  "imageUrl": image.asset->url,
  slug,
  title,
  category,
  _id,
  body,
  publishedAt,
  "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
}
`;

const searchResourcesQuery = `
*[_type == "resource" && title match $q]  
| order(date desc)  
[0...$limit] {
  _id,
  title,
  category,
  date,
  modifiedAt,
  size,
  "pdfUrl": pdf.asset->url,
  "previewImageUrl": previewImage.asset->url
}
`;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  imageUrl?: string;
  excerpt?: string;
}

interface Resource {
  _id: string;
  title: string;
  category: string;
  date: string;
  modifiedAt: string;
  size: string;
  pdfUrl: string;
  previewImageUrl?: string;
}

interface SearchResults {
  posts: Post[];
  resources: Resource[];
}

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<SearchResults>({
    posts: [],
    resources: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (query.trim()) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    setError(null);

    try {
      // Create search pattern for GROQ
      const searchPattern = `"${searchQuery.trim()}*"`;

      // Execute both searches in parallel
      const [postsResults, resourcesResults] = await Promise.all([
        client.fetch(searchPostsQuery, {
          q: searchPattern,
          limit: 50,
        }),
        client.fetch(searchResourcesQuery, {
          q: searchPattern,
          limit: 50,
        }),
      ]);

      setResults({
        posts: postsResults || [],
        resources: resourcesResults || [],
      });

      setTotalResults(
        (postsResults?.length || 0) + (resourcesResults?.length || 0)
      );
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatFileSize = (bytes: string | number) => {
    const size = typeof bytes === "string" ? parseInt(bytes) : bytes;
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(1) + " KB";
    return (size / (1024 * 1024)).toFixed(1) + " MB";
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm.trim()})`, "gi");
    return text.replace(
      regex,
      '<mark style="background-color: #ffe066; padding: 2px 4px; border-radius: 3px;">$1</mark>'
    );
  };

  if (loading) {
    return (
      <div className="container-fluid">
        <section className="about section">
          <div className="container section-title pb-3">
            <h2>Search Results</h2>
            <p>Searching for "{query}"...</p>
          </div>
          <div className="container">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid">
        <section className="about section">
          <div className="container section-title pb-3">
            <h2>Search Results</h2>
            <p>Error occurred during search</p>
          </div>
          <div className="container">
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <section className="about section">
        <div className="container section-title pb-3">
          <h2>Search Results</h2>
          <p>
            Found {totalResults} result{totalResults !== 1 ? "s" : ""} for "
            {query}"
          </p>
        </div>

        <div className="container">
          {totalResults === 0 ? (
            <div className="text-center py-5">
              <i
                className="bi bi-search"
                style={{ fontSize: "4rem", color: "#e64e4e" }}
              ></i>
              <h4 className="mt-3">No results found</h4>
              <p className="text-muted">
                Try different keywords or check your spelling.
              </p>
            </div>
          ) : (
            <>
              {/* Articles Section */}
              {results.posts.length > 0 && (
                <div className="mb-5">
                  <h3
                    className="mb-4"
                    style={{
                      color: "#e64e4e",
                      borderBottom: "2px solid #e64e4e",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <i className="bi bi-newspaper me-2"></i>
                    Articles ({results.posts.length})
                  </h3>
                  <div className="row g-4">
                    {results.posts.map((post) => (
                      <div key={post._id} className="col-12">
                        <div
                          className="card shadow-sm border-0"
                          style={{ transition: "all 0.3s ease" }}
                        >
                          <div className="card-body p-4">
                            <div className="row g-4 align-items-center">
                              {/* Thumbnail */}
                              <div className="col-12 col-sm-2 text-center text-sm-start">
                                {post.imageUrl ? (
                                  <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="img-fluid rounded"
                                    style={{
                                      maxWidth: 80,
                                      maxHeight: 80,
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <div
                                    className="d-flex align-items-center justify-content-center bg-light rounded"
                                    style={{
                                      width: 80,
                                      height: 80,
                                      margin: "0 auto",
                                    }}
                                  >
                                    <i
                                      className="bi bi-newspaper text-muted"
                                      style={{ fontSize: "2rem" }}
                                    ></i>
                                  </div>
                                )}
                              </div>

                              {/* Article Info */}
                              <div className="col-12 col-sm-7">
                                <h6
                                  className="mb-2 text-break"
                                  dangerouslySetInnerHTML={{
                                    __html: `<strong>${highlightSearchTerm(post.title, query)}</strong>`,
                                  }}
                                />
                                {post.excerpt && (
                                  <p
                                    className="text-muted mb-2 small text-break"
                                    style={{
                                      fontSize: "0.85rem",
                                      lineHeight: "1.4",
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: highlightSearchTerm(
                                        post.excerpt,
                                        query
                                      ),
                                    }}
                                  />
                                )}
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                  <span className="badge bg-secondary small">
                                    {post.category}
                                  </span>
                                  <small className="text-muted">
                                    Published: {formatDate(post.publishedAt)}
                                  </small>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="col-12 col-md-3">
                                <div className="d-flex flex-column gap-2">
                                  <a
                                    href={`/articles/${post.slug.current}`}
                                    className="btn btn-primary d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                                    style={{
                                      backgroundColor: "#e64e4e",
                                      borderColor: "#e64e4e",
                                      transition: "all 0.2s ease",
                                    }}
                                  >
                                    <i className="bi bi-book-open"></i>
                                    <span className="fw-medium">
                                      Read Article
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Section */}
              {results.resources.length > 0 && (
                <div className="mb-5">
                  <h3
                    className="mb-4"
                    style={{
                      color: "#e64e4e",
                      borderBottom: "2px solid #e64e4e",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <i className="bi bi-file-text me-2"></i>
                    Resources ({results.resources.length})
                  </h3>
                  <div className="row g-4">
                    {results.resources.map((resource) => (
                      <div key={resource._id} className="col-12">
                        <div
                          className="card shadow-sm border-0"
                          style={{ transition: "all 0.3s ease" }}
                        >
                          <div className="card-body p-4">
                            <div className="row g-4 align-items-center">
                              {/* Thumbnail */}
                              <div className="col-12 col-sm-2 text-center text-sm-start">
                                {resource.previewImageUrl ? (
                                  <img
                                    src={resource.previewImageUrl}
                                    alt={resource.title}
                                    className="img-fluid rounded"
                                    style={{
                                      maxWidth: 80,
                                      maxHeight: 80,
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <div
                                    className="d-flex align-items-center justify-content-center bg-light rounded"
                                    style={{
                                      width: 80,
                                      height: 80,
                                      margin: "0 auto",
                                    }}
                                  >
                                    <i
                                      className="bi bi-file-earmark-pdf text-danger"
                                      style={{ fontSize: "2.5rem" }}
                                    ></i>
                                  </div>
                                )}
                              </div>

                              {/* Document Info */}
                              <div className="col-12 col-sm-7">
                                <h6
                                  className="mb-2 text-break"
                                  dangerouslySetInnerHTML={{
                                    __html: `<strong>${highlightSearchTerm(resource.title, query)}</strong>`,
                                  }}
                                />
                                <div className="d-flex flex-wrap gap-2 align-items-center mb-2">
                                  <span className="badge bg-info small">
                                    {resource.category}
                                  </span>
                                  {resource.size && (
                                    <small className="text-muted">
                                      Size: {formatFileSize(resource.size)}
                                    </small>
                                  )}
                                </div>
                                <small className="text-muted d-block text-break">
                                  Date added: {formatDate(resource.date)}
                                  {resource.modifiedAt &&
                                    resource.modifiedAt !== resource.date && (
                                      <>
                                        {" "}
                                        | Last Modified:{" "}
                                        {formatDate(resource.modifiedAt)}
                                      </>
                                    )}
                                </small>
                              </div>

                              {/* Action Buttons */}
                              <div className="col-12 col-md-3">
                                <div className="d-flex flex-column gap-2">
                                  <button
                                    onClick={async () => {
                                      try {
                                        const response = await fetch(
                                          resource.pdfUrl
                                        );
                                        const blob = await response.blob();
                                        const url =
                                          window.URL.createObjectURL(blob);
                                        const a = document.createElement("a");
                                        a.style.display = "none";
                                        a.href = url;
                                        a.download = resource.title + ".pdf";
                                        document.body.appendChild(a);
                                        a.click();
                                        window.URL.revokeObjectURL(url);
                                        document.body.removeChild(a);
                                      } catch (error) {
                                        console.error(
                                          "Download failed:",
                                          error
                                        );
                                        // Fallback to opening in new tab
                                        window.open(resource.pdfUrl, "_blank");
                                      }
                                    }}
                                    className="btn btn-primary d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                                    style={{
                                      backgroundColor: "#e64e4e",
                                      borderColor: "#e64e4e",
                                      transition: "all 0.2s ease",
                                    }}
                                  >
                                    <i className="bi bi-download"></i>
                                    <span className="fw-medium">Download</span>
                                  </button>

                                  <a
                                    href={resource.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                                    style={{
                                      borderColor: "#e64e4e",
                                      color: "#e64e4e",
                                      transition: "all 0.2s ease",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.backgroundColor =
                                        "#e64e4e";
                                      e.currentTarget.style.color = "white";
                                      e.currentTarget.style.transform =
                                        "translateY(-1px)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.backgroundColor =
                                        "transparent";
                                      e.currentTarget.style.color = "#e64e4e";
                                      e.currentTarget.style.transform =
                                        "translateY(0)";
                                    }}
                                  >
                                    <i className="bi bi-eye"></i>
                                    <span className="fw-medium">Preview</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style jsx>{`
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }

        mark {
          background-color: #ffe066 !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 576px) {
          .card-body .row {
            text-align: center;
          }

          .card-body .col-sm-7 {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchPageContent;
