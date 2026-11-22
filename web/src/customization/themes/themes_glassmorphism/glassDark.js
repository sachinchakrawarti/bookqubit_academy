// src/customization/themes/themes_glassmorphism/glassDark.js
const glassDark = {
  name: 'glass-dark',
  label: 'Glass Dark',

  primary: '#38bdf8',   // sky-400
  text: '#f8fafc',      // slate-50
  muted: '#94a3b8',     // slate-400
  bg: '#0f172a',        // slate-900
  bgSurface: 'rgba(30, 41, 59, 0.6)', // Dark frosted glass
  bgSubtle: 'rgba(30, 41, 59, 0.3)',

  hex: {
    slate200: '#334155', slate300: '#475569', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    bookCoverSide: "linear-gradient(to bottom right, rgba(30,41,59,0.8), rgba(15,23,42,0.4))",
    navigationDots: "rgba(30,41,59,0.5)"
  },
  textColors: { primary: "#f8fafc", secondary: "#94a3b8", highlight: "#38bdf8", badge: "#0ea5e9", wishlistSaved: "#fb7185", wishlistDefault: "#94a3b8" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, rgba(56, 189, 248, 0.9), rgba(14, 165, 233, 0.9))", hoverBackground: "linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(2, 132, 199, 0.9))", textColor: "#0f172a" },
    secondaryButton: { background: "rgba(30, 41, 59, 0.5)", borderColor: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(30, 41, 59, 0.8)", textColor: "#38bdf8" },
    wishlistButton: { savedBackground: "rgba(225, 29, 72, 0.2)", savedBorderColor: "rgba(251, 113, 133, 0.5)", defaultBackground: "rgba(30, 41, 59, 0.5)", defaultBorderColor: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(30, 41, 59, 0.8)" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#475569", navigationArrow: "#38bdf8", navigationArrowHover: "#7dd3fc" },

  border: { default: "16px", button: "12px", navigationDot: "9999px" },
  shadow: {
    book: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
    container: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    button: "0 4px 16px 0 rgba(0, 0, 0, 0.3)",
    buttonHover: "0 8px 24px 0 rgba(0, 0, 0, 0.4)",
    navigationDotContainer: "0 4px 16px 0 rgba(0, 0, 0, 0.2)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
  opacityOverlay: 0.2
};
export default glassDark;