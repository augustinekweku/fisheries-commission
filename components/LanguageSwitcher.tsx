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

export default function LanguageSwitcher() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<LangOption>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Read the current locale from cookie on mount
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
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        right: window.innerWidth - rect.right - window.scrollX,
      });
    }
  };

  const toggleDropdown = () => {
    if (!isOpen) {
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
    router.refresh(); // reload page with new locale
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          padding: "4px 8px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.label}
          style={{
            width: "20px",
            height: "15px",
            borderRadius: "2px",
            objectFit: "cover",
          }}
        />
        <span style={{ fontSize: "12px" }}>{selectedLang.label}</span>
        <svg
          style={{
            width: "12px",
            height: "12px",
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

      {/* Dropdown Menu - Rendered as Portal */}
      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: dropdownPosition.top,
              right: dropdownPosition.right,
              width: "140px",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 2147483647,
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "100%",
                  padding: "6px 10px",
                  background:
                    selectedLang.code === lang.code ? "#f3f4f6" : "white",
                  border: "none",
                  cursor: "pointer",
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
                    width: "20px",
                    height: "15px",
                    borderRadius: "2px",
                    objectFit: "cover",
                  }}
                />
                <span style={{ fontSize: "12px" }}>{lang.label}</span>
                {selectedLang.code === lang.code && (
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#10b981",
                      fontSize: "12px",
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
    </div>
  );
}
