// src/customization/themes/themes_skeuomorphism/skeuoLeather.js
const skeuoLeather = {
  name: 'skeuo-leather',
  label: 'Skeuo Leather',

  primary: '#78350f',   // amber-900 (dark leather)
  text: '#451a03',      // amber-950
  muted: '#92400e',     // amber-800
  
  bg: '#d97706',        // amber-600 (base leather color)
  bgSurface: '#b45309', // amber-700 (darker panel)
  bgSubtle: '#f59e0b',  // amber-500 (lighter highlight)

  hex: {
    slate200: '#fcd34d', slate300: '#fbbf24', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Creates a textured leather look using repeating gradients
    section: "repeating-linear-gradient(45deg, #d97706, #d97706 10px, #b45309 10px, #b45309 20px)",
    bookCoverSide: "linear-gradient(to bottom right, #b45309, #78350f)",
    navigationDots: "#d97706"
  },
  textColors: { primary: "#451a03", secondary: "#92400e", highlight: "#fbbf24", badge: "#78350f", wishlistSaved: "#e11d48", wishlistDefault: "#92400e" },

  buttonColors: {
    primaryButton: { 
      background: "linear-gradient(to bottom, #f59e0b, #d97706)", 
      hoverBackground: "linear-gradient(to bottom, #fbbf24, #f59e0b)", 
      textColor: "#451a03" 
    },
    secondaryButton: { 
      background: "#b45309", 
      borderColor: "#78350f", 
      hoverBackground: "#92400e", 
      textColor: "#fcd34d" 
    },
    wishlistButton: { savedBackground: "#78350f", savedBorderColor: "#fbbf24", defaultBackground: "#b45309", defaultBorderColor: "#78350f", hoverBackground: "#92400e" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#78350f", navigationArrow: "#fbbf24", navigationArrowHover: "#fcd34d" },

  // Mostly sharp corners, slight rounding
  border: { default: "8px", button: "6px", navigationDot: "9999px" },
  
  // Inset shadow for carved leather, drop shadow for raised elements
  shadow: {
    book: "inset 0px 4px 10px rgba(0,0,0,0.5), 0px 10px 20px rgba(0,0,0,0.4)",
    container: "inset 0px 3px 8px rgba(0,0,0,0.4), 0px 6px 12px rgba(0,0,0,0.3)",
    button: "inset 0px 2px 4px rgba(255,255,255,0.2), 0px 4px 8px rgba(0,0,0,0.5)",
    buttonHover: "inset 0px 1px 2px rgba(255,255,255,0.2), 0px 2px 4px rgba(0,0,0,0.5)",
    navigationDotContainer: "0px 2px 4px rgba(0,0,0,0.5)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 2px 4px rgba(0,0,0,0.6)",
  opacityOverlay: 0.4
};
export default skeuoLeather;