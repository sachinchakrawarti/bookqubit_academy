// src/customization/themes/themes_neubrutalism/neoPink.js
const neoPink = {
  name: 'neo-pink',
  label: 'Neo Pink',

  primary: '#ec4899',   // pink-500
  text: '#000000',
  muted: '#831843',     // pink-900
  bg: '#fdf2f8',        // pink-50
  bgSurface: '#ffffff',
  bgSubtle: '#fbcfe8',  // pink-200

  hex: {
    pink500: '#ec4899', pink600: '#db2777',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fdf2f8, #fce7f3)",
    bookCoverSide: "linear-gradient(to bottom right, #fbcfe8, #f9a8d4)",
    navigationDots: "#ffffff"
  },
  textColors: { primary: "#000000", secondary: "#831843", highlight: "#db2777", badge: "#000000", wishlistSaved: "#e11d48", wishlistDefault: "#831843" },

  buttonColors: {
    primaryButton: { background: "#ec4899", hoverBackground: "#f472b6", textColor: "#000000" },
    secondaryButton: { background: "#ffffff", borderColor: "#000000", hoverBackground: "#fdf2f8", textColor: "#000000" },
    wishlistButton: { savedBackground: "#ffe4e6", savedBorderColor: "#000000", defaultBackground: "#ffffff", defaultBorderColor: "#000000", hoverBackground: "#f1f5f9" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#000000", navigationArrow: "#000000", navigationArrowHover: "#db2777" },

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
export default neoPink;