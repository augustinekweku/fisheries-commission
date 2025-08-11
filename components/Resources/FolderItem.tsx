"use client";

import { Folder } from "@/types/Resources";
import { useState } from "react";

interface FolderItemProps {
  folder: Folder;
  onSelectFolder?: (name: string) => void;
  selectedFolder?: string | null;
  initialOpen?: boolean;
}

const FolderItem: React.FC<FolderItemProps> = ({
  folder,
  onSelectFolder,
  selectedFolder,
  initialOpen = false,
}) => {
  const [open, setOpen] = useState(initialOpen);

  const handleClick = () => {
    if (!folder.children || folder.children.length === 0) {
      onSelectFolder?.(folder.name);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div>
      <div
        className="d-flex align-items-center py-1"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <i className={`bi me-2 ${open ? "bi-folder2-open" : "bi-folder"}`}></i>
        <span className={folder.name === selectedFolder ? "fw-bold" : ""}>
          {folder.name}
        </span>
      </div>

      {/* Native collapse using conditional rendering */}
      <div className={`ps-4 collapse ${open ? "show" : ""}`}>
        {folder.children?.map((child, index) => (
          <FolderItem
            key={index}
            folder={child}
            onSelectFolder={onSelectFolder}
            selectedFolder={selectedFolder}
          />
        ))}
      </div>
    </div>
  );
};

export default FolderItem;
