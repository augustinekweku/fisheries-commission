"use client";

import { DocumentItem } from "@/types/Resources";
import { useTranslations } from "next-intl";
import PdfThumbnail from "@/components/PdfThumbnail";

interface Props {
  documents: DocumentItem[];
}

const PermitsList: React.FC<Props> = ({ documents }) => {
  const t = useTranslations("permitsAndLicenses");

  if (documents.length === 0) {
    return (
      <div className="text-center py-5 mt-4">
        <div className="mb-3">
          <i
            className="bi bi-file-earmark-text text-muted"
            style={{ fontSize: "3.5rem" }}
          ></i>
        </div>
        <h5 className="text-muted">{t("emptyTitle")}</h5>
        <p className="text-muted mb-0">{t("emptyDescription")}</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {documents.map((doc, index) => (
        <div
          key={index}
          className="card shadow-sm mb-4"
          style={{
            borderRadius: "12px",
            transition: "all 0.3s ease",
            border: "1px solid #e9ecef",
          }}
        >
          <div className="card-body p-4">
            <div className="row g-4 align-items-center">
              {/* Thumbnail */}
              <div className="col-12 col-sm-2 text-center text-sm-start">
                <PdfThumbnail pdfUrl={doc.previewUrl} width={80} />
              </div>

              {/* Document Info */}
              <div className="col-12 col-sm-7">
                <h6 className="mb-2 text-break">
                  <strong>{doc.title}</strong>
                </h6>
                <small className="text-muted d-block text-break">
                  {t("size")}: {doc.size}
                </small>
                <small className="text-muted d-block text-break">
                  {t("dateAdded")}: {doc.dateAdded} | {t("lastModified")}:{" "}
                  {doc.dateModified}
                </small>
              </div>

              {/* Action Buttons */}
              <div className="col-12 col-md-3">
                <div className="d-flex flex-column gap-2">
                  {/* Download button */}
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(doc.downloadUrl);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.style.display = "none";
                        a.href = url;
                        a.download = doc.title + ".pdf";
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                      } catch (error) {
                        console.error("Download failed:", error);
                        window.open(doc.downloadUrl, "_blank");
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
                    <span className="fw-medium">{t("downloadButton")}</span>
                  </button>

                  {/* Preview button */}
                  <a
                    href={doc.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                    style={{
                      borderColor: "#e64e4e",
                      color: "#e64e4e",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#e64e4e";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#e64e4e";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="bi bi-eye"></i>
                    <span className="fw-medium">{t("previewButton")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermitsList;
