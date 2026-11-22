// src/customization/themes/themes_glassmorphism/glassSlate.js
const glassSlate = {
  name: 'glass-slate',
  label: 'Glass Slate',

  primary: '#64748b',   // slate-500
  text: '#0f172a',      // slate-900
  muted: '#475569',     // slate-600
  bg: '#f8fafc',        // slate-50
  bgSurface: 'rgba(255, 255, 255, 0.6)',
  bgSubtle: 'rgba(255, 255, 255, 0.3)',

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
    navigationDots: "rgba(255,255,255,0.5)"
  },
  textColors: { primary: "#0f172a", secondary: "#475569", highlight: "#64748b", badge: "#334155", wishlistSaved: "#e11d48", wishlistDefault: "#475569" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(100, 116, 139, 0.9), rgba(148, 163, 184, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(71, 85, 105, 0.9), rgba(100, 116, 139, 0.9))", textColor: "#ffffff" },
    secondaryButton: { background: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)", textColor: "#334155" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.1)", savedBorderColor: "rgba(225, 29, 72, 0.5)", defaultBackground: "rgba(255, 255, 255, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#cbd5e1", navigationArrow: "#64748b", navigationArrowHover: "#334155" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(15, 23, 42, 0.1)",
    container: "0 8px 32px 0 rgba(15, 23, 42, 0.08)",
    button: "0 4px 16px 0 rgba(15, 23, 42, 0.08)",
    buttonHover: "0 8px 24px 0 rgba(15, 23, 42, 0.12)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default glassSlate;