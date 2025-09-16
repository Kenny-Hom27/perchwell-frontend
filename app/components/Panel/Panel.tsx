import React, { useState } from "react";
import FileTree from "../FileTree/FileTree";
import { FileNode } from "../../types";
import { EXPLORER } from "../../constants";
import styles from "./Panel.module.css";

interface PanelProps {
  files: FileNode;
}

export default function Panel({ files }: PanelProps) {
  return (
    <div className={styles.panel}>
      <h3>{EXPLORER}</h3>
      <FileTree node={files} />
    </div>
  );
}
