"use client";
import { useState, useEffect } from "react";
import { API_ENDPOINT, LOADING } from "./constants";
import FileView from "./components/FileView/FileView";
import Panel from "./components/Panel/Panel";
import { SelectedFile } from "./types";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<SelectedFile>(null);

  useEffect(() => {
    const fetchFileTree = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFileTree();
  }, []);

  if (loading) return <p>{LOADING}</p>;
  if (error) return <p>{error}</p>;

  const handleFileClick = (nodeName: string, nodePath: string) => {
    setSelectedFile({ nodeName, nodePath });
  };

  return (
    <main>
      <div id="content">
        <Panel
          files={data}
          selectedFile={selectedFile}
          handleFileClick={handleFileClick}
        />
        <FileView selectedFile={selectedFile} />
      </div>
    </main>
  );
}
