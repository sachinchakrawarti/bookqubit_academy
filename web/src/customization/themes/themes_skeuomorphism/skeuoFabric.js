// src/customization/themes/themes_skeuomorphism/skeuoFabric.js
const skeuoFabric = {
  name: 'skeuo-fabric',
  label: 'Skeuo Fabric',

  primary: '#4338ca',   // indigo-700
  text: '#1e1b4b',      // indigo-950
  muted: '#3730a3',     // indigo-800
  
  bg: '#e0e7ff',        // indigo-100 (light fabric)
  bgSurface: '#c7d2fe', // indigo-200 (woven panels)
  bgSubtle: '#eef2ff',  // indigo-50

  hex: {
    slate200: '#c7d2fe', slate300: '#a5b4fc', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Crosshatch woven fabric pattern
    section: "repeating-linear-gradient(45deg, #e0e7ff, #e0e7ff 2px, #eef2ff 2px, #eef2ff 4px), repeating-linear-gradient(-45deg, #e0e7ff, #e0e7ff 2px, #eef2ff 2px, #eef2ff 4px)",
    bookCoverSide: "linear-gradient(to bottom right, #c7d2fe, #818cf8)",
    navigationDots: "#e0e7ff"
  },
  textColors: { primary: "#1e1b4b", secondary: "#3730a3", highlight: "#4338ca", badge: "#312e81", wishlistSaved: "#e11d48", wishlistDefault: "#3730a3" },

  buttonColors: {
    primaryButton: { 
      background: "linear-gradient(to bottom, #a5b4fc, #818cf8)", 
      hoverBackground: "linear-gradient(to bottom, #c7d2fe, #a5b4fc)", 
      textColor: "#1e1b4b" 
    },
    secondaryButton: { 
      background: "#e0e7ff", 
      borderColor: "#a5b4fc", 
      hoverBackground: "#eef2ff", 
      textColor: "#3730a3" 
    },
    wishlistButton: { savedBackground: "#e0e7ff", savedBorderColor: "#e11d48", defaultBackground: "#c7d2fe", defaultBorderColor: "#a5b4fc", hoverBackground: "#eef2ff" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#818cf8", navigationArrow: "#4338ca", navigationArrowHover: "#312e81" },

  border: { default: "12px", button: "8px", navigationDot: "9999px" },
  
  // Fabric feels soft and pillowy
  shadow: {
    book: "0px 8px 16px rgba(30, 27, 75, 0.2), inset 0px 2px 4px rgba(255,255,255,0.6)",
    container: "0px 4px 8px rgba(30, 27, 75, 0.15), inset 0px 1px 3px rgba(255,255,255,0.5)",
    button: "0px 3px 6px rgba(30, 27, 75, 0.2), inset 0px 1px 2px rgba(255,255,255,0.6)",
    buttonHover: "0px 1px 3px rgba(30, 27, 75, 0.2), inset 0px 1px 1px rgba(255,255,255,0.6)",
    navigationDotContainer: "0px 2px 4px rgba(30, 27, 75, 0.2)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 1px 3px rgba(30, 27, 75, 0.2)",
  opacityOverlay: 0.2
};
export default skeuoFabric;