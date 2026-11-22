// src/customization/themes/themes_default/ocean.js
const oceanTheme = {
  name: 'ocean',
  label: 'Deep Ocean',

  // Core color tokens used by visual styles and CSS injection
  primary: '#0891b2',   // cyan-600 (deep marine accent)
  text: '#164e63',      // cyan-900 (dark oceanic ink)
  muted: '#64748b',     // slate-500 (muted secondary text)
  bg: '#ecfeff',        // cyan-50 (cool marine canvas)
  bgSurface: '#ffffff', // pure white for elevated cards
  bgSubtle: '#cffafe',  // cyan-100 (subtle cool tint)

  hex: {
    cyan50: '#ecfeff',
    cyan100: '#cffafe',
    cyan200: '#a5f3fc',
    cyan400: '#22d3ee',
    cyan500: '#06b6d4',
    cyan600: '#0891b2',
    cyan700: '#0e7490',
    cyan800: '#155e75',
    cyan900: '#164e63',

    teal50: '#f0fdfa',
    teal100: '#ccfbf1',
    teal500: '#14b8a6',
    teal600: '#0d9488',

    blue50: '#eff6ff',
    blue100: '#dbeafe',
    blue500: '#3b82f6',
    blue600: '#2563eb',

    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate500: '#64748b',
    slate700: '#334155',

    rose50: '#fff1f2',
    rose400: '#fb7185',
    rose600: '#e11d48',

    amber400: '#fbbf24',
    amber500: '#f59e0b',

    gray50: '#f9fafb',
    gray300: '#d1d5db',
    gray600: '#4b5563',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #ecfeff, #cffafe)",
    bookCoverSide: "linear-gradient(to bottom right, #cffafe, #a5f3fc)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#164e63",
    secondary: "#64748b",
    highlight: "#0891b2",
    badge: "#0e7490",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#64748b"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #0891b2, #06b6d4)",
      hoverBackground: "linear-gradient(to right, #0e7490, #0891b2)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#ffffff",
      borderColor: "#22d3ee",
      hoverBackground: "#ecfeff",
      textColor: "#0e7490"
    },
    wishlistButton: {
      savedBackground: "#fff1f2",
      savedBorderColor: "#fb7185",
      defaultBackground: "#ffffff",
      defaultBorderColor: "#d1d5db",
      hoverBackground: "#f9fafb"
    }
  },

  iconColors: {
    starFilled: "#f59e0b",
    starEmpty: "#d1d5db",
    navigationArrow: "#0891b2",
    navigationArrowHover: "#0e7490"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(22, 78, 99, 0.1), 0 8px 10px -6px rgba(22, 78, 99, 0.08)",
    container: "0 10px 15px -3px rgba(22, 78, 99, 0.08), 0 4px 6px -4px rgba(22, 78, 99, 0.06)",
    button: "0 4px 6px -1px rgba(22, 78, 99, 0.1), 0 2px 4px -2px rgba(22, 78, 99, 0.06)",
    buttonHover: "0 10px 15px -3px rgba(8, 145, 178, 0.2), 0 4px 6px -4px rgba(8, 145, 178, 0.12)",
    navigationDotContainer: "0 1px 2px 0 rgba(22, 78, 99, 0.05)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(22, 78, 99, 0.08)",
  opacityOverlay: 0.1
};

export default oceanTheme;