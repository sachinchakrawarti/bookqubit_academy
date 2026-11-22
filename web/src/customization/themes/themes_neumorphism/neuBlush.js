// src/customization/themes/themes_neumorphism/neuBlush.js
const neuBlush = {
  name: 'neu-blush',
  label: 'Neu Blush',

  primary: '#f43f5e',   // rose-500
  text: '#881337',      // rose-900
  muted: '#be123c',     // rose-700
  
  // Neumorphism requires the background and surface to be the exact same color
  bg: '#fff1f2',        
  bgSurface: '#fff1f2', 
  bgSubtle: '#ffe4e6',  

  hex: {
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fff1f2, #fff1f2)",
    bookCoverSide: "linear-gradient(to bottom right, #fff1f2, #ffe4e6)",
    navigationDots: "#fff1f2"
  },
  textColors: { primary: "#881337", secondary: "#be123c", highlight: "#f43f5e", badge: "#e11d48", wishlistSaved: "#e11d48", wishlistDefault: "#be123c" },

  buttonColors: {
    primaryButton: { background: "#fff1f2", hoverBackground: "#ffe4e6", textColor: "#f43f5e" },
    secondaryButton: { background: "#fff1f2", borderColor: "#fff1f2", hoverBackground: "#ffe4e6", textColor: "#be123c" },
    wishlistButton: { savedBackground: "#fff1f2", savedBorderColor: "#f43f5e", defaultBackground: "#fff1f2", defaultBorderColor: "#fff1f2", hoverBackground: "#ffe4e6" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#fda4af", navigationArrow: "#f43f5e", navigationArrowHover: "#e11d48" },

  // High border radius for soft shapes
  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  
  // Neumorphic dual shadows
  shadow: {
    book: "20px 20px 40px #d9cdcf, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #d9cdcf, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #d9cdcf, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #d9cdcf, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #d9cdcf, -2px -2px 4px #ffffff"
  },
  
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default neuBlush;