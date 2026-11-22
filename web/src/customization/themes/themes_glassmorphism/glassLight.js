// src/customization/themes/themes_glassmorphism/glassLight.js
const glassLight = {
  name: 'glass-light',
  label: 'Glass Light',

  primary: '#0ea5e9',   // sky-500
  text: '#0f172a',      // slate-900
  muted: '#64748b',     // slate-500
  bg: '#f0f9ff',        // sky-50
  bgSurface: 'rgba(255, 255, 255, 0.6)', // Frosted glass
  bgSubtle: 'rgba(255, 255, 255, 0.3)',

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
    navigationDots: "rgba(255,255,255,0.5)"
  },
  textColors: { primary: "#0f172a", secondary: "#64748b", highlight: "#0ea5e9", badge: "#0284c7", wishlistSaved: "#e11d48", wishlistDefault: "#64748b" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(56, 189, 248, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(2, 132, 199, 0.9), rgba(14, 165, 233, 0.9))", textColor: "#ffffff" },
    secondaryButton: { background: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)", textColor: "#0ea5e9" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.1)", savedBorderColor: "rgba(225, 29, 72, 0.5)", defaultBackground: "rgba(255, 255, 255, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#cbd5e1", navigationArrow: "#0ea5e9", navigationArrowHover: "#0284c7" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    container: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    button: "0 4px 16px 0 rgba(31, 38, 135, 0.1)",
    buttonHover: "0 8px 24px 0 rgba(31, 38, 135, 0.15)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default glassLight;