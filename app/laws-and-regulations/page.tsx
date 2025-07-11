"use client";

import DocumentList from "@/components/Resources/DocumentList";
import FolderTree from "@/components/Resources/FolderTree";
import { sampleDocs } from "@/data/sampleDocs";
import { useState } from "react";

export default function LawsAndRegulationsPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="container-fluid pt-10">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 border-end mb-4 mb-md-0">
            <FolderTree
              onSelectFolder={setSelectedFolder}
              selectedFolder={selectedFolder}
            />
          </div>
          <div className="col-md-8">
            {selectedFolder && sampleDocs[selectedFolder] ? (
              <>
                <h5 className="mb-3">{selectedFolder}</h5>
                <DocumentList documents={sampleDocs[selectedFolder]} />
              </>
            ) : (
              <p className="text-muted">Select a folder to view documents.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
