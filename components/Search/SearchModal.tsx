"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("search_modal");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Close modal on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
      setSearchQuery("");
    }
  };

  const handlePopularSearchClick = (term: string) => {
    setSearchQuery(term);
  };

  const handleQuickSearch = (term: string) => {
    try {
      router.push(`/search?q=${encodeURIComponent(term)}`);
      onClose();
      setSearchQuery("");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Search Modal */}
      <div
        className="search-modal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 0.3s ease-out",
        }}
        onClick={onClose}
      >
        <div
          className="search-modal-content"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "2rem",
            width: "90%",
            maxWidth: "600px",
            position: "relative",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            transform: "scale(1)",
            animation: "slideUp 0.3s ease-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="btn-close position-absolute"
            style={{
              top: "1rem",
              right: "1rem",
              fontSize: "1.5rem",
              color: "#666",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "50%",
              transition: "all 0.2s ease",
            }}
            aria-label={t("close_label")}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#666";
            }}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Search Form */}
          <div className="search-form">
            <h3 className="mb-4 text-center" style={{ color: "#333" }}>
              {t("title")}
            </h3>
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group mb-3" style={{ height: "60px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    fontSize: "1.1rem",
                    border: "2px solid #e9ecef",
                    borderRadius: "50px 0 0 50px",
                    paddingLeft: "1.5rem",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#e64e4e";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                  }}
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!searchQuery.trim()}
                  style={{
                    borderRadius: "0 50px 50px 0",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "1.1rem",
                    background: "linear-gradient(45deg, #e64e4e, #c73d3d)",
                    border: "none",
                    transition: "all 0.3s ease",
                    opacity: searchQuery.trim() ? 1 : 0.6,
                  }}
                  onMouseEnter={(e) => {
                    if (searchQuery.trim()) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 15px rgba(230, 78, 78, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="bi bi-search me-2"></i>
                  {t("search_button")}
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="popular-searches">
              <p className="mb-2 text-muted small">{t("popular_searches")}</p>
              <div className="d-flex flex-wrap gap-2">
                {[
                  { key: "popular_search_1", searchTerm: "Fisheries Act" },
                  { key: "popular_search_2", searchTerm: "Closed Season" },
                  {
                    key: "popular_search_3",
                    searchTerm: "Fish for Development Program",
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleQuickSearch(item.searchTerm);
                    }}
                    style={{
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      border: "1px solid #6c757d",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e64e4e";
                      e.currentTarget.style.borderColor = "#e64e4e";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "#6c757d";
                      e.currentTarget.style.color = "#6c757d";
                    }}
                  >
                    {t(item.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Tips */}
            <div className="search-tips mt-4">
              <p className="text-muted small mb-1">
                <i className="bi bi-lightbulb me-1"></i>
                <strong>{t("search_tips_title")}</strong>
              </p>
              <ul className="text-muted small ps-3 mb-0">
                <li>{t("tip_1")}</li>
                <li>{t("tip_2")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .search-modal-content:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .search-modal-content {
            margin: 1rem;
            padding: 1.5rem;
          }

          .input-group {
            height: 50px !important;
          }

          .form-control {
            font-size: 1rem !important;
          }

          .btn {
            font-size: 1rem !important;
          }

          .popular-searches .btn {
            font-size: 0.8rem !important;
          }
        }

        .btn:disabled {
          cursor: not-allowed;
        }

        .search-tips ul {
          list-style-type: disc;
        }
      `}</style>
    </>
  );
};

export default SearchModal;
