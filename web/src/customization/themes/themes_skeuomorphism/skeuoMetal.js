// src/customization/themes/themes_skeuomorphism/skeuoMetal.js
const skeuoMetal = {
  name: 'skeuo-metal',
  label: 'Skeuo Metal',

  primary: '#475569',   // slate-600 (dark metal)
  text: '#0f172a',      // slate-900
  muted: '#334155',     // slate-700
  
  bg: '#e2e8f0',        // slate-200 (base metal)
  bgSurface: '#cbd5e1', // slate-300 (brushed metal panels)
  bgSubtle: '#f1f5f9',  // slate-100

  hex: {
    slate200: '#cbd5e1', slate300: '#94a3b8', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    // Brushed metal gradient
    section: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)",
    bookCoverSide: "linear-gradient(to bottom right, #f1f5f9, #94a3b8)",
    navigationDots: "#e2e8f0"
  },
  textColors: { primary: "#0f172a", secondary: "#334155", highlight: "#475569", badge: "#1e293b", wishlistSaved: "#e11d48", wishlistDefault: "#334155" },

  buttonColors: {
    primaryButton: { 
      background: "linear-gradient(to bottom, #cbd5e1, #94a3b8)", 
      hoverBackground: "linear-gradient(to bottom, #e2e8f0, #cbd5e1)", 
      textColor: "#0f172a" 
    },
    secondaryButton: { 
      background: "#e2e8f0", 
      borderColor: "#94a3b8", 
      hoverBackground: "#f1f5f9", 
      textColor: "#334155" 
    },
    wishlistButton: { savedBackground: "#e2e8f0", savedBorderColor: "#e11d48", defaultBackground: "#cbd5e1", defaultBorderColor: "#94a3b8", hoverBackground: "#e2e8f0" }
  },
  iconColors: { starFilled: "#f59e0b", starEmpty: "#64748b", navigationArrow: "#475569", navigationArrowHover: "#0f172a" },

  border: { default: "6px", button: "4px", navigationDot: "9999px" },
  
  // Metal looks highly polished; strong inset and drop shadows
  shadow: {
    book: "0px 10px 20px rgba(15, 23, 42, 0.2), inset 0px 2px 5px rgba(255,255,255,0.7), inset 0px -2px 5px rgba(0,0,0,0.1)",
    container: "0px 6px 12px rgba(15, 23, 42, 0.15), inset 0px 1px 3px rgba(255,255,255,0.8), inset 0px -1px 3px rgba(0,0,0,0.1)",
    button: "0px 4px 8px rgba(15, 23, 42, 0.2), inset 0px 1px 2px rgba(255,255,255,0.8), inset 0px -1px 2px rgba(0,0,0,0.2)",
    buttonHover: "0px 2px 4px rgba(15, 23, 42, 0.2), inset 0px 1px 1px rgba(255,255,255,0.8), inset 0px -1px 1px rgba(0,0,0,0.2)",
    navigationDotContainer: "0px 2px 4px rgba(15, 23, 42, 0.2)"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.4), inset 0px 2px 4px rgba(0,0,0,0.1)",
  opacityOverlay: 0.2
};
export default skeuoMetal;