// src/customization/themes/themes_glassmorphism/glassRose.js
const glassRose = {
  name: 'glass-rose',
  label: 'Glass Rose',

  primary: '#f43f5e',   // rose-500
  text: '#881337',      // rose-900
  muted: '#be123c',     // rose-700
  bg: '#fff1f2',        // rose-50
  bgSurface: 'rgba(255, 255, 255, 0.6)',
  bgSubtle: 'rgba(255, 255, 255, 0.3)',

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
    navigationDots: "rgba(255,255,255,0.5)"
  },
  textColors: { primary: "#881337", secondary: "#be123c", highlight: "#f43f5e", badge: "#e11d48", wishlistSaved: "#e11d48", wishlistDefault: "#be123c" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(244, 63, 94, 0.9), rgba(251, 113, 133, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(225, 29, 72, 0.9), rgba(244, 63, 94, 0.9))", textColor: "#ffffff" },
    secondaryButton: { background: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)", textColor: "#be123c" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.1)", savedBorderColor: "rgba(225, 29, 72, 0.5)", defaultBackground: "rgba(255, 255, 255, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#cbd5e1", navigationArrow: "#f43f5e", navigationArrowHover: "#e11d48" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(136, 19, 55, 0.15)",
    container: "0 8px 32px 0 rgba(136, 19, 55, 0.1)",
    button: "0 4px 16px 0 rgba(136, 19, 55, 0.1)",
    buttonHover: "0 8px 24px 0 rgba(136, 19, 55, 0.15)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default glassRose;