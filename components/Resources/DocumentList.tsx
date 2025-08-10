import { DocumentItem } from "@/types/Resources";

interface Props {
  document: DocumentItem;
}

const DocumentViewer: React.FC<Props> = ({ document }) => {
  return (
    <div className="document-viewer mb-5">
      <h4 className="mb-3 py-1 title text-uppercase fw-semibold">
        {document.title}
      </h4>

      {/* Embed PDF or Document */}
      <iframe
        src={document.previewUrl}
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title={document.title}
      ></iframe>
    </div>
  );
};

export default DocumentViewer;
