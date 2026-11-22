// src/customization/themes/themes_glassmorphism/glassAmber.js
const glassAmber = {
  name: 'glass-amber',
  label: 'Glass Amber',

  primary: '#f59e0b',   // amber-500
  text: '#78350f',      // amber-900
  muted: '#b45309',     // amber-700
  bg: '#fffbeb',        // amber-50
  bgSurface: 'rgba(255, 255, 255, 0.6)',
  bgSubtle: 'rgba(255, 255, 255, 0.3)',

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
    navigationDots: "rgba(255,255,255,0.5)"
  },
  textColors: { primary: "#78350f", secondary: "#b45309", highlight: "#f59e0b", badge: "#d97706", wishlistSaved: "#e11d48", wishlistDefault: "#b45309" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(251, 191, 36, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(217, 119, 6, 0.9), rgba(245, 158, 11, 0.9))", textColor: "#ffffff" },
    secondaryButton: { background: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)", textColor: "#b45309" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.1)", savedBorderColor: "rgba(225, 29, 72, 0.5)", defaultBackground: "rgba(255, 255, 255, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.8)", hoverBackground: "rgba(255, 255, 255, 0.8)" }
  },
  iconColors: { starFilled: "#d97706", starEmpty: "#cbd5e1", navigationArrow: "#f59e0b", navigationArrowHover: "#d97706" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(120, 53, 15, 0.15)",
    container: "0 8px 32px 0 rgba(120, 53, 15, 0.1)",
    button: "0 4px 16px 0 rgba(120, 53, 15, 0.1)",
    buttonHover: "0 8px 24px 0 rgba(120, 53, 15, 0.15)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default glassAmber;