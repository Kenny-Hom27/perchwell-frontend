import { FolderOpen, Folder, FileIcon } from "lucide-react";

export default function FileTreeIcon({
  isFolder,
  expanded,
}: {
  isFolder: boolean;
  expanded: boolean;
}) {
  if (isFolder) {
    return expanded ? (
      <FolderOpen size={16} color="lightgreen" />
    ) : (
      <Folder size={16} color="red" />
    );
  }
  return <FileIcon size={16} color="grey" />;
}
