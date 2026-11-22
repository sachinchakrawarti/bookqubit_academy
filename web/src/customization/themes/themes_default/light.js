// src/customization/themes/themes_default/light.js
const lightTheme = {
  name: 'light',
  label: 'Crisp Daylight',

  // Core color tokens used by visual styles and CSS injection
  primary: '#0284c7',   // sky-600 (crisp ocean-sky accent)
  text: '#0f172a',      // slate-900 (deep high-contrast ink)
  muted: '#475569',     // slate-600 (muted secondary slate text)
  bg: '#ffffff',        // pure crisp white canvas
  bgSurface: '#ffffff', // elevated card/surface
  bgSubtle: '#f8fafc',  // slate-50 (subtle surface/tint)

  hex: {
    sky50: '#f0f9ff',
    sky100: '#e0f2fe',
    sky200: '#bae6fd',
    sky500: '#0ea5e9',
    sky600: '#0284c7',
    sky700: '#0369a1',
    sky800: '#075985',

    blue500: '#3b82f6',
    blue600: '#2563eb',

    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate600: '#475569',
    slate700: '#334155',
    slate900: '#0f172a',

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
    section: "linear-gradient(to bottom, #ffffff, #f8fafc)",
    bookCoverSide: "linear-gradient(to bottom right, #f0f9ff, #e0f2fe)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#0f172a",
    secondary: "#475569",
    highlight: "#0284c7",
    badge: "#075985",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#4b5563"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #0284c7, #3b82f6)",
      hoverBackground: "linear-gradient(to right, #0369a1, #2563eb)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#ffffff",
      borderColor: "#0ea5e9",
      hoverBackground: "#f0f9ff",
      textColor: "#0369a1"
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
    starFilled: "#fbbf24",
    starEmpty: "#d1d5db",
    navigationArrow: "#0284c7",
    navigationArrowHover: "#075985"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
    container: "0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.06)",
    button: "0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
    buttonHover: "0 10px 15px -3px rgba(2, 132, 199, 0.18), 0 4px 6px -4px rgba(2, 132, 199, 0.12)",
    navigationDotContainer: "0 1px 2px 0 rgba(15, 23, 42, 0.05)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(15, 23, 42, 0.08)",
  opacityOverlay: 0.1
};

export default lightTheme;