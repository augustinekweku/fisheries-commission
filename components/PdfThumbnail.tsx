"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  readonly pdfUrl: string;
  readonly width?: number;
}

const Fallback = () => (
  <i className="bi bi-file-earmark-pdf text-muted fallback-pdf-icon" />
);

export default function PdfThumbnail({ pdfUrl, width = 80 }: Props) {
  const [error, setError] = useState(false);

  if (!pdfUrl || error) {
    return <Fallback />;
  }

  return (
    <Document
      file={pdfUrl}
      onLoadError={() => setError(true)}
      loading={<Fallback />}
      error={<Fallback />}
    >
      <Page
        pageNumber={1}
        width={width}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        onRenderError={() => setError(true)}
      />
    </Document>
  );
}
