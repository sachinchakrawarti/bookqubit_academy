// src/customization/themes/themes_clay/claySand.js
const claySand = {
  name: 'clay-sand',
  label: 'Clay Sand',

  primary: '#fbbf24',   // amber-400
  text: '#78350f',      // amber-900
  muted: '#b45309',     // amber-700
  bg: '#fffbeb',        // amber-50
  bgSurface: '#fef3c7', // amber-100
  bgSubtle: '#fde68a',  // amber-200

  hex: {
    amber400: '#fbbf24', amber500: '#f59e0b',
    slate200: '#e2e8f0', slate300: '#cbd5e1', slate900: '#0f172a',
    white: '#ffffff',
  },

  background: { section: "linear-gradient(to bottom, #fffbeb, #fef3c7)", bookCoverSide: "linear-gradient(to bottom right, #fde68a, #fcd34d)", navigationDots: "#ffffff" },
  textColors: { primary: "#78350f", secondary: "#b45309", highlight: "#f59e0b", badge: "#92400e", wishlistSaved: "#e11d48", wishlistDefault: "#b45309" },

  buttonColors: {
    primaryButton: { background: "linear-gradient(135deg, #fbbf24, #f59e0b)", hoverBackground: "linear-gradient(135deg, #f59e0b, #d97706)", textColor: "#ffffff" },
    secondaryButton: { background: "#fef3c7", borderColor: "#fde68a", hoverBackground: "#fffbeb", textColor: "#78350f" },
    wishlistButton: { savedBackground: "#fff1f2", savedBorderColor: "#fb7185", defaultBackground: "#fef3c7", defaultBorderColor: "#fde68a", hoverBackground: "#fffbeb" }
  },
  iconColors: { starFilled: "#d97706", starEmpty: "#d1d5db", navigationArrow: "#f59e0b", navigationArrowHover: "#d97706" },

  border: { default: "24px", button: "16px", navigationDot: "9999px" },
  shadow: {
    book: "20px 20px 40px #e6dfcb, -20px -20px 40px #ffffff",
    container: "8px 8px 16px #e6dfcb, -8px -8px 16px #ffffff",
    button: "6px 6px 12px #e6dfcb, -6px -6px 12px #ffffff",
    buttonHover: "4px 4px 8px #e6dfcb, -4px -4px 8px #ffffff",
    navigationDotContainer: "2px 2px 4px #e6dfcb, -2px -2px 4px #ffffff"
  },
  layout: { sectionPadding: "48px 16px", containerWidth: "1280px" },
  ringEffect: "inset 3px 3px 6px #e6dfcb, inset -3px -3px 6px #ffffff",
  opacityOverlay: 0.1
};
export default claySand;