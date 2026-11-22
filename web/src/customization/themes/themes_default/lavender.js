// src/customization/themes/themes_default/lavender.js
const lavenderTheme = {
  name: 'lavender',
  label: 'Soft Lavender',

  // Core color tokens used by visual styles and CSS injection
  primary: '#8b5cf6',   // violet-500 (vibrant lavender accent)
  text: '#2e1065',      // violet-950 (deep rich purple ink)
  muted: '#6b7280',     // gray-500 (muted secondary text)
  bg: '#faf5ff',        // purple-50 (soft lavender canvas)
  bgSurface: '#ffffff', // pure white for elevated cards
  bgSubtle: '#f3e8ff',  // purple-100 (subtle lavender tint)

  hex: {
    violet50: '#f5f3ff',
    violet100: '#ede9fe',
    violet200: '#ddd6fe',
    violet400: '#a78bfa',
    violet500: '#8b5cf6',
    violet600: '#7c3aed',
    violet700: '#6d28d9',
    violet800: '#5b21b6',
    violet900: '#4c1d95',
    violet950: '#2e1065',

    purple50: '#faf5ff',
    purple100: '#f3e8ff',
    purple500: '#a855f7',
    purple600: '#9333ea',

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
    amber500: '#f59e0b',

    gray50: '#f9fafb',
    gray300: '#d1d5db',
    gray500: '#6b7280',
    gray600: '#4b5563',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #faf5ff, #f3e8ff)",
    bookCoverSide: "linear-gradient(to bottom right, #f3e8ff, #e9d5ff)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#2e1065",
    secondary: "#6b7280",
    highlight: "#8b5cf6",
    badge: "#6d28d9",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#6b7280"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #8b5cf6, #a855f7)",
      hoverBackground: "linear-gradient(to right, #7c3aed, #9333ea)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#ffffff",
      borderColor: "#a78bfa",
      hoverBackground: "#f5f3ff",
      textColor: "#6d28d9"
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
    navigationArrow: "#8b5cf6",
    navigationArrowHover: "#6d28d9"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(46, 16, 101, 0.1), 0 8px 10px -6px rgba(46, 16, 101, 0.08)",
    container: "0 10px 15px -3px rgba(46, 16, 101, 0.08), 0 4px 6px -4px rgba(46, 16, 101, 0.06)",
    button: "0 4px 6px -1px rgba(46, 16, 101, 0.1), 0 2px 4px -2px rgba(46, 16, 101, 0.06)",
    buttonHover: "0 10px 15px -3px rgba(139, 92, 246, 0.2), 0 4px 6px -4px rgba(139, 92, 246, 0.12)",
    navigationDotContainer: "0 1px 2px 0 rgba(46, 16, 101, 0.05)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(46, 16, 101, 0.08)",
  opacityOverlay: 0.1
};

export default lavenderTheme;