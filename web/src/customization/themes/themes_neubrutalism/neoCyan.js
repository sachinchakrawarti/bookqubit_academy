// src/customization/themes/themes_neubrutalism/neoCyan.js
const neoCyan = {
  name: 'neo-cyan',
  label: 'Neo Cyan',

  primary: '#06b6d4',   // cyan-500
  text: '#000000',      // pitch black
  muted: '#164e63',     // cyan-900
  bg: '#ecfeff',        // cyan-50
  bgSurface: '#ffffff', // pure white
  bgSubtle: '#a5f3fc',  // cyan-200

  hex: {
    cyan500: '#06b6d4', cyan600: '#0891b2',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #ecfeff, #cffafe)",
    bookCoverSide: "linear-gradient(to bottom right, #a5f3fc, #67e8f9)",
    navigationDots: "#ffffff"
  },
  textColors: { primary: "#000000", secondary: "#164e63", highlight: "#0891b2", badge: "#000000", wishlistSaved: "#e11d48", wishlistDefault: "#164e63" },

  buttonColors: {
    primaryButton: { background: "#06b6d4", hoverBackground: "#22d3ee", textColor: "#000000" },
    secondaryButton: { background: "#ffffff", borderColor: "#000000", hoverBackground: "#f0fdfa", textColor: "#000000" },
    wishlistButton: { savedBackground: "#ffe4e6", savedBorderColor: "#000000", defaultBackground: "#ffffff", defaultBorderColor: "#000000", hoverBackground: "#f1f5f9" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#000000", navigationArrow: "#000000", navigationArrowHover: "#0891b2" },

  // Thick borders, sharp corners
  border: { default: "4px", button: "4px", navigationDot: "4px" },
  
  // Hard, solid shadows with zero blur
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
export default neoCyan;