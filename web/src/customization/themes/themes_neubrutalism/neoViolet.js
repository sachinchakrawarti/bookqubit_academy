// src/customization/themes/themes_neubrutalism/neoViolet.js
const neoViolet = {
  name: 'neo-violet',
  label: 'Neo Violet',

  primary: '#8b5cf6',   // violet-500
  text: '#000000',
  muted: '#4c1d95',     // violet-900
  bg: '#f5f3ff',        // violet-50
  bgSurface: '#ffffff',
  bgSubtle: '#ddd6fe',  // violet-200

  hex: {
    violet500: '#8b5cf6', violet600: '#7c3aed',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #f5f3ff, #ede9fe)",
    bookCoverSide: "linear-gradient(to bottom right, #ddd6fe, #c4b5fd)",
    navigationDots: "#ffffff"
  },
  textColors: { primary: "#000000", secondary: "#4c1d95", highlight: "#7c3aed", badge: "#000000", wishlistSaved: "#e11d48", wishlistDefault: "#4c1d95" },

  buttonColors: {
    primaryButton: { background: "#8b5cf6", hoverBackground: "#a78bfa", textColor: "#000000" },
    secondaryButton: { background: "#ffffff", borderColor: "#000000", hoverBackground: "#f5f3ff", textColor: "#000000" },
    wishlistButton: { savedBackground: "#ffe4e6", savedBorderColor: "#000000", defaultBackground: "#ffffff", defaultBorderColor: "#000000", hoverBackground: "#f1f5f9" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#000000", navigationArrow: "#000000", navigationArrowHover: "#7c3aed" },

  border: { default: "4px", button: "4px", navigationDot: "4px" },
  shadow: {
    book: "8px 8px 0px 0px #000000",
    container: "6px 6px 0px 0px #000000",
    button: "4px 4px 0px 0px #000000",
    buttonHover: "2px 2px 0px 0px #000000",
    navigationDotContainer: "3px 3px 0px 0px #000000"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "none",
  opacityOverlay: 0.1
};
export default neoViolet;