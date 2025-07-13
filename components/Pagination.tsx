"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const createLink = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  // Generate page numbers with ellipsis for large page counts
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, current page area, and last page with ellipsis
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav
      className="d-flex justify-content-center mt-5 mb-4"
      aria-label="Page navigation"
      role="navigation"
    >
      <ul className="pagination pagination-sm d-md-none shadow-sm">
        {/* Mobile: Simple Previous/Current/Next */}
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          {currentPage > 1 ? (
            <Link
              className="page-link text-primary border-0 bg-light me-1 rounded px-2 py-1 fw-semibold"
              href={createLink(currentPage - 1)}
              style={{
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light me-1 rounded px-2 py-1 fw-semibold">
              <i className="bi bi-chevron-left"></i>
            </span>
          )}
        </li>

        <li className="page-item active">
          <span className="page-link bg-primary text-white border-0 mx-1 rounded px-3 py-1 fw-semibold">
            {currentPage} of {totalPages}
          </span>
        </li>

        <li
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          {currentPage < totalPages ? (
            <Link
              className="page-link text-primary border-0 bg-light ms-1 rounded px-2 py-1 fw-semibold"
              href={createLink(currentPage + 1)}
              style={{
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light ms-1 rounded px-2 py-1 fw-semibold">
              <i className="bi bi-chevron-right"></i>
            </span>
          )}
        </li>
      </ul>

      {/* Desktop: Full pagination */}
      <ul className="pagination d-none d-md-flex shadow-sm">
        {/* Previous Button */}
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          {currentPage > 1 ? (
            <Link
              className="page-link text-dark border-0 bg-light me-1 rounded-pill px-3 py-2 fw-semibold transition-all"
              href={createLink(currentPage - 1)}
              style={{
                textDecoration: "none",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <i className="bi bi-chevron-left me-1"></i>
              Previous
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light me-1 rounded-pill px-3 py-2 fw-semibold">
              <i className="bi bi-chevron-left me-1"></i>
              Previous
            </span>
          )}
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <li key={`ellipsis-${index}`} className="page-item disabled">
                <span className="page-link border-0 bg-transparent text-muted px-2">
                  ...
                </span>
              </li>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <li
              key={pageNum}
              className={`page-item ${isActive ? "active" : ""}`}
            >
              <Link
                className={`page-link border-0 mx-1 rounded-pill fw-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-light text-dark hover-bg-primary hover-text-white"
                }`}
                href={createLink(pageNum)}
                style={{
                  minWidth: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                }}
                aria-label={`Page ${pageNum}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </Link>
            </li>
          );
        })}

        {/* Next Button */}
        <li
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          {currentPage < totalPages ? (
            <Link
              className="page-link text-dark border-0 bg-light ms-1 rounded-pill px-3 py-2 fw-semibold transition-all"
              href={createLink(currentPage + 1)}
              style={{
                textDecoration: "none",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Next
              <i className="bi bi-chevron-right ms-1"></i>
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light ms-1 rounded-pill px-3 py-2 fw-semibold">
              Next
              <i className="bi bi-chevron-right ms-1"></i>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
