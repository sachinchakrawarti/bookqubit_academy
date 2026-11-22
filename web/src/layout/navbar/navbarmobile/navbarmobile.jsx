// src/layout/navbar/navbarmobile/navbarmobile.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/customization/themes/useTheme";
import CustomizationPanel from "@/customization/Customizationpanel";
import "./navbarmobile.css";

// primaryLinks REMOVED

const programmingLinks = [
  { label: "JavaScript", href: "/tutorials/javascript" },
  { label: "Python", href: "/tutorials/python" },
  { label: "SQL", href: "/tutorials/sql" },
  { label: "Java", href: "/tutorials/java" },
  { label: "C++", href: "/tutorials/cpp" },
  { label: "Rust", href: "/tutorials/rust" },
  { label: "Go", href: "/tutorials/go" },
];

const frameworkLinks = [
  { label: "HTML", href: "/tutorials/html" },
  { label: "CSS", href: "/tutorials/css" },
  { label: "React", href: "/tutorials/react" },
  { label: "Next.js", href: "/tutorials/nextjs" },
  { label: "Node.js", href: "/tutorials/nodejs" },
  { label: "Django", href: "/tutorials/django" },
  { label: "Tailwind", href: "/tutorials/tailwind" },
];

const academicLinks = [
  { label: "Science", href: "/tutorials/science" },
  { label: "Engineering", href: "/tutorials/engineering" },
  { label: "AI", href: "/tutorials/ai" },
  { label: "Machine Learning", href: "/tutorials/ml" },
  { label: "Data Science", href: "/tutorials/data-science" },
  { label: "Cloud", href: "/tutorials/cloud" },
  { label: "Cybersecurity", href: "/tutorials/cybersecurity" },
  { label: "Blockchain", href: "/tutorials/blockchain" },
];

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar-mobile">
      <div className="navbar-mobile-top">
        <Link
          href="/"
          className="navbar-brand"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="navbar-brand-mark">
            {(theme?.name || "b").charAt(0).toUpperCase()}
          </span>
          <span className="navbar-brand-text">
            BookQubit <span className="navbar-brand-accent">Academy</span>
          </span>
        </Link>

        <div className="navbar-mobile-actions">
          <CustomizationPanel />
          <button
            className={`navbar-mobile-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-mobile-menu-content">
          <form
            className="navbar-mobile-search"
            onSubmit={(e) => e.preventDefault()}
          >
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
            <input
              type="search"
              placeholder="Search tutorials..."
              className="navbar-search-input"
            />
          </form>

          <div className="navbar-mobile-auth">
            <Link
              href="/login"
              className="navbar-login"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="navbar-signup"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>

          <hr className="navbar-mobile-divider" />

          <nav className="navbar-mobile-links">
            {/* Programming Group */}
            <h3 className="navbar-mobile-heading">Programming Languages</h3>
            <div className="navbar-mobile-grid">
              {programmingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Frameworks Group */}
            <h3 className="navbar-mobile-heading" style={{ marginTop: "24px" }}>
              Frameworks & Markup
            </h3>
            <div className="navbar-mobile-grid">
              {frameworkLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Academic & AI Group */}
            <h3 className="navbar-mobile-heading" style={{ marginTop: "24px" }}>
              Academic & AI
            </h3>
            <div className="navbar-mobile-grid">
              {academicLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
