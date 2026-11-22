// src/customization/font/useFont.js
"use client";
import { useContext } from "react";
import FontContext from "./FontContext";

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) {
    throw new Error("useFont must be used inside <FontProvider>");
  }
  return ctx;
}