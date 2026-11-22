// src/customization/themes/themes_skeuomorphism/skeuoPaper.js
const skeuoPaper = {
  name: 'skeuo-paper',
  label: 'Skeuo Paper',

  primary: '#0369a1',   // sky-700 (ink color)
  text: '#0f172a',      // slate-900
  muted: '#475569',     // slate-600
  
  bg: '#fefce8',        // yellow-50 (warm parchment)
  bgSurface: '#ffffff', // pure white paper
  bgSubtle: '#fef9c3',  // yellow-100

  hex: {
    slate200: '#e5e7eb', slate300: '#d1d5db', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Subtle paper texture
    section: "linear-gradient(to bottom, #fefce8, #fef9c3)",
    bookCoverSide: "linear-gradient(to bottom right, #ffffff, #fefce8)",
    navigationDots: "#fefce8"
  },
  textColors: { primary: "#0f172a", secondary: "#475569", highlight: "#0369a1", badge: "#0284c7", wishlistSaved: "#e11d48", wishlistDefault: "#475569" },

  buttonColors: {
    primaryButton: { 
      background: "#fefce8", 
      hoverBackground: "#fef9c3", 
      textColor: "#0369a1" 
    },
    secondaryButton: { 
      background: "#ffffff", 
      borderColor: "#e5e7eb", 
      hoverBackground: "#fefce8", 
      textColor: "#475569" 
    },
    wishlistButton: { savedBackground: "#fefce8", savedBorderColor: "#e11d48", defaultBackground: "#ffffff", defaultBorderColor: "#e5e7eb", hoverBackground: "#fef9c3" }
  },
  iconColors: { starFilled: "#f59e0b", starEmpty: "#d1d5db", navigationArrow: "#0369a1", navigationArrowHover: "#0284c7" },

  border: { default: "4px", button: "4px", navigationDot: "9999px" },
  
  // Paper looks flat but has soft drop shadows where it lifts off the desk
  shadow: {
    book: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
    container: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 1px 2px -1px rgba(0, 0, 0, 0.06)",
    button: "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
    buttonHover: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
    navigationDotContainer: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  opacityOverlay: 0.1
};
export default skeuoPaper;