import { DocumentItem } from "@/types/Resources";

interface Props {
  documents: DocumentItem[];
}

const ReportsAndPlansList: React.FC<Props> = ({ documents }) => {
  return (
    <div className="mt-5">
      {documents.map((doc, index) => (
        <div key={index} className="border rounded p-3 mb-4">
          <div className="row g-3">
            {/* Thumbnail */}
            <div className="col-12 col-sm-2 text-center text-sm-start">
              <img
                src={doc.thumbnailUrl}
                alt="doc"
                className="img-fluid"
                style={{ maxWidth: 80 }}
              />
            </div>

            {/* Document Info */}
            <div className="col-12 col-sm-7">
              <h6 className="mb-2 text-break">{doc.title}</h6>
              <small className="text-muted d-block text-break">
                Size: {doc.size} | Hits: {doc.hits}
              </small>
              <small className="text-muted d-block text-break">
                Date added: {doc.dateAdded} | Modified: {doc.dateModified}
              </small>
            </div>

            {/* Buttons */}
            <div className="col-12 col-sm-3 text-sm-end text-center">
              <a
                href={doc.downloadUrl}
                download
                className=" btn-accent mb-2 d-flex align-items-center flex-row align-items-center justify-content-center w-100"
              >
                Download
                <i className="bi bi-cloud-arrow-down-fill fs-5 ms-2"></i>
              </a>
              <a
                href={doc.previewUrl}
                className="btn-accent btn-sm mb-2 d-flex align-items-center flex-row align-items-center justify-content-center w-100"
              >
                Preview
                <i className="bi bi-eye fs-5 ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportsAndPlansList;
