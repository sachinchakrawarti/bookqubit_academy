"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import FontContext from "./FontContext";

export const FONTS = {
  "inter": {
    "label": "Inter",
    "family": "'Inter', system-ui, -apple-system, sans-serif",
    "google": "Inter:wght@400;500;700"
  },
  "roboto": {
    "label": "Roboto",
    "family": "'Roboto', system-ui, sans-serif",
    "google": "Roboto:wght@400;500;700"
  },
  "poppins": {
    "label": "Poppins",
    "family": "'Poppins', system-ui, sans-serif",
    "google": "Poppins:wght@400;500;700"
  },
  "lora": {
    "label": "Lora",
    "family": "'Lora', Georgia, serif",
    "google": "Lora:wght@400;500;600"
  },
  "merriweather": {
    "label": "Merriweather",
    "family": "'Merriweather', Georgia, serif",
    "google": "Merriweather:wght@400;700"
  },
  "georgia": {
    "label": "Georgia",
    "family": "Georgia, 'Times New Roman', serif",
    "google": null
  },
  "mono": {
    "label": "JetBrains Mono",
    "family": "'JetBrains Mono', ui-monospace, monospace",
    "google": "JetBrains+Mono:wght@400;500;700"
  }
};

export const FONT_LIST = Object.entries(FONTS).map(([id, v]) => ({ id, ...v }));
export const DEFAULT_FONT = "inter";
const STORAGE_KEY = "bq-font";
const LINK_ID = "bq-google-font";

export default function FontProvider({ children }) {
  const [fontId, setFontId] = useState(DEFAULT_FONT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && FONTS[saved]) setFontId(saved);
    } catch (e) {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const font = FONTS[fontId] || FONTS[DEFAULT_FONT];

    document.documentElement.style.setProperty("--font-body", font.family);

    if (font.google) {
      let link = document.getElementById(LINK_ID);
      if (!link) {
        link = document.createElement("link");
        link.id = LINK_ID;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      link.href =
        "https://fonts.googleapis.com/css2?family=" +
        font.google +
        "&display=swap";
    }

    try {
      localStorage.setItem(STORAGE_KEY, fontId);
    } catch (e) {}
  }, [fontId, mounted]);

  const setFont = useCallback((id) => {
    if (FONTS[id]) setFontId(id);
  }, []);

  const value = useMemo(
    () => ({
      fontId,
      font: FONTS[fontId] || FONTS[DEFAULT_FONT],
      setFont,
      fonts: FONT_LIST,
    }),
    [fontId, setFont],
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
}
