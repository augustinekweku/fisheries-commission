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
  {
    name: "BENIN",
    children: [
      { name: "Arretes" },
      { name: "Decrets" },
      { name: "Documents Connexes" },
      { name: "Lois" },
      { name: "Politiques_Strategies" },
    ],
  },
  {
    name: "COTE D'IVOIRE",
  },

  { name: "LIBERIA" },
  { name: "NIGERIA" },
  { name: "TOGO" },
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
    <div className="folder-tree pb-4">
      <h5 className="mb-3 fw-semibold">National Regulations</h5>
      {folderData.map((folder, index) => (
        <FolderItem
          key={index}
          folder={folder}
          onSelectFolder={onSelectFolder}
          selectedFolder={selectedFolder}
        />
      ))}
    </div>
  );
};

export default FolderTree;
