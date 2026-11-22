// src/customization/themes/themes_clay/clayBlush.js
const clayBlush = {
  name: 'clay-blush',
  label: 'Clay Blush',

  primary: '#fb7185',   // rose-400
  text: '#881337',      // rose-900
  muted: '#9f1239',     // rose-800
  bg: '#fff1f2',        // rose-50
  bgSurface: '#ffe4e6', // rose-100
  bgSubtle: '#fecdd3',  // rose-200

  hex: {
    rose400: '#fb7185', rose500: '#f43f5e',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: { section: "linear-gradient(to bottom, #fff1f2, #ffe4e6)", bookCoverSide: "linear-gradient(to bottom right, #fecdd3, #fda4af)", navigationDots: "#ffffff" },
  textColors: { primary: "#881337", secondary: "#9f1239", highlight: "#f43f5e", badge: "#e11d48", wishlistSaved: "#e11d48", wishlistDefault: "#9f1239" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, #fb7185, #f43f5e)", hoverBackground: "linear-gradient(135deg, #f43f5e, #e11d48)", textColor: "#ffffff" },
    secondaryButton: { background: "#ffe4e6", borderColor: "#fecdd3", hoverBackground: "#fff1f2", textColor: "#881337" },
    wishlistButton: { savedBackground: "#fff1f2", savedBorderColor: "#fb7185", defaultBackground: "#ffe4e6", defaultBorderColor: "#fecdd3", hoverBackground: "#fff1f2" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#d1d5db", navigationArrow: "#f43f5e", navigationArrowHover: "#e11d48" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #e6dada, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #e6dada, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #e6dada, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #e6dada, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #e6dada, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #e6dada, inset -3px -3px 6px #ffffff",
  opacityOverlay: 0.1
};
export default clayBlush;