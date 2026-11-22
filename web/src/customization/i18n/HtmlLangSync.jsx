// src/customization/i18n/HtmlLangSync.jsx
"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

const LANGS = ["en", "fr", "de"];
const DEFAULT_LANG = "en";

export default function HtmlLangSync() {
  const params = useParams();
  const lang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;

  useEffect(() => {
    const next = LANGS.includes(lang) ? lang : DEFAULT_LANG;
    if (document.documentElement.lang !== next) {
      document.documentElement.lang = next;
    }
  }, [lang]);

  return null;
}
