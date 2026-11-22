// src/app/page.js
"use client";

import Link from "next/link";
import { useTheme } from "@/customization/themes/useTheme";
import "./page.css";

const featuredTracks = [
  {
    title: "HTML & CSS Foundations",
    description:
      "Build accessible, responsive layouts from the ground up — semantic markup, flexbox, grid, and modern CSS.",
    href: "/tutorials/html",
    tag: "Beginner",
  },
  {
    title: "JavaScript Essentials",
    description:
      "From variables and closures to async/await — the language that powers the modern web.",
    href: "/tutorials/javascript",
    tag: "Core",
  },
  {
    title: "React & Next.js",
    description:
      "Components, hooks, routing, and server components. Ship production-grade React apps.",
    href: "/tutorials/react",
    tag: "Popular",
  },
  {
    title: "Python for Data",
    description:
      "Python fundamentals, pandas, and notebooks — everything you need for data work.",
    href: "/tutorials/python",
    tag: "Data",
  },
  {
    title: "SQL & Databases",
    description:
      "Query, join, and model relational data. Postgres-first, engine-agnostic.",
    href: "/tutorials/sql",
    tag: "Backend",
  },
  {
    title: "Quizzes & Exercises",
    description:
      "Test what you've learned with interactive quizzes and hands-on coding exercises.",
    href: "/quizzes",
    tag: "Practice",
  },
];

const stats = [
  { value: "120+", label: "Tutorials" },
  { value: "450+", label: "Exercises" },
  { value: "80+", label: "Quizzes" },
  { value: "12", label: "Certificates" },
];

export default function HomePage() {
  const { theme, themeName } = useTheme();

  return (
    <main className="home">
      {/* ---------- Hero Section ---------- */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <span className="home-eyebrow">
            <span className="home-eyebrow-dot" />
            Learn by building — Active Theme: {theme.label || themeName}
          </span>

          <h1 className="home-title">
            Master web development with{" "}
            <span className="home-title-accent">BookQubit Academy</span>
          </h1>

          <p className="home-subtitle">
            Hands-on tutorials, interactive exercises, and quizzes for HTML,
            CSS, JavaScript, React, Next.js, Python, and SQL — all in one place.
          </p>

          <div className="home-cta-row">
            <Link href="/tutorials" className="home-cta home-cta-primary">
              Start learning
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/exercises" className="home-cta home-cta-secondary">
              Try an exercise
            </Link>
          </div>

          {/* ---------- Stats ---------- */}
          <dl className="home-stats">
            {stats.map((s) => (
              <div key={s.label} className="home-stat">
                <dt className="home-stat-value">{s.value}</dt>
                <dd className="home-stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Featured Tracks ---------- */}
      <section className="home-section">
        <div className="home-section-head">
          <h2 className="home-section-title">Featured tracks</h2>
          <Link href="/tutorials" className="home-section-link">
            Browse all tutorials →
          </Link>
        </div>

        <div className="home-grid">
          {featuredTracks.map((t) => (
            <Link key={t.href} href={t.href} className="home-card">
              <span className="home-card-tag">{t.tag}</span>
              <h3 className="home-card-title">{t.title}</h3>
              <p className="home-card-desc">{t.description}</p>
              <span className="home-card-cta">Open track →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}