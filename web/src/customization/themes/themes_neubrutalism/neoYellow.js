// src/customization/themes/themes_neubrutalism/neoYellow.js
const neoYellow = {
  name: 'neo-yellow',
  label: 'Neo Yellow',

  primary: '#eab308',   // yellow-500
  text: '#000000',
  muted: '#713f12',     // yellow-900
  bg: '#fefce8',        // yellow-50
  bgSurface: '#ffffff',
  bgSubtle: '#fef08a',  // yellow-200

  hex: {
    yellow500: '#eab308', yellow600: '#ca8a04',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fefce8, #fef9c3)",
    bookCoverSide: "linear-gradient(to bottom right, #fef08a, #fde047)",
    navigationDots: "#ffffff"
  },
  textColors: { primary: "#000000", secondary: "#713f12", highlight: "#ca8a04", badge: "#000000", wishlistSaved: "#e11d48", wishlistDefault: "#713f12" },

  buttonColors: {
    primaryButton: { background: "#eab308", hoverBackground: "#facc15", textColor: "#000000" },
    secondaryButton: { background: "#ffffff", borderColor: "#000000", hoverBackground: "#fefce8", textColor: "#000000" },
    wishlistButton: { savedBackground: "#ffe4e6", savedBorderColor: "#000000", defaultBackground: "#ffffff", defaultBorderColor: "#000000", hoverBackground: "#f1f5f9" }
  },
  iconColors: { starFilled: "#d97706", starEmpty: "#000000", navigationArrow: "#000000", navigationArrowHover: "#ca8a04" },

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
export default neoYellow;