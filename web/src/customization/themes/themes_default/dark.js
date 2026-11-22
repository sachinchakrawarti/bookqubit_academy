// src/customization/themes/themes_default/dark.js
const darkTheme = {
  name: 'dark',
  label: 'Midnight Ink',

  // Core color tokens used by visual styles and CSS injection
  primary: '#38bdf8',   // sky-400 (vibrant contrast for dark mode)
  text: '#f8fafc',      // slate-50 (crisp white-ink)
  muted: '#94a3b8',     // slate-400 (muted secondary text)
  bg: '#0f172a',        // slate-900 (deep midnight canvas)
  bgSurface: '#1e293b', // slate-800 (elevated card/surface)
  bgSubtle: '#020617',  // slate-950 (subtle deep background/tint)

  hex: {
    sky50: '#f0f9ff',
    sky100: '#e0f2fe',
    sky200: '#bae6fd',
    sky400: '#38bdf8',
    sky500: '#0ea5e9',
    sky600: '#0284c7',
    sky700: '#0369a1',

    blue500: '#3b82f6',
    blue600: '#2563eb',

    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate400: '#94a3b8',
    slate600: '#475569',
    slate700: '#334155',
    slate800: '#1e293b',
    slate900: '#0f172a',
    slate950: '#020617',

    rose50: '#fff1f2',
    rose400: '#fb7185',
    rose600: '#e11d48',

    amber400: '#fbbf24',

    gray50: '#f9fafb',
    gray300: '#d1d5db',
    gray600: '#4b5563',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #0f172a, #020617)",
    bookCoverSide: "linear-gradient(to bottom right, #1e293b, #0f172a)",
    navigationDots: "#1e293b"
  },

  textColors: {
    primary: "#f8fafc",
    secondary: "#94a3b8",
    highlight: "#38bdf8",
    badge: "#38bdf8",
    wishlistSaved: "#fb7185",
    wishlistDefault: "#94a3b8"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #0ea5e9, #3b82f6)",
      hoverBackground: "linear-gradient(to right, #0284c7, #2563eb)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#1e293b",
      borderColor: "#334155",
      hoverBackground: "#334155",
      textColor: "#f8fafc"
    },
    wishlistButton: {
      savedBackground: "rgba(225, 29, 72, 0.2)",
      savedBorderColor: "#fb7185",
      defaultBackground: "#1e293b",
      defaultBorderColor: "#475569",
      hoverBackground: "#334155"
    }
  },

  iconColors: {
    starFilled: "#fbbf24",
    starEmpty: "#475569",
    navigationArrow: "#38bdf8",
    navigationArrowHover: "#7dd3fc"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
    container: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
    button: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
    buttonHover: "0 10px 15px -3px rgba(14, 165, 233, 0.25), 0 4px 6px -4px rgba(14, 165, 233, 0.15)",
    navigationDotContainer: "0 1px 2px 0 rgba(0, 0, 0, 0.5)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
  opacityOverlay: 0.2
};

export default darkTheme;