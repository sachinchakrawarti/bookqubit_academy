// src/layout/navbar/navbardesktop/first_row_navbar_desktop.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useTheme } from "@/customization/themes/useTheme.js";
import Customizationpanel from "@/customization/Customizationpanel.jsx";
import "./first_row_navbar_desktop.css";

export default function FirstRowNavbarDesktop() {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();
  const params = useParams();
  const lang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;
  const p = (path) => (lang ? `/${lang}${path}` : path);

  return (
    <div className="navbar-row-top">
      <div className="navbar-inner-top">
        <Link href={lang ? `/${lang}` : "/"} className="navbar-brand">
          <span className="navbar-brand-mark">
            {(theme?.name || "b").charAt(0).toUpperCase()}
          </span>
          <span className="navbar-brand-text">
            BookQubit <span className="navbar-brand-accent">Academy</span>
          </span>
        </Link>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="navbar-search"
          role="search"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tutorials, exercises, courses..."
            className="navbar-search-input"
          />
          <svg
            className="navbar-search-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
        </form>

        <div className="navbar-actions">
          <Customizationpanel />
          <div className="navbar-auth">
            <Link href={p("/login")} className="navbar-login">
              Log in
            </Link>
            <Link href={p("/signup")} className="navbar-signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
