// src/layout/navbar/navbardesktop/second_row_navbar_desktop.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import NavbarSlider from "./slider.jsx";
import "./second_row_navbar_desktop.css";

function buildDropdownData(lang) {
  const p = (path) => (lang ? `/${lang}${path}` : path);

  return {
    programming: {
      label: "Programming",
      links: [
        { label: "JavaScript", href: p("/programming/javascript") },
        { label: "Python", href: p("/programming/python") },
        { label: "SQL", href: p("/programming/sql") },
        { label: "Java", href: p("/programming/java") },
        { label: "C++", href: p("/programming/cpp") },
        { label: "Rust", href: p("/programming/rust") },
        { label: "Go", href: p("/programming/go") },
      ],
    },
    frameworks: {
      label: "Frameworks",
      links: [
        { label: "React", href: p("/programming/react") },
        { label: "Next.js", href: p("/programming/nextjs") },
        { label: "Node.js", href: p("/programming/nodejs") },
        { label: "Django", href: p("/programming/django") },
        { label: "Tailwind", href: p("/programming/tailwind") },
      ],
    },
    academic: {
      label: "Academic & AI",
      links: [
        { label: "Science", href: p("/tutorials/science") },
        { label: "Engineering", href: p("/tutorials/engineering") },
        { label: "AI", href: p("/tutorials/ai") },
        { label: "Machine Learning", href: p("/tutorials/ml") },
        { label: "Data Science", href: p("/tutorials/data-science") },
        { label: "Cloud", href: p("/tutorials/cloud") },
        { label: "Cybersecurity", href: p("/tutorials/cybersecurity") },
        { label: "Blockchain", href: p("/tutorials/blockchain") },
      ],
    },
  };
}

export default function SecondRowNavbarDesktop() {
  const params = useParams();
  const pathname = usePathname();
  const lang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;

  // DEBUG: log what lang the navbar sees — remove after fixing
  console.log("[SecondRowNavbar] params:", params, "lang:", lang);

  const dropdownData = buildDropdownData(lang);
  const [openKey, setOpenKey] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target))
        setOpenKey(null);
    };
    const onEsc = (e) => e.key === "Escape" && setOpenKey(null);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  const toggle = (key) => setOpenKey((cur) => (cur === key ? null : key));

  return (
    <div className="navbar-row-links">
      <nav className="navbar-links-inner" ref={navRef}>
        <NavbarSlider />
        <span className="navbar-divider" aria-hidden="true" />

        <Link href={lang ? `/${lang}` : "/"} className="navbar-link-primary">
          Home
        </Link>

        {Object.entries(dropdownData).map(([key, group]) => {
          const isOpen = openKey === key;
          return (
            <div
              key={key}
              className={`navbar-dropdown${isOpen ? " is-open" : ""}`}
            >
              <button
                className="navbar-dropdown-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => toggle(key)}
              >
                {group.label}
                <svg
                  className="navbar-dropdown-caret"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="navbar-dropdown-menu" role="menu">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="navbar-dropdown-item"
                    role="menuitem"
                    onClick={() => setOpenKey(null)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
