// src/customization/themes/themes_neumorphism/neuSky.js
const neuSky = {
  name: 'neu-sky',
  label: 'Neu Sky',

  primary: '#0ea5e9',   // sky-500
  text: '#0c4a6e',      // sky-900
  muted: '#0369a1',     // sky-700
  
  bg: '#f0f9ff',        // sky-50
  bgSurface: '#f0f9ff',
  bgSubtle: '#e0f2fe',  // sky-100

  hex: {
    slate200: '#e0f2fe', slate300: '#bae6fd', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #f0f9ff, #f0f9ff)",
    bookCoverSide: "linear-gradient(to bottom right, #f0f9ff, #e0f2fe)",
    navigationDots: "#f0f9ff"
  },
  textColors: { primary: "#0c4a6e", secondary: "#0369a1", highlight: "#0ea5e9", badge: "#0284c7", wishlistSaved: "#e11d48", wishlistDefault: "#0369a1" },

  buttonColors: {
    primaryButton: { background: "#f0f9ff", hoverBackground: "#e0f2fe", textColor: "#0ea5e9" },
    secondaryButton: { background: "#f0f9ff", borderColor: "#f0f9ff", hoverBackground: "#e0f2fe", textColor: "#0369a1" },
    wishlistButton: { savedBackground: "#f0f9ff", savedBorderColor: "#fb7185", defaultBackground: "#f0f9ff", defaultBorderColor: "#f0f9ff", hoverBackground: "#e0f2fe" }
  },
  iconColors: { starFilled: "#fbbf24", starEmpty: "#bae6fd", navigationArrow: "#0ea5e9", navigationArrowHover: "#0284c7" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #ccd9e6, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #ccd9e6, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #ccd9e6, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #ccd9e6, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #ccd9e6, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
  opacityOverlay: 0.1
};
export default neuSky;