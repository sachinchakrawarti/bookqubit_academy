// src/customization/themes/themes_clay/claySky.js
const claySky = {
  name: 'clay-sky',
  label: 'Clay Sky',

  primary: '#38bdf8',   // sky-400
  text: '#0c4a6e',      // sky-900
  muted: '#0369a1',     // sky-700
  bg: '#f0f9ff',        // sky-50
  bgSurface: '#e0f2fe', // sky-100
  bgSubtle: '#bae6fd',  // sky-200

  hex: {
    sky400: '#38bdf8', sky500: '#0ea5e9',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: { section: "linear-gradient(to bottom, #f0f9ff, #e0f2fe)", bookCoverSide: "linear-gradient(to bottom right, #bae6fd, #7dd3fc)", navigationDots: "#ffffff" },
  textColors: { primary: "#0c4a6e", secondary: "#0369a1", highlight: "#0ea5e9", badge: "#0284c7", wishlistSaved: "#e11d48", wishlistDefault: "#0369a1" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, #38bdf8, #0ea5e9)", hoverBackground: "linear-gradient(135deg, #0ea5e9, #0284c7)", textColor: "#ffffff" },
    secondaryButton: { background: "#e0f2fe", borderColor: "#bae6fd", hoverBackground: "#f0f9ff", textColor: "#0c4a6e" },
    wishlistButton: { savedBackground: "#fff1f2", savedBorderColor: "#fb7185", defaultBackground: "#e0f2fe", defaultBorderColor: "#bae6fd", hoverBackground: "#f0f9ff" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#d1d5db", navigationArrow: "#0ea5e9", navigationArrowHover: "#0284c7" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #ccd9e6, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #ccd9e6, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #ccd9e6, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #ccd9e6, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #ccd9e6, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #ccd9e6, inset -3px -3px 6px #ffffff",
  opacityOverlay: 0.1
};
export default claySky;