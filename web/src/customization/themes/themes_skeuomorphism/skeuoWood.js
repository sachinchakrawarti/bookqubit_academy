// src/customization/themes/themes_skeuomorphism/skeuoWood.js
const skeuoWood = {
  name: 'skeuo-wood',
  label: 'Skeuo Wood',

  primary: '#92400e',   // amber-800 (wood grain)
  text: '#451a03',      // amber-950
  muted: '#78350f',     // amber-900
  
  bg: '#fef3c7',        // amber-100 (background)
  bgSurface: '#fde68a', // amber-200 (wooden panels)
  bgSubtle: '#fcd34d',  // amber-300

  hex: {
    slate200: '#fcd34d', slate300: '#fbbf24', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Wood grain texture
    section: "repeating-linear-gradient(to right, #fde68a, #fde68a 2px, #fef3c7 2px, #fef3c7 8px)",
    bookCoverSide: "linear-gradient(to bottom right, #fcd34d, #f59e0b)",
    navigationDots: "#fde68a"
  },
  textColors: { primary: "#451a03", secondary: "#78350f", highlight: "#92400e", badge: "#78350f", wishlistSaved: "#e11d48", wishlistDefault: "#78350f" },

  buttonColors: {
    primaryButton: { 
      background: "linear-gradient(to bottom, #fcd34d, #f59e0b)", 
      hoverBackground: "linear-gradient(to bottom, #fde68a, #fbbf24)", 
      textColor: "#451a03" 
    },
    secondaryButton: { 
      background: "#fde68a", 
      borderColor: "#d97706", 
      hoverBackground: "#fcd34d", 
      textColor: "#78350f" 
    },
    wishlistButton: { savedBackground: "#fef3c7", savedBorderColor: "#e11d48", defaultBackground: "#fde68a", defaultBorderColor: "#d97706", hoverBackground: "#fcd34d" }
  },
  iconColors: { starFilled: "#d97706", starEmpty: "#d97706", navigationArrow: "#92400e", navigationArrowHover: "#78350f" },

  border: { default: "8px", button: "6px", navigationDot: "9999px" },
  
  // Wooden panels feel slightly raised
  shadow: {
    book: "0px 10px 20px rgba(69, 26, 3, 0.3), inset 0px 2px 4px rgba(255,255,255,0.5)",
    container: "0px 6px 12px rgba(69, 26, 3, 0.2), inset 0px 1px 3px rgba(255,255,255,0.5)",
    button: "0px 4px 8px rgba(69, 26, 3, 0.3), inset 0px 1px 2px rgba(255,255,255,0.4)",
    buttonHover: "0px 2px 4px rgba(69, 26, 3, 0.3), inset 0px 1px 1px rgba(255,255,255,0.4)",
    navigationDotContainer: "0px 2px 4px rgba(69, 26, 3, 0.3)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 2px 4px rgba(69, 26, 3, 0.4)",
  opacityOverlay: 0.2
};
export default skeuoWood;