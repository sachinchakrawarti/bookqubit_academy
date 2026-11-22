"use client";

import { useState, useEffect } from "react";
import {
  FiSliders,
  FiX,
  FiSun,
  FiCheck,
  FiType,
  FiEye,
  FiZap,
} from "react-icons/fi";
import { useTheme } from "@/customization/themes/useTheme";
import { useVisualStyle } from "@/customization/visual_styles/useVisualStyle";
import { useFont } from "@/customization/font/useFont";
import { useMotion } from "@/customization/motions/useMotion";
import "./customization.css";

const TABS = [
  { id: "theme", label: "Theme", icon: <FiSun size={16} /> },
  { id: "font", label: "Font", icon: <FiType size={16} /> },
  { id: "visual", label: "Visual", icon: <FiEye size={16} /> },
  { id: "motion", label: "Motion", icon: <FiZap size={16} /> },
];

// Group order shown in the Theme tab (key matches themeGroups; activeStyle matches visual style id)
const STYLE_GROUPS = [
  { key: "default", label: "Default", activeStyle: "default" },
  { key: "clay", label: "Claymorphism", activeStyle: "claymorphism" },
  { key: "glassmorphism", label: "Glassmorphism", activeStyle: "glassmorphism" },
  { key: "neubrutalism", label: "Neubrutalism", activeStyle: "neubrutalism" },
  { key: "skeuomorphism", label: "Skeuomorphism", activeStyle: "skeuomorphism" },
  { key: "neumorphism", label: "Neumorphism", activeStyle: "neumorphism" },
];

// Fallback theme lists if themeGroups isn't exposed by the provider
const FALLBACK_GROUPS = {
  default: [
    "light",
    "dark",
    "cyberpunk",
    "forest",
    "lavender",
    "midnight",
    "ocean",
    "rose",
    "sand",
    "sepia",
  ],
  clay: [
    "clay",
    "clayBlush",
    "clayCharcoal",
    "clayLavender",
    "claySand",
    "claySky",
  ],
  glassmorphism: [
    "glassLight",
    "glassDark",
    "glassRose",
    "glassLavender",
    "glassAmber",
    "glassSlate",
  ],
  neubrutalism: [
    "neoYellow",
    "neoPink",
    "neoCyan",
    "neoLime",
    "neoOrange",
    "neoViolet",
  ],
  skeuomorphism: [
    "skeuoLeather",
    "skeuoWood",
    "skeuoPaper",
    "skeuoMetal",
    "skeuoFabric",
    "skeuoSlate",
  ],
  neumorphism: [
    "neuMist",
    "neuPearl",
    "neuSky",
    "neuMint",
    "neuBlush",
    "neuCharcoal",
  ],
};

const STYLE_TO_GROUP = {
  default: "default",
  minimalism: "default",
  maximalism: "default",
  claymorphism: "clay",
  glassmorphism: "glassmorphism",
  neubrutalism: "neubrutalism",
  skeuomorphism: "skeuomorphism",
  neumorphism: "neumorphism",
};

export default function CustomizationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("theme");

  const { themeName, setTheme, themes, themeGroups, getVisibleThemes } =
    useTheme();
  const { styleId, setVisualStyle, styles } = useVisualStyle();
  const { fontId, setFont, fonts } = useFont();
  const { motionId, setMotion, motions } = useMotion();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const reset = () => {
    setVisualStyle("default");
    setTheme("light");
    setFont("inter");
    setMotion("normal");
  };

  // ── Theme preview helpers ─────────────────────────────────
  const getPreviewBg = (t) =>
    t?.preview ||
    t?.bg ||
    t?.background?.primary ||
    t?.background?.card ||
    "#ffffff";

  const getPreviewAccent = (t) =>
    t?.primary || t?.textColors?.highlight || "#0284c7";

  const isLightTheme = (t) => {
    const bg = getPreviewBg(t);
    if (typeof bg === "string" && bg.startsWith("#")) {
      const hex = bg.replace("#", "");
      const full =
        hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
      const r = parseInt(full.slice(0, 2), 16);
      const g = parseInt(full.slice(2, 4), 16);
      const b = parseInt(full.slice(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
    }
    return true;
  };

  // ── Normalize provider themes into a lookup by name ───────
  const themeLookup = (() => {
    const map = {};
    const source = Array.isArray(themes)
      ? themes
      : Object.entries(themes || {}).map(([k, v]) => ({ name: k, ...v }));
    source.forEach((t) => {
      const key = t.name || t.id;
      if (key) map[key] = t;
    });
    return map;
  })();

  // ── Resolve themes for a group ────────────────────────────
  const resolveGroupThemes = (groupKey, activeStyle) => {
    // 1. Prefer themeGroups from the provider (object keyed by theme name)
    const groupObj = themeGroups?.[groupKey];
    if (groupObj && typeof groupObj === "object") {
      const list = Object.entries(groupObj).map(([k, v]) => ({
        name: k,
        ...(v || {}),
      }));
      if (list.length > 0) return list;
    }

    // 2. Then try provider's getVisibleThemes(styleId)
    if (typeof getVisibleThemes === "function") {
      const list = getVisibleThemes(activeStyle);
      if (Array.isArray(list) && list.length > 0) return list;
    }

    // 3. Fallback: known theme-name lists, resolved via lookup
    const fallbackNames = FALLBACK_GROUPS[groupKey] || [];
    const resolved = fallbackNames
      .map((name) => themeLookup[name])
      .filter(Boolean);
    if (resolved.length > 0) return resolved;

    // 4. Last resort: full theme list
    return Object.values(themeLookup);
  };

  // Which group matches the current visual style?
  const currentGroupKey = STYLE_TO_GROUP[styleId] || "default";

  return (
    <>
      <button
        className="bq-control-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open customization"
        title="Customize appearance"
      >
        <FiSliders size={18} />
      </button>

      {isOpen && (
        <div className="bq-custom-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="bq-custom-slider"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bq-custom-header">
              <div>
                <h2 className="bq-custom-title">Customize</h2>
                <p className="bq-custom-subtitle">
                  Personalize your experience
                </p>
              </div>
              <button
                className="bq-custom-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="bq-custom-tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={
                    "bq-custom-tab " + (activeTab === t.id ? "active" : "")
                  }
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.icon}
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            <div className="bq-custom-body">
              {/* THEME — grouped by visual style */}
              {activeTab === "theme" && (
                <div>
                  <h3 className="bq-custom-section-title">Color Theme</h3>
                  <p className="bq-custom-section-desc">
                    Each visual style has its own set of themes
                  </p>

                  <div className="bq-theme-groups">
                    {STYLE_GROUPS.map((group) => {
                      const groupThemes = resolveGroupThemes(
                        group.key,
                        group.activeStyle,
                      );
                      const isActiveGroup = currentGroupKey === group.key;

                      return (
                        <div
                          key={group.key}
                          className={
                            "bq-theme-group " +
                            (isActiveGroup ? "active" : "")
                          }
                        >
                          <div className="bq-theme-group-header">
                            <span className="bq-theme-group-label">
                              {group.label}
                            </span>
                            {isActiveGroup && (
                              <span className="bq-theme-group-badge">
                                Active
                              </span>
                            )}
                          </div>

                          <div className="bq-theme-grid">
                            {groupThemes.length === 0 && (
                              <p className="bq-custom-section-desc">
                                No themes registered for this group.
                              </p>
                            )}
                            {groupThemes.map((t) => {
                              const id = t.name || t.id;
                              const isSelected = themeName === id;
                              const bg = getPreviewBg(t);
                              const accent = getPreviewAccent(t);
                              return (
                                <button
                                  key={id}
                                  className={
                                    "bq-theme-card " +
                                    (isSelected ? "active" : "")
                                  }
                                  onClick={() => {
                                    // Switch visual style when picking
                                    // a theme from another group
                                    if (!isActiveGroup) {
                                      setVisualStyle(group.activeStyle);
                                    }
                                    setTheme(id);
                                  }}
                                >
                                  <span
                                    className="bq-theme-preview"
                                    style={{
                                      background: bg,
                                      borderColor: accent,
                                    }}
                                  >
                                    {isSelected && (
                                      <FiCheck
                                        size={18}
                                        color={
                                          isLightTheme(t)
                                            ? accent
                                            : "#ffffff"
                                        }
                                      />
                                    )}
                                  </span>
                                  <span className="bq-theme-info">
                                    {t.label || id}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* FONT */}
              {activeTab === "font" && (
                <div>
                  <h3 className="bq-custom-section-title">Typography</h3>
                  <p className="bq-custom-section-desc">
                    Choose your reading font
                  </p>
                  <div className="bq-font-list">
                    {fonts.map((f) => (
                      <button
                        key={f.id}
                        className={
                          "bq-font-card " +
                          (fontId === f.id ? "active" : "")
                        }
                        onClick={() => setFont(f.id)}
                      >
                        <span
                          className="bq-font-name"
                          style={{ fontFamily: f.family }}
                        >
                          {f.label}
                        </span>
                        <span
                          className="bq-font-sample"
                          style={{ fontFamily: f.family }}
                        >
                          Aa
                        </span>
                        {fontId === f.id && (
                          <FiCheck size={16} color="var(--accent)" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VISUAL */}
              {activeTab === "visual" && (
                <div>
                  <h3 className="bq-custom-section-title">Visual Style</h3>
                  <p className="bq-custom-section-desc">
                    Pick a card &amp; surface style
                  </p>
                  <div className="bq-visual-grid">
                    {styles.map((s) => {
                      const id = s.name || s.id;
                      return (
                        <button
                          key={id}
                          className={
                            "bq-visual-card " +
                            (styleId === id ? "active" : "")
                          }
                          onClick={() => setVisualStyle(id)}
                        >
                          <span
                            className={`bq-visual-preview bq-visual-${id}`}
                          />
                          <span className="bq-visual-label">
                            {s.label || id}
                          </span>
                          <span className="bq-visual-desc">
                            {s.description}
                          </span>
                          {styleId === id && (
                            <FiCheck
                              size={16}
                              color="var(--accent)"
                              style={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MOTION */}
              {activeTab === "motion" && (
                <div>
                  <h3 className="bq-custom-section-title">Motion</h3>
                  <p className="bq-custom-section-desc">
                    Control animation speed
                  </p>
                  <div className="bq-motion-list">
                    {motions.map((m) => (
                      <button
                        key={m.id}
                        className={
                          "bq-motion-card " +
                          (motionId === m.id ? "active" : "")
                        }
                        onClick={() => setMotion(m.id)}
                      >
                        <span
                          className={"bq-motion-dot bq-motion-" + m.id}
                        />
                        <span className="bq-motion-label">{m.label}</span>
                        {motionId === m.id && (
                          <FiCheck size={16} color="var(--accent)" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bq-custom-footer">
              <button className="bq-custom-reset" onClick={reset}>
                Reset to default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}