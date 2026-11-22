// src/customization/themes/themes_neumorphism/neuMint.js
const neuMint = {
  name: 'neu-mint',
  label: 'Neu Mint',

  primary: '#10b981',   // emerald-500
  text: '#064e3b',      // emerald-900
  muted: '#047857',     // emerald-700
  
  bg: '#ecfdf5',        // emerald-50
  bgSurface: '#ecfdf5',
  bgSubtle: '#d1fae5',  // emerald-100

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #ecfdf5, #ecfdf5)",
    bookCoverSide: "linear-gradient(to bottom right, #ecfdf5, #d1fae5)",
    navigationDots: "#ecfdf5"
  },
  textColors: { primary: "#064e3b", secondary: "#047857", highlight: "#10b981", badge: "#059669", wishlistSaved: "#e11d48", wishlistDefault: "#047857" },

  buttonColors: {
    primaryButton: { background: "#ecfdf5", hoverBackground: "#d1fae5", textColor: "#10b981" },
    secondaryButton: { background: "#ecfdf5", borderColor: "#ecfdf5", hoverBackground: "#d1fae5", textColor: "#047857" },
    wishlistButton: { savedBackground: "#ecfdf5", savedBorderColor: "#fb7185", defaultBackground: "#ecfdf5", defaultBorderColor: "#ecfdf5", hoverBackground: "#d1fae5" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#a7f3d0", navigationArrow: "#10b981", navigationArrowHover: "#059669" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #c9d7d2, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #c9d7d2, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #c9d7d2, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #c9d7d2, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #c9d7d2, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default neuMint;