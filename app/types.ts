export enum FileType {
  File = "file",
  Folder = "folder",
}

export interface FileNode {
  name: string;
  type: FileType;
  path: string;
  children?: FileNode[];
}

export interface SelectedFile {
  nodeName: string;
  nodePath: string;
}
