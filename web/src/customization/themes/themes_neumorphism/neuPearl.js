// src/customization/themes/themes_neumorphism/neuPearl.js
const neuPearl = {
  name: 'neu-pearl',
  label: 'Neu Pearl',

  primary: '#a8a29e',   // stone-400
  text: '#44403c',      // stone-700
  muted: '#78716c',     // stone-500
  
  bg: '#fafaf9',        // stone-50
  bgSurface: '#fafaf9',
  bgSubtle: '#f5f5f4',  // stone-100

  hex: {
    slate200: '#e7e5e4', slate300: '#d6d3d1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fafaf9, #fafaf9)",
    bookCoverSide: "linear-gradient(to bottom right, #fafaf9, #f5f5f4)",
    navigationDots: "#fafaf9"
  },
  textColors: { primary: "#44403c", secondary: "#78716c", highlight: "#a8a29e", badge: "#57534e", wishlistSaved: "#e11d48", wishlistDefault: "#78716c" },

  buttonColors: {
    primaryButton: { background: "#fafaf9", hoverBackground: "#f5f5f4", textColor: "#78716c" },
    secondaryButton: { background: "#fafaf9", borderColor: "#fafaf9", hoverBackground: "#f5f5f4", textColor: "#57534e" },
    wishlistButton: { savedBackground: "#fafaf9", savedBorderColor: "#fb7185", defaultBackground: "#fafaf9", defaultBorderColor: "#fafaf9", hoverBackground: "#f5f5f4" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#d6d3d1", navigationArrow: "#a8a29e", navigationArrowHover: "#78716c" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #dcdcda, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #dcdcda, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #dcdcda, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #dcdcda, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #dcdcda, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default neuPearl;