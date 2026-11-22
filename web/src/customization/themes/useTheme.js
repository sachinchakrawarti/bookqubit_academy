// src/customization/themes/useTheme.js
"use client";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";   // ✅ default import

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

export default useTheme;