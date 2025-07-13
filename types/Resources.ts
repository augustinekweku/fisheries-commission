export interface Folder {
  name: string;
  children?: Folder[];
  documents?: DocumentItem[];
}

export interface DocumentItem {
  title: string;
  size: string;
  hits: number;
  dateAdded: string;
  dateModified: string;
  thumbnailUrl: string;
  downloadUrl: string;
  previewUrl: string;
}
