import React from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./Header.module.css";
import { DARK_MODE, FILE_EXPLORER, LIGHT_MODE } from "../../constants";

interface HeaderProps {
  darkMode: boolean;
  handleDarkMode: () => void;
}

export default function Header({ darkMode, handleDarkMode }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h2>{FILE_EXPLORER}</h2>
      <button onClick={handleDarkMode} className={styles.button}>
        {darkMode ? (
          <>
            <Moon size={16} />
            <span>{DARK_MODE}</span>
          </>
        ) : (
          <>
            <Sun size={16} />
            <span>{LIGHT_MODE}</span>
          </>
        )}
      </button>
    </div>
  );
}
