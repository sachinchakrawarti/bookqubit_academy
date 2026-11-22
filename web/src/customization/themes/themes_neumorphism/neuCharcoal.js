// src/customization/themes/themes_neumorphism/neuCharcoal.js
const neuCharcoal = {
  name: 'neu-charcoal',
  label: 'Neu Charcoal',

  primary: '#64748b',   // slate-500
  text: '#f8fafc',      // slate-50
  muted: '#cbd5e1',     // slate-300
  
  bg: '#1e293b',        // slate-800
  bgSurface: '#1e293b',
  bgSubtle: '#334155',  // slate-700

  hex: {
    slate200: '#334155', slate300: '#475569', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #1e293b, #1e293b)",
    bookCoverSide: "linear-gradient(to bottom right, #1e293b, #334155)",
    navigationDots: "#1e293b"
  },
  textColors: { primary: "#f8fafc", secondary: "#cbd5e1", highlight: "#94a3b8", badge: "#e2e8f0", wishlistSaved: "#fb7185", wishlistDefault: "#cbd5e1" },

  buttonColors: {
    primaryButton: { background: "#1e293b", hoverBackground: "#334155", textColor: "#f8fafc" },
    secondaryButton: { background: "#1e293b", borderColor: "#1e293b", hoverBackground: "#334155", textColor: "#cbd5e1" },
    wishlistButton: { savedBackground: "#1e293b", savedBorderColor: "#fb7185", defaultBackground: "#1e293b", defaultBorderColor: "#1e293b", hoverBackground: "#334155" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#475569", navigationArrow: "#94a3b8", navigationArrowHover: "#cbd5e1" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  
  // Neumorphic shadows for dark mode (lighter top-left, darker bottom-right)
  shadow: {
    book: "20px 20px 40px #141d27, -20px -20px 40px #28354b",
    container: "8px 8px 16px #141d27, -8px -8px 16px #28354b",
    button: "6px 6px 12px #141d27, -6px -6px 12px #28354b",
    buttonHover: "4px 4px 8px #141d27, -4px -4px 8px #28354b",
    navigationDotContainer: "2px 2px 4px #141d27, -2px -2px 4px #28354b"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
  opacityOverlay: 0.2
};
export default neuCharcoal;