// src/customization/Customizationpanel.jsx
"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useTheme } from "./themes/useTheme";
import { useFont } from "./font/useFont";
import "./Customizationpanel.css";

export default function CustomizationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const { theme, themeName, setTheme, availableThemes } = useTheme();
  const { fontName, setFont, availableFonts = [] } = useFont();

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !event.target.closest(".custom-panel-trigger")
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // 🟢 Group themes by their "name" prefix (e.g., "clay" -> Clay)
  const groupedThemes = useMemo(() => {
    const groups = {};

    availableThemes.forEach((t) => {
      let category = "Default";

      // Figure out the category based on the name prefix
      if (t.name.startsWith("clay")) category = "Clay";
      else if (t.name.startsWith("glass")) category = "Glassmorphism";
      else if (t.name.startsWith("neo")) category = "Neubrutalism";
      else if (t.name.startsWith("neu")) category = "Neumorphism";
      else if (t.name.startsWith("skeuo")) category = "Skeuomorphism";

      if (!groups[category]) groups[category] = [];
      groups[category].push(t);
    });

    // Optional: Define a specific order for the categories
    const order = [
      "Default",
      "Clay",
      "Glassmorphism",
      "Neubrutalism",
      "Neumorphism",
      "Skeuomorphism",
    ];
    const sortedGroups = {};
    order.forEach((key) => {
      if (groups[key]) sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [availableThemes]);

  return (
    <>
      {/* Gear Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`custom-panel-trigger ${isOpen ? "active" : ""}`}
        aria-label="Customization Settings"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
          <path d="m17 20.66-1-1.73" />
          <path d="M11 10.27 7 3.34" />
          <path d="m20.66 17-1.73-1" />
          <path d="m3.34 7 1.73 1" />
          <path d="M14 12h8" />
          <path d="M2 12h2" />
          <path d="m20.66 7-1.73 1" />
          <path d="m3.34 17 1.73-1" />
          <path d="m17 3.34-1 1.73" />
          <path d="m11 13.73-4 6.93" />
        </svg>
      </button>

      {/* Dark Overlay */}
      <div
        className={`custom-panel-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding Drawer */}
      <div
        className={`custom-panel-drawer ${isOpen ? "open" : ""}`}
        ref={panelRef}
      >
        <div className="custom-panel-header">
          <h2 className="custom-panel-title">Customization</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="custom-panel-close"
            aria-label="Close panel"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="custom-panel-content">
          {/* ----- 1. FONTS SECTION (Now at the top) ----- */}
          {availableFonts.length > 0 && (
            <div className="custom-section">
              <h3 className="custom-section-title">Typography</h3>
              <div className="custom-font-list">
                {availableFonts.map((f) => {
                  const active = f.name === fontName;
                  return (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setFont(f.name)}
                      className={`custom-font-btn ${active ? "active" : ""}`}
                      style={{ fontFamily: f.fontFamily || "inherit" }}
                    >
                      <span>{f.label || f.name}</span>
                      {active && <span className="custom-check">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <hr className="custom-divider" />

          {/* ----- 2. CATEGORIZED THEMES SECTION ----- */}
          <div className="custom-section">
            <h3 className="custom-section-title">Themes</h3>

            <div className="custom-theme-categories">
              {Object.entries(groupedThemes).map(([category, themes]) => (
                <div key={category} className="custom-theme-group">
                  {/* Category Header */}
                  <h4 className="custom-theme-group-title">{category}</h4>

                  {/* Theme Grid for this category */}
                  <div className="custom-theme-grid">
                    {themes.map((t) => {
                      const active = t.name === themeName;
                      return (
                        <button
                          key={t.name}
                          type="button"
                          onClick={() => setTheme(t.name)}
                          className={`custom-theme-chip ${active ? "active" : ""}`}
                          title={t.label || t.name}
                        >
                          <span
                            className="custom-theme-swatch"
                            style={{
                              background: `linear-gradient(135deg, ${t.primary}, ${
                                t.hex?.blue500 || t.primary
                              })`,
                            }}
                          />
                          <span className="custom-theme-label">
                            {t.label || t.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
