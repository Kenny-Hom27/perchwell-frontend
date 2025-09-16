"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div id="wrapper">
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <div id="app">{children}</div>
    </div>
  );
}
