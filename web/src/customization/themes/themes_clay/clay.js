// src/customization/themes/themes_clay/clay.js
const clayTheme = {
  name: 'clay',
  label: 'Classic Clay',

  primary: '#f472b6',   // pink-400
  text: '#831843',      // pink-900
  muted: '#9d174d',     // pink-800
  bg: '#fdf2f8',        // pink-50
  bgSurface: '#fce7f3', // pink-100
  bgSubtle: '#fbcfe8',  // pink-200

  hex: {
    pink400: '#f472b6', pink500: '#ec4899',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fdf2f8, #fce7f3)",
    bookCoverSide: "linear-gradient(to bottom right, #fbcfe8, #f9a8d4)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#831843",
    secondary: "#9d174d",
    highlight: "#ec4899",
    badge: "#be185d",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#9d174d"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(135deg, #f472b6, #ec4899)",
      hoverBackground: "linear-gradient(135deg, #ec4899, #db2777)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#fce7f3",
      borderColor: "#fbcfe8",
      hoverBackground: "#fdf2f8",
      textColor: "#831843"
    },
    wishlistButton: {
      savedBackground: "#fff1f2", savedBorderColor: "#fb7185",
      defaultBackground: "#fce7f3", defaultBorderColor: "#fbcfe8",
      hoverBackground: "#fdf2f8"
    }
  },

  iconColors: {
    starFilled: "#fbbf24", starEmpty: "#d1d5db",
    navigationArrow: "#ec4899", navigationArrowHover: "#db2777"
  },

  border: {
    default: "24px", // Extra rounded for clay
    button: "16px",  // Puffy buttons
    navigationDot: "9999px"
  },

  shadow: {
    // Claymorphism requires thick, soft shadows
    book: "20px 20px 40px #e4d4dc, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #e4d4dc, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #e4d4dc, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #e4d4dc, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #e4d4dc, -2px -2px 4px #ffffff"
  },

  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #e4d4dc, inset -3px -3px 6px #ffffff",
  opacityOverlay: 0.1
};

export default clayTheme;