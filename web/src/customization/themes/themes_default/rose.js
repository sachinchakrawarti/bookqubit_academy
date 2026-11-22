// src/customization/themes/themes_default/rose.js
const roseTheme = {
  name: 'rose',
  label: 'Rose Quartz',

  // Core color tokens used by visual styles and CSS injection
  primary: '#e11d48',   // rose-600 (rich rose accent)
  text: '#4c0519',      // rose-950 (deep wine ink)
  muted: '#78716c',     // stone-500 (warm muted secondary text)
  bg: '#fff1f2',        // rose-50 (soft blush canvas)
  bgSurface: '#ffffff', // pure white for elevated cards
  bgSubtle: '#ffe4e6',  // rose-100 (subtle blush tint)

  hex: {
    rose50: '#fff1f2',
    rose100: '#ffe4e6',
    rose200: '#fecdd3',
    rose400: '#fb7185',
    rose500: '#f43f5e',
    rose600: '#e11d48',
    rose700: '#be123c',
    rose800: '#9f1239',
    rose900: '#881337',
    rose950: '#4c0519',

    pink50: '#fdf2f8',
    pink100: '#fce7f3',
    pink500: '#ec4899',
    pink600: '#db2777',

    stone50: '#fafaf9',
    stone100: '#f5f5f4',
    stone200: '#e7e5e4',
    stone300: '#d6d3d1',
    stone500: '#78716c',
    stone700: '#44403c',

    amber400: '#fbbf24',
    amber500: '#f59e0b',

    gray50: '#f9fafb',
    gray300: '#d1d5db',
    gray600: '#4b5563',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #fff1f2, #ffe4e6)",
    bookCoverSide: "linear-gradient(to bottom right, #ffe4e6, #fecdd3)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#4c0519",
    secondary: "#78716c",
    highlight: "#e11d48",
    badge: "#be123c",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#78716c"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #e11d48, #f43f5e)",
      hoverBackground: "linear-gradient(to right, #be123c, #e11d48)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#ffffff",
      borderColor: "#fb7185",
      hoverBackground: "#fff1f2",
      textColor: "#be123c"
    },
    wishlistButton: {
      savedBackground: "#fff1f2",
      savedBorderColor: "#e11d48",
      defaultBackground: "#ffffff",
      defaultBorderColor: "#d6d3d1",
      hoverBackground: "#fafaf9"
    }
  },

  iconColors: {
    starFilled: "#f59e0b",
    starEmpty: "#d6d3d1",
    navigationArrow: "#e11d48",
    navigationArrowHover: "#be123c"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(76, 5, 25, 0.1), 0 8px 10px -6px rgba(76, 5, 25, 0.08)",
    container: "0 10px 15px -3px rgba(76, 5, 25, 0.08), 0 4px 6px -4px rgba(76, 5, 25, 0.06)",
    button: "0 4px 6px -1px rgba(76, 5, 25, 0.1), 0 2px 4px -2px rgba(76, 5, 25, 0.06)",
    buttonHover: "0 10px 15px -3px rgba(225, 29, 72, 0.2), 0 4px 6px -4px rgba(225, 29, 72, 0.12)",
    navigationDotContainer: "0 1px 2px 0 rgba(76, 5, 25, 0.05)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(76, 5, 25, 0.08)",
  opacityOverlay: 0.1
};

export default roseTheme;