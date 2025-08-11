import { Folder } from "@/types/Resources";
import FolderItem from "./FolderItem";

const folderData: Folder[] = [
  {
    name: "GHANA",
    children: [
      { name: "Legislation" },
      { name: "Policies" },
      { name: "Regulation" },
      { name: "Legal_Documents" },
    ],
  },
];

interface FolderTreeProps {
  onSelectFolder: (folderName: string) => void;
  selectedFolder: string | null;
}

const FolderTree: React.FC<FolderTreeProps> = ({
  onSelectFolder,
  selectedFolder,
}) => {
  return (
    <div className="folder-tree pb-4 mb-5">
      <h5 className="mb-3 fw-semibold">National Regulations</h5>
      {folderData.map((folder, index) => (
        <FolderItem
          key={index}
          folder={folder}
          onSelectFolder={onSelectFolder}
          selectedFolder={selectedFolder}
          // Pass initial open state - GHANA should be open initially
          initialOpen={folder.name === "GHANA"}
        />
      ))}
    </div>
  );
};

export default FolderTree;
