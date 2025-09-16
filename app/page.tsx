"use client";
import { useState, useEffect } from "react";
import { API_ENDPOINT } from "./constants";
import FileView from "./components/FileView/FileView";
import Panel from "./components/Panel/Panel";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  console.log(data);

  if (loading) return <p>Loading file tree...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <div id="content">
        <Panel files={data} />
        <FileView />
      </div>
    </main>
  );
}
