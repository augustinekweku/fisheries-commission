"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
  const t = useTranslations("pagination"); // Load translations from en.json/fr.json

  if (totalPages <= 1) return null;

  const createLink = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("ellipsis", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1, "ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("ellipsis", totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav
      className="d-flex justify-content-center mt-5 mb-4"
      aria-label={t("ariaLabel")}
      role="navigation"
    >
      {/* Mobile: Simple Previous/Current/Next */}
      <ul className="pagination pagination-sm d-md-none shadow-sm">
        {/* Previous */}
        <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
          {currentPage > 1 ? (
            <Link
              className="page-link text-dark border-0 bg-light me-1 rounded px-2 py-1 fw-semibold"
              href={createLink(currentPage - 1)}
            >
              <i className="bi bi-chevron-left"></i>
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light me-1 rounded px-2 py-1 fw-semibold">
              <i className="bi bi-chevron-left"></i>
            </span>
          )}
        </li>

        {/* Current page indicator */}
        <li className="page-item active">
          <span className="page-link bg-primary text-white border-0 mx-1 rounded px-3 py-1 fw-semibold">
            {t("pageOf", { current: currentPage, total: totalPages })}
          </span>
        </li>

        {/* Next */}
        <li
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
        >
          {currentPage < totalPages ? (
            <Link
              className="page-link text-dark border-0 bg-light ms-1 rounded px-2 py-1 fw-semibold"
              href={createLink(currentPage + 1)}
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
              className="page-link text-dark border-0 bg-light me-1 rounded-pill px-3 py-2 fw-semibold"
              href={createLink(currentPage - 1)}
            >
              <i className="bi bi-chevron-left me-1"></i>
              {t("previous")}
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light me-1 rounded-pill px-3 py-2 fw-semibold">
              <i className="bi bi-chevron-left me-1"></i>
              {t("previous")}
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
                className={`page-link border-0 mx-1 rounded-pill fw-semibold ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-light text-dark"
                }`}
                href={createLink(pageNum)}
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
              className="page-link text-dark border-0 bg-light ms-1 rounded-pill px-3 py-2 fw-semibold"
              href={createLink(currentPage + 1)}
            >
              {t("next")}
              <i className="bi bi-chevron-right ms-1"></i>
            </Link>
          ) : (
            <span className="page-link text-muted border-0 bg-light ms-1 rounded-pill px-3 py-2 fw-semibold">
              {t("next")}
              <i className="bi bi-chevron-right ms-1"></i>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
