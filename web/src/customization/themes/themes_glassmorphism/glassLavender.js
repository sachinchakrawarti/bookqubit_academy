// src/customization/themes/themes_glassmorphism/glassLavender.js
const glassLavender = {
  name: 'glass-lavender',
  label: 'Glass Lavender',

  primary: '#a855f7',   // purple-500
  text: '#4c1d95',      // violet-900
  muted: '#6d28d9',     // violet-700
  bg: '#faf5ff',        // purple-50
  bgSurface: 'rgba(255, 255, 255, 0.6)',
  bgSubtle: 'rgba(255, 255, 255, 0.3)',

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
    navigationDots: "rgba(255,255,255,0.5)"
  },
  textColors: { primary: "#4c1d95", secondary: "#6d28d9", highlight: "#a855f7", badge: "#7e22ce", wishlistSaved: "#e11d48", wishlistDefault: "#6d28d9" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(192, 132, 252, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))", textColor: "#ffffff" },
    secondaryButton: { background: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)", textColor: "#6d28d9" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.1)", savedBorderColor: "rgba(225, 29, 72, 0.5)", defaultBackground: "rgba(255, 255, 255, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#cbd5e1", navigationArrow: "#a855f7", navigationArrowHover: "#7e22ce" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(76, 29, 149, 0.15)",
    container: "0 8px 32px 0 rgba(76, 29, 149, 0.1)",
    button: "0 4px 16px 0 rgba(76, 29, 149, 0.1)",
    buttonHover: "0 8px 24px 0 rgba(76, 29, 149, 0.15)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default glassLavender;