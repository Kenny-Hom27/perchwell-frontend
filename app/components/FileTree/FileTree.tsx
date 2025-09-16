import React, { useState } from "react";
import { Folder, FolderOpen, File as FileIcon } from "lucide-react";
import { FileNode, FileType, SelectedFile } from "../../types";
import styles from "./FileTree.module.css";
import FileTreeIcon from "./FileTreeIcon";

export default function FileTree({
  node,
  selectedFile,
  handleFileClick,
}: {
  node: FileNode;
  selectedFile: SelectedFile;
  handleFileClick: (nodeName: string, nodePath: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isFolder = node.type === FileType.Folder;

  const toggleExpand = (nodeName?: string, nodePath?: string) => {
    if (isFolder) {
      setExpanded((prev) => !prev);
      handleFileClick("", "");
    } else {
      handleFileClick(nodeName, nodePath);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isFolder) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        toggleExpand();
        break;
      case "ArrowRight":
        e.preventDefault();
        setExpanded(true);
        break;
      case "ArrowLeft":
        e.preventDefault();
        setExpanded(false);
        break;
    }
  };

  return (
    <div className={styles.fileTreeWrapper}>
      <div
        tabIndex={0}
        aria-expanded={isFolder ? expanded : undefined}
        onClick={() => toggleExpand(node.name, node.path)}
        onKeyDown={handleKeyDown}
        className={styles.fileTree}
        style={{
          fontWeight: isFolder ? "bold" : "normal",
        }}
        title={node.path}
      >
        <FileTreeIcon isFolder={isFolder} expanded={expanded} />
        <span
          className={styles.fileTreeName}
          style={{
            color:
              selectedFile?.nodePath === node.path && !isFolder
                ? "gold"
                : "inherit",
          }}
        >
          {node.name}
        </span>
      </div>

      {expanded &&
        node.children?.map((child) => (
          <div key={child.path} className={styles.childNode}>
            <FileTree
              node={child}
              selectedFile={selectedFile}
              handleFileClick={handleFileClick}
            />
          </div>
        ))}
    </div>
  );
}
