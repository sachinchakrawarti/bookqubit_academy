// src/customization/themes/themes_clay/clayCharcoal.js
const clayCharcoal = {
  name: 'clay-charcoal',
  label: 'Clay Charcoal',

  primary: '#94a3b8',   // slate-400
  text: '#f8fafc',      // slate-50
  muted: '#cbd5e1',     // slate-300
  bg: '#334155',        // slate-700
  bgSurface: '#1e293b', // slate-800
  bgSubtle: '#0f172a',  // slate-900

  hex: {
    slate400: '#94a3b8', slate500: '#64748b',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: { section: "linear-gradient(to bottom, #334155, #1e293b)", bookCoverSide: "linear-gradient(to bottom right, #475569, #334155)", navigationDots: "#1e293b" },
  textColors: { primary: "#f8fafc", secondary: "#cbd5e1", highlight: "#94a3b8", badge: "#e2e8f0", wishlistSaved: "#fb7185", wishlistDefault: "#cbd5e1" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, #94a3b8, #64748b)", hoverBackground: "linear-gradient(135deg, #64748b, #475569)", textColor: "#0f172a" },
    secondaryButton: { background: "#1e293b", borderColor: "#0f172a", hoverBackground: "#334155", textColor: "#f8fafc" },
    wishlistButton: { savedBackground: "#4c0519", savedBorderColor: "#fb7185", defaultBackground: "#1e293b", defaultBorderColor: "#0f172a", hoverBackground: "#334155" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#475569", navigationArrow: "#94a3b8", navigationArrowHover: "#cbd5e1" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    // Dark clay uses deep, dark shadows and subtle light highlights
    book: "20px 20px 40px #0b111a, -20px -20px 40px #1b2532",
    container: "8px 8px 16px #0b111a, -8px -8px 16px #1b2532",
    button: "6px 6px 12px #0b111a, -6px -6px 12px #1b2532",
    buttonHover: "4px 4px 8px #0b111a, -4px -4px 8px #1b2532",
    navigationDotContainer: "2px 2px 4px #0b111a, -2px -2px 4px #1b2532"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #0b111a, inset -3px -3px 6px #1b2532",
  opacityOverlay: 0.2
};
export default clayCharcoal;