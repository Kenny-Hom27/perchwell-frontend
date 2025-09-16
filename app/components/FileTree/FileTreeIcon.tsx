import { FolderOpen, Folder, File as FileIcon } from "lucide-react";

interface FileTreeIconProps {
  isFolder: boolean;
  expanded: boolean;
}

export default function FileTreeIcon({
  isFolder,
  expanded,
}: FileTreeIconProps) {
  if (isFolder) {
    return expanded ? (
      <FolderOpen size={16} color="lightgreen" />
    ) : (
      <Folder size={16} color="red" />
    );
  }
  return <FileIcon size={16} color="grey" />;
}
