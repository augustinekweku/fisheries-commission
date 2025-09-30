"use client";

import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

type LangOption = {
  code: "en" | "fr";
  label: string;
  flag: string;
};

const languages: LangOption[] = [
  { code: "en", label: "English", flag: "/assets/img/flags/en.jpg" },
  { code: "fr", label: "Français", flag: "/assets/img/flags/fr.jpg" },
];

type LanguageSwitcherProps = {
  variant?: "topbar" | "fixed";
};

export default function LanguageSwitcher({
  variant = "topbar",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<LangOption>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
    left: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // current locale from cookie on mount
  useEffect(() => {
    const currentLocale = getCookie("locale") as "en" | "fr" | undefined;
    if (currentLocale) {
      const lang = languages.find((l) => l.code === currentLocale);
      if (lang) {
        setSelectedLang(lang);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateDropdownPosition = () => {
    if (buttonRef.current && variant === "topbar") {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        right: window.innerWidth - rect.right - window.scrollX,
        left: rect.left + window.scrollX,
      });
    }
  };

  const toggleDropdown = () => {
    if (!isOpen && variant === "topbar") {
      updateDropdownPosition();
    }
    setIsOpen((prev) => !prev);
  };

  function switchLanguage(locale: "en" | "fr") {
    const newLang =
      languages.find((lang) => lang.code === locale) || languages[0];
    setSelectedLang(newLang);
    setIsOpen(false);

    setCookie("locale", locale);
    router.refresh();
  }

  // Styles based on variant
  const containerStyle =
    variant === "fixed"
      ? {
          position: "fixed" as const,
          bottom: "40px",
          left: "20px",
          zIndex: 1000,
        }
      : {
          position: "relative" as const,
          display: "inline-block" as const,
        };

  const buttonStyle =
    variant === "fixed"
      ? {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          padding: "10px 14px",
          backgroundColor: "white",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s",
        }
      : {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          padding: "4px 8px",
          backgroundColor: "white",
          cursor: "pointer",
        };

  const dropdownStyle =
    variant === "fixed"
      ? {
          position: "fixed" as const,
          bottom: "80px",
          left: "20px",
          width: "160px",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
          zIndex: 1001,
          overflow: "hidden" as const,
        }
      : {
          position: "absolute" as const,
          top: dropdownPosition.top,
          right: dropdownPosition.right,
          width: "140px",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 2147483647,
        };

  return (
    <>
      <div style={containerStyle}>
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          style={buttonStyle}
          onMouseEnter={(e) => {
            if (variant === "fixed") {
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }
          }}
          onMouseLeave={(e) => {
            if (variant === "fixed") {
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          <img
            src={selectedLang.flag}
            alt={selectedLang.label}
            style={{
              width: variant === "fixed" ? "24px" : "20px",
              height: variant === "fixed" ? "18px" : "15px",
              borderRadius: variant === "fixed" ? "3px" : "2px",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              fontSize: variant === "fixed" ? "14px" : "12px",
              fontWeight: variant === "fixed" ? "500" : "normal",
            }}
          >
            {selectedLang.label}
          </span>
          <svg
            style={{
              width: variant === "fixed" ? "14px" : "12px",
              height: variant === "fixed" ? "14px" : "12px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div ref={dropdownRef} style={dropdownStyle}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: variant === "fixed" ? "8px" : "6px",
                  width: "100%",
                  padding: variant === "fixed" ? "10px 14px" : "6px 10px",
                  background:
                    selectedLang.code === lang.code ? "#f3f4f6" : "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    selectedLang.code === lang.code ? "#f3f4f6" : "white")
                }
              >
                <img
                  src={lang.flag}
                  alt={lang.label}
                  style={{
                    width: variant === "fixed" ? "24px" : "20px",
                    height: variant === "fixed" ? "18px" : "15px",
                    borderRadius: variant === "fixed" ? "3px" : "2px",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{ fontSize: variant === "fixed" ? "14px" : "12px" }}
                >
                  {lang.label}
                </span>
                {selectedLang.code === lang.code && (
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#10b981",
                      fontSize: variant === "fixed" ? "14px" : "12px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
