// src/layout/navbar/navbardesktop/slider.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import "./slider.css";

const sidebarData = [
  {
    title: "Programming",
    links: [
      { label: "JavaScript", href: "/tutorials/javascript" },
      { label: "Python", href: "/tutorials/python" },
      { label: "SQL", href: "/tutorials/sql" },
      { label: "Java", href: "/tutorials/java" },
      { label: "C++", href: "/tutorials/cpp" },
      { label: "Rust", href: "/tutorials/rust" },
      { label: "Go", href: "/tutorials/go" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { label: "HTML", href: "/tutorials/html" },
      { label: "CSS", href: "/tutorials/css" },
      { label: "React", href: "/tutorials/react" },
      { label: "Next.js", href: "/tutorials/nextjs" },
      { label: "Node.js", href: "/tutorials/nodejs" },
      { label: "Django", href: "/tutorials/django" },
      { label: "Tailwind", href: "/tutorials/tailwind" },
    ],
  },
  {
    title: "Academic & AI",
    links: [
      { label: "Science", href: "/tutorials/science" },
      { label: "Engineering", href: "/tutorials/engineering" },
      { label: "AI", href: "/tutorials/ai" },
      { label: "Machine Learning", href: "/tutorials/ml" },
      { label: "Data Science", href: "/tutorials/data-science" },
      { label: "Cloud", href: "/tutorials/cloud" },
      { label: "Cybersecurity", href: "/tutorials/cybersecurity" },
      { label: "Blockchain", href: "/tutorials/blockchain" },
    ],
  },
];

export default function NavbarSlider() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen((prev) => !prev);
  const closeSlider = () => setIsOpen(false);

  return (
    <>
      {/* The Burger Button */}
      <button
        type="button"
        className="navbar-burger"
        onClick={toggleSlider}
        aria-label="Toggle sidebar menu"
        aria-expanded={isOpen}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* The Backdrop (darkens page when open) */}
      {isOpen && (
        <div className="navbar-slider-backdrop" onClick={closeSlider} />
      )}

      {/* The Slider Panel */}
      <aside className={`navbar-slider ${isOpen ? "is-open" : ""}`}>
        <div className="navbar-slider-header">
          <span className="navbar-slider-title">Explore</span>
          <button
            type="button"
            className="navbar-slider-close"
            onClick={closeSlider}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="navbar-slider-content">
          {sidebarData.map((group) => (
            <div key={group.title} className="slider-group">
              <h3 className="slider-group-title">{group.title}</h3>
              <ul className="slider-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="slider-link"
                      onClick={closeSlider}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
