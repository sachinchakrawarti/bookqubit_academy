// src/customization/themes/themes_skeuomorphism/skeuoSlate.js
const skeuoSlate = {
  name: 'skeuo-slate',
  label: 'Skeuo Slate',

  primary: '#57534e',   // stone-600
  text: '#1c1917',      // stone-900
  muted: '#44403c',     // stone-700
  
  bg: '#e7e5e4',        // stone-200 (slate background)
  bgSurface: '#d6d3d1', // stone-300 (stone panels)
  bgSubtle: '#f5f5f4',  // stone-100

  hex: {
    slate200: '#d6d3d1', slate300: '#a8a29e', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Rough stone texture
    section: "linear-gradient(to bottom, #e7e5e4, #d6d3d1)",
    bookCoverSide: "linear-gradient(to bottom right, #f5f5f4, #a8a29e)",
    navigationDots: "#e7e5e4"
  },
  textColors: { primary: "#1c1917", secondary: "#44403c", highlight: "#57534e", badge: "#292524", wishlistSaved: "#e11d48", wishlistDefault: "#44403c" },

  buttonColors: {
    primaryButton: { 
      background: "linear-gradient(to bottom, #d6d3d1, #a8a29e)", 
      hoverBackground: "linear-gradient(to bottom, #e7e5e4, #d6d3d1)", 
      textColor: "#1c1917" 
    },
    secondaryButton: { 
      background: "#e7e5e4", 
      borderColor: "#a8a29e", 
      hoverBackground: "#f5f5f4", 
      textColor: "#44403c" 
    },
    wishlistButton: { savedBackground: "#e7e5e4", savedBorderColor: "#e11d48", defaultBackground: "#d6d3d1", defaultBorderColor: "#a8a29e", hoverBackground: "#f5f5f4" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#a8a29e", navigationArrow: "#57534e", navigationArrowHover: "#1c1917" },

  border: { default: "8px", button: "6px", navigationDot: "9999px" },
  
  // Slate is heavy and deeply inset
  shadow: {
    book: "0px 10px 20px rgba(28, 25, 23, 0.3), inset 0px 3px 6px rgba(255,255,255,0.4), inset 0px -2px 4px rgba(0,0,0,0.1)",
    container: "0px 6px 12px rgba(28, 25, 23, 0.2), inset 0px 2px 4px rgba(255,255,255,0.4), inset 0px -1px 2px rgba(0,0,0,0.1)",
    button: "0px 4px 8px rgba(28, 25, 23, 0.3), inset 0px 1px 2px rgba(255,255,255,0.4), inset 0px -1px 2px rgba(0,0,0,0.2)",
    buttonHover: "0px 2px 4px rgba(28, 25, 23, 0.3), inset 0px 1px 1px rgba(255,255,255,0.4), inset 0px -1px 1px rgba(0,0,0,0.2)",
    navigationDotContainer: "0px 2px 4px rgba(28, 25, 23, 0.3)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 2px 4px rgba(28, 25, 23, 0.3)",
  opacityOverlay: 0.2
};
export default skeuoSlate;