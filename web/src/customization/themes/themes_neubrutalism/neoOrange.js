// src/customization/themes/themes_neubrutalism/neoOrange.js
const neoOrange = {
  name: 'neo-orange',
  label: 'Neo Orange',

  primary: '#f97316',   // orange-500
  text: '#000000',
  muted: '#7c2d12',     // orange-900
  bg: '#fff7ed',        // orange-50
  bgSurface: '#ffffff',
  bgSubtle: '#fed7aa',  // orange-200

  hex: {
    orange500: '#f97316', orange600: '#ea580c',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fff7ed, #ffedd5)",
    bookCoverSide: "linear-gradient(to bottom right, #fed7aa, #fdba74)",
    navigationDots: "#ffffff"
  },
  textColors: { primary: "#000000", secondary: "#7c2d12", highlight: "#ea580c", badge: "#000000", wishlistSaved: "#e11d48", wishlistDefault: "#7c2d12" },

  buttonColors: {
    primaryButton: { background: "#f97316", hoverBackground: "#fb923c", textColor: "#000000" },
    secondaryButton: { background: "#ffffff", borderColor: "#000000", hoverBackground: "#fff7ed", textColor: "#000000" },
    wishlistButton: { savedBackground: "#ffe4e6", savedBorderColor: "#000000", defaultBackground: "#ffffff", defaultBorderColor: "#000000", hoverBackground: "#f1f5f9" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#000000", navigationArrow: "#000000", navigationArrowHover: "#ea580c" },

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
export default neoOrange;