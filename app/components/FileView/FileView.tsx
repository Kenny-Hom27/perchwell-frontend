import { NO_FILES } from "../../constants";
import { SelectedFile } from "../../types";
import styles from "./FileView.module.css";

interface FileViewProps {
  selectedFile: SelectedFile | null;
}

export default function FileView({ selectedFile }: FileViewProps) {
  if (!selectedFile || !selectedFile.nodeName || !selectedFile.nodePath) {
    return <div className={styles.fileView}>{NO_FILES}</div>;
  }

  return (
    <div className={styles.fileView}>
      <p>File Name: {selectedFile.nodeName}</p>
      <p>Path: {selectedFile.nodePath}</p>
    </div>
  );
}
