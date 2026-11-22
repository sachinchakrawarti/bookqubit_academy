// src/customization/themes/themes_clay/clayLavender.js
const clayLavender = {
  name: 'clay-lavender',
  label: 'Clay Lavender',

  primary: '#c084fc',   // purple-400
  text: '#4c1d95',      // violet-900
  muted: '#6d28d9',     // violet-700
  bg: '#f5f3ff',        // violet-50
  bgSurface: '#ede9fe', // violet-100
  bgSubtle: '#ddd6fe',  // violet-200

  hex: {
    purple400: '#c084fc', purple500: '#a855f7',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: { section: "linear-gradient(to bottom, #f5f3ff, #ede9fe)", bookCoverSide: "linear-gradient(to bottom right, #ddd6fe, #c4b5fd)", navigationDots: "#ffffff" },
  textColors: { primary: "#4c1d95", secondary: "#6d28d9", highlight: "#a855f7", badge: "#7e22ce", wishlistSaved: "#e11d48", wishlistDefault: "#6d28d9" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, #c084fc, #a855f7)", hoverBackground: "linear-gradient(135deg, #a855f7, #9333ea)", textColor: "#ffffff" },
    secondaryButton: { background: "#ede9fe", borderColor: "#ddd6fe", hoverBackground: "#f5f3ff", textColor: "#4c1d95" },
    wishlistButton: { savedBackground: "#fff1f2", savedBorderColor: "#fb7185", defaultBackground: "#ede9fe", defaultBorderColor: "#ddd6fe", hoverBackground: "#f5f3ff" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#d1d5db", navigationArrow: "#a855f7", navigationArrowHover: "#9333ea" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #dcd7e8, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #dcd7e8, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #dcd7e8, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #dcd7e8, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #dcd7e8, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #dcd7e8, inset -3px -3px 6px #ffffff",
  opacityOverlay: 0.1
};
export default clayLavender;