// src/customization/themes/themes_neumorphism/neuMist.js
const neuMist = {
  name: 'neu-mist',
  label: 'Neu Mist',

  primary: '#64748b',   // slate-500
  text: '#1e293b',      // slate-800
  muted: '#475569',     // slate-600
  
  bg: '#f1f5f9',        // slate-100
  bgSurface: '#f1f5f9',
  bgSubtle: '#e2e8f0',  // slate-200

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #f1f5f9, #f1f5f9)",
    bookCoverSide: "linear-gradient(to bottom right, #f1f5f9, #e2e8f0)",
    navigationDots: "#f1f5f9"
  },
  textColors: { primary: "#1e293b", secondary: "#475569", highlight: "#64748b", badge: "#334155", wishlistSaved: "#e11d48", wishlistDefault: "#475569" },

  buttonColors: {
    primaryButton: { background: "#f1f5f9", hoverBackground: "#e2e8f0", textColor: "#64748b" },
    secondaryButton: { background: "#f1f5f9", borderColor: "#f1f5f9", hoverBackground: "#e2e8f0", textColor: "#475569" },
    wishlistButton: { savedBackground: "#f1f5f9", savedBorderColor: "#fb7185", defaultBackground: "#f1f5f9", defaultBorderColor: "#f1f5f9", hoverBackground: "#e2e8f0" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#cbd5e1", navigationArrow: "#64748b", navigationArrowHover: "#334155" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #cdd3da, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #cdd3da, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #cdd3da, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #cdd3da, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #cdd3da, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default neuMist;