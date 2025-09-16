import FileTree from "../FileTree/FileTree";
import { FileNode, SelectedFile } from "../../types";
import { EXPLORER } from "../../constants";
import styles from "./Panel.module.css";

interface PanelProps {
  files: FileNode;
  selectedFile: SelectedFile;
  handleFileClick: (nodeName: string, nodePath: string) => void;
}

export default function Panel({
  files,
  selectedFile,
  handleFileClick,
}: PanelProps) {
  return (
    <div className={styles.panel}>
      <h3>{EXPLORER}</h3>
      <FileTree
        node={files}
        selectedFile={selectedFile}
        handleFileClick={handleFileClick}
      />
    </div>
  );
}
