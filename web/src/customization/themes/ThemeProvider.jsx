// src/customization/themes/ThemeProvider.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";
import themes from "./index"; // 👈 Import the clean object

export function ThemeProvider({ children }) {
  // Convert the object into an array for the UI
  const availableThemes = useMemo(() => Object.values(themes), []);

  const [themeName, setThemeName] = useState("light");

  // Load saved theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bookqubit-theme");
      if (saved && availableThemes.some((t) => t.name === saved)) {
        setThemeName(saved);
      }
    } catch {}
  }, [availableThemes]);

  // Find active theme
  const theme = useMemo(
    () => availableThemes.find((t) => t.name === themeName) || themes.light,
    [themeName, availableThemes],
  );

  // Set theme function
  const setTheme = (name) => {
    if (availableThemes.some((t) => t.name === name)) {
      setThemeName(name);
      try {
        localStorage.setItem("bookqubit-theme", name);
      } catch {}
    }
  };

  // Inject CSS Variables
  useEffect(() => {
    const root = document.documentElement;
    const h = theme.hex || {};
    const buttons = theme.buttonColors || {};
    const shadows = theme.shadow || {};
    const borders = theme.border || {};
    const backgrounds = theme.background || {};

    const vars = {
      "--theme-primary": theme.primary,
      "--theme-text": theme.text,
      "--theme-muted": theme.muted,
      "--theme-bg": theme.bg,
      "--theme-bg-surface": theme.bgSurface,
      "--theme-bg-subtle": theme.bgSubtle,

      "--theme-border": h.slate200 || h.gray300 || "#e2e8f0",
      "--theme-border-strong": h.slate300 || h.gray300 || "#cbd5e1",
      "--theme-radius-container": borders.default || "12px",
      "--theme-radius-button": borders.button || "8px",

      "--theme-btn-primary-bg":
        buttons.primaryButton?.background || theme.primary,
      "--theme-btn-primary-hover":
        buttons.primaryButton?.hoverBackground || theme.primary,
      "--theme-btn-primary-text": buttons.primaryButton?.textColor || "#ffffff",
      "--theme-btn-secondary-border":
        buttons.secondaryButton?.borderColor || theme.primary,
      "--theme-btn-secondary-text":
        buttons.secondaryButton?.textColor || theme.text,

      "--theme-shadow-container":
        shadows.container || "0 4px 6px -1px rgba(0,0,0,0.1)",
      "--theme-shadow-button": shadows.button || "0 2px 4px rgba(0,0,0,0.1)",
      "--theme-shadow-button-hover":
        shadows.buttonHover || "0 4px 6px rgba(0,0,0,0.15)",
      "--theme-ring-effect":
        theme.ringEffect || "inset 0 0 0 1px rgba(0,0,0,0.05)",

      "--theme-bg-gradient": backgrounds.section || "none",
      "--theme-bg-cover": backgrounds.bookCoverSide || "none",
    };

    Object.entries(vars).forEach(([key, value]) => {
      if (value) root.style.setProperty(key, value);
    });
  }, [theme]);

  const value = useMemo(
    () => ({ theme, themeName, setTheme, availableThemes }),
    [theme, themeName, availableThemes],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
