import React, { useState } from "react";
import { Folder, FolderOpen, File as FileIcon } from "lucide-react";
import { FileNode, FileType } from "../../types";
import styles from "./FileTree.module.css";
import FileTreeIcon from "./FileTreeIcon";

export default function FileTree({ node }: { node: FileNode }) {
  const [expanded, setExpanded] = useState(false);
  const isFolder = node.type === FileType.Folder;

  const toggleExpand = () => {
    if (isFolder) setExpanded((prev) => !prev);
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
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
        className={styles.fileTree}
        style={{
          fontWeight: isFolder ? "bold" : "normal",
        }}
        title={node.path}
      >
        <FileTreeIcon isFolder={isFolder} expanded={expanded} />
        <span>{node.name}</span>
      </div>

      {expanded &&
        node.children?.map((child) => (
          <div key={child.path} className={styles.childNode}>
            <FileTree node={child} />
          </div>
        ))}
    </div>
  );
}
